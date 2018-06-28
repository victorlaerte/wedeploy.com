import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './DataDemo.soy.js';
import {
  getUserInputQueryValues,
  generateSnippetAndroid,
  generateSnippetWeb,
  generateSnippetSwift,
} from './DataDemoSnippets.js';
import WeDeploy from 'wedeploy';
import {Config} from 'metal-state';
import {isServerSide} from 'metal';
import {dom} from 'metal-dom';
import {isDefAndNotNull} from 'metal';
import {highlightAllCodeElementsInDoc} from '../utils/highlight.js';

export default class DataDemo extends Component {
  attached() {
    if (isServerSide()) {
      return;
    }
    this.search();
    this.on('rendered', () => highlightAllCodeElementsInDoc());
  }

  cancelPendingRequest() {
    if (this.pendingRequest) {
      this.pendingRequest.cancel();
      this.pendingRequest = null;
    }
  }

  firstPage() {
    this.paginate(0);
  }

  getLastPage() {
    return Math.floor(this.total / this.itemsPerPage);
  }

  getYearsFilter() {
    let filter;
    const years = Object.keys(this.yearsSelected);
    if (years.length) {
      filter = Filter.equal('year', years.pop());
    }
    for (let year of years) {
      filter = filter.or('year', year);
    }
    return filter;
  }

  getCodeSnippet(index) {
    switch (index) {
      case 0:
        return generateSnippetWeb(this);
      case 1:
        return generateSnippetSwift(this);
      case 2:
        return generateSnippetAndroid(this);
    }
  }

  getSelectedSnippetIndex() {
    const panels = window.document.querySelectorAll('.panel-source--datademo');
    for (let i = 0; i < panels.length; i++) {
      if (dom.hasClass(panels[i], 'is-active')) {
        return i;
      }
    }
    return 0;
  }

  lastPage() {
    this.paginate(this.getLastPage());
  }

  nextPage() {
    this.paginate(Math.min(this.getLastPage(), ++this.currentPage));
  }

  paginate(page) {
    this.currentPage = page;
    this.search();
  }

  pageFromEvent(event) {
    const page = parseInt(event.delegateTarget.value, 10);
    this.paginate(page - 1);
  }

  previousPage() {
    this.paginate(Math.max(0, --this.currentPage));
  }

  preventSubmission(event) {
    event.preventDefault();
  }

  populateSelectedCodeSnippet() {
    this.snippet = this.getCodeSnippet(this.getSelectedSnippetIndex());
  }

  processSearchAggregationForGenres(aggregations) {
    this.genres = Object.keys(aggregations.genres)
      .sort()
      .map(genre => {
        return {
          value: genre,
          total: aggregations.genres[genre],
        };
      });
  }

  processSearchAggregationForYears(aggregations) {
    this.years = Object.keys(aggregations.years)
      .sort()
      .reverse()
      .map(year => {
        return {
          value: year,
          total: aggregations.years[year],
        };
      });
  }

  search() {
    this.cancelPendingRequest();
    this.populateSelectedCodeSnippet();

    const {genres, series} = getUserInputQueryValues();

    let data = WeDeploy.data('db-tv.wedeploy.io').withCredentials(false);

    if (genres) {
      data = data.prefix('genres', genres);
    }
    if (series) {
      data = data.prefix('name', series);
    }
    for (let genre of Object.keys(this.genresSelected)) {
      data = data.any('genres', genre);
    }
    for (let rating of Object.keys(this.ratingsSelected)) {
      data = data.gte('rating', rating);
    }

    let filterYears = this.getYearsFilter();
    if (filterYears) {
      data = data.where(filterYears);
    }

    this.pendingRequest = data
      .orderBy('rating', 'desc')
      .aggregate('genres', 'genres')
      .aggregate('years', 'year')
      .highlight('name')
      .limit(this.itemsPerPage)
      .offset(this.itemsPerPage * this.currentPage)
      .search('shows')
      .then(results => {
        const {total, documents, highlights, aggregations, queryTime} = results;
        this.total = total;
        this.documents = [];
        this.queryTime = queryTime;
        if (total > 0) {
          this.documents = documents;
          this.highlights = highlights;
          this.processSearchAggregationForGenres(aggregations);
          if (!this.shouldPreserveYears()) {
            this.processSearchAggregationForYears(aggregations);
          }
        }
      });
  }

  shouldPreserveYears() {
    return Object.keys(this.yearsSelected).length > 0;
  }

  searchSeries() {
    this.currentPage = 0;
    this.search();
  }

  searchSuggestion(event) {
    window.searchSeries.search.value = event.delegateTarget.dataset.query;
    this.search();
  }

  setHighlights(highlights) {
    for (let id of Object.keys(highlights)) {
      for (let property of Object.keys(highlights[id])) {
        // Convert highlights to Incremental Dom
        highlights[id][property] = Soy.toIncDom(highlights[id][property][0]);
      }
    }
    return highlights;
  }

  selectGenres(event) {
    const genre = event.delegateTarget.value;
    delete this.genresSelected[genre];
    if (event.delegateTarget.checked) {
      this.genresSelected[genre] = true;
    }
    this.searchSeries();
  }

  selectYears(event) {
    const year = event.delegateTarget.value;
    delete this.yearsSelected[year];
    if (event.delegateTarget.checked) {
      this.yearsSelected[year] = true;
    }
    this.searchSeries();
  }

  selectRatings(event) {
    const rating = event.delegateTarget.value;
    this.ratingsSelected = {};
    if (event.delegateTarget.checked) {
      this.ratingsSelected[rating] = true;
    }
    this.searchSeries();
  }

  showSnippet(event) {
    const doc = window.document;
    const index = event.delegateTarget.dataset.index;
    const panels = doc.querySelectorAll('.panel-source--datademo');
    const buttons = doc.querySelectorAll('.menu-source--datademo button');
    dom.removeClasses(buttons, 'is-active');
    dom.removeClasses(panels, 'is-active');
    dom.addClasses(buttons[index], 'is-active');
    dom.addClasses(panels[index], 'is-active');
    this.populateSelectedCodeSnippet();
  }

  snippetValueFn() {
    return this.getCodeSnippet(0);
  }
}

DataDemo.STATE = {
  snippet: Config.internal()
    .string()
    .valueFn('snippetValueFn'),
  currentPage: Config.internal()
    .number()
    .value(0),
  documents: Config.internal()
    .validator(isDefAndNotNull)
    .array()
    .value([]),
  genres: Config.internal()
    .validator(isDefAndNotNull)
    .array()
    .value([]),
  genresSelected: Config.internal()
    .validator(isDefAndNotNull)
    .object()
    .value({}),
  highlights: Config.internal()
    .validator(isDefAndNotNull)
    .object()
    .value({})
    .setter('setHighlights'),
  itemsPerPage: Config.internal()
    .number()
    .value(12),
  queryTime: Config.internal()
    .number()
    .value(0),
  ratingsSelected: Config.internal()
    .object()
    .value({}),
  total: Config.internal()
    .number()
    .value(0),
  years: Config.internal()
    .validator(isDefAndNotNull)
    .array()
    .value([]),
  yearsSelected: Config.internal()
    .validator(isDefAndNotNull)
    .object()
    .value({}),
};

Soy.register(DataDemo, templates);
