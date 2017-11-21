---
title: "Searching Data"
description: "Advanced queries using search."
headerTitle: "Data"
layout: "guide"
weight: 6
---

### {$page.title}

###### {$page.description}

<aside>

If you are unfamiliar with our API, please visit the [API Clients](/docs/intro/api-clients/) page first to learn how to install and configure it.

</aside>

<article id="1">

## Search data

Using the `.search` method is very similar to the `.get` method, but it has one key difference. It will retrieve not just the results of your request, but also give you metadata about the relevancy of your results. This information will help you give your users an exceptional search experience.

In this example, we are doing a simple search with a database of Star Wars movies to find titles similar to this query.

```javascript
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.similar('title', 'The attack an awakened Jedi uses to strike a Sith is pure force!')
	.search('movies')
	.then(function(movies) {
		console.log(movies);
	});
```
```swift
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.similar(field: "title", query: "The attack an awakened Jedi uses to strike a Sith is pure force!")
	.search(resourcePath: "movies")
	.then { movies in
		print(movies)
	}
```
```text/x-java
WeDeploy
	.data('https://data-datademo.wedeploy.io')
	.where(similar("title", "The attack an awakened Jedi uses to strike a Sith is pure force!"))
	.search("movies")
	.execute();
```

We receive not only the documents that match the filter, but also search metadata like the match score of each document:

```javascript
{
	"total": 5,
	"documents": [
		{
			"title": "Star Wars: Episode VII - The Force Awakens",
			"id": "star_wars_vii"
		},
		{
			"title": "Star Wars: Episode V - The Empire Strikes Back",
			"id": "star_wars_v"
		},
		{
			"title": "Star Wars: Episode VI - Return of the Jedi",
			"id": "star_wars_vi"
		},
		{
			"title": "Star Wars: Episode III - Revenge of the Sith",
			"id": "star_wars_iii"
		},
		{
			"title": "Star Wars: Episode II - Attack of the Clones",
			"id": "staw_wars_ii"
		}
	],
	"scores": {
		"star_wars_ii": 0.13102644681930542,
		"star_wars_iii": 0.13102644681930542,
		"star_wars_v": 0.13102644681930542,
		"star_wars_vi": 0.13102644681930542,
		"star_wars_vii": 0.5241057872772217
	},
	"queryTime": 1
}
```

Notice that the score of the star_wars_vii document is bigger than the other matches, indicating that its title is more similar to the given filter than the others. This allows you to populate your search results by relevancy.

<aside>

For more examples of filters you can use with `search`, see our [Filtering Data page](/docs/data/filtering-data/)

</aside>

</article>

## What's next?

Now that you've learned how to search, you can start [filtering data](/docs/data/filtering-data/).
