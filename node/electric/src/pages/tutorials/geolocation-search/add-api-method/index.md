---
title: "Add API Method"
description: "In this section, you'll learn how search for locations based on their coordinates using the WeDeploy API Client."
buttonTitle: "I added the methods"
tutorialTitle: "Getting started with WeDeploy geolocation search"
parentId: "geolocation-search"
layout: "tutorial"
time: 90
weight: 7
---

#### {$page.title}

As you might have noticed, the app you just deployed doesn't actually work. That is because we still need to add a few more lines of code.

Lets add a request that will search our database for any names that match the search input value.

To do this, go back to the `ui` folder and paste this code between the "Search Data Method" comments in the `search.js` file:

```javascript
WeDeploy
    .data('https://db-projectID.wedeploy.io')
    .prefix('name', queryStr)
    .limit(100)
    .aggregate('score')
    .distance('location', lat + ', ' + lng, radius + 'm')
    .highlight('name')
    .search('places')
    .then(function(results) {
      plotResults(results);
    })
```

**Note:** make sure to replace `<projectID>` with the id of your project.
