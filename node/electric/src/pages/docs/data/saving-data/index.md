---
title: "Saving Data"
description: "Save a new document in the database with only three lines of code."
headerTitle: "Data"
layout: "guide"
weight: 3
---

### {$page.title}

###### {$page.description}

<aside>

If you are unfamiliar with our API, please visit the [API Clients](/docs/intro/api-clients/) page first to learn how to install and configure it.

</aside>

<article id="1">

## Save a Data Document

You can save new data to your collection by posting a JSON object.

```javascript
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.create('movies', {
		"title": "Star Wars IV",
		"year": 1977,
		"rating": 8.7
	}).then(function(movie) {
		console.log(movie);
	});
```
```swift
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.create(resource: "movies", object: [
		"title" : "Star Wars IV",
		"year" : 1977,
		"ratings" : 8.7
	])
	.then { movie in
		print(movie)
	}
```
```text/x-java
JSONObject movieJsonObject = new JSONObject()
	.put("title", "Star Wars IV")
	.put("year", 1977)
	.put("rating", 8.7);

WeDeploy
	.data("https://<serviceID>-<projectID>.wedeploy.io")
	.create("movies", movieJsonObject)
	.execute();
```

This operation will return the newly created document.

```javascript
{
	"id":" "115992383516607958",
	"title": "Star Wars IV",
	"year": 1977,
	"rating": 8.7
}
```

Every document must have an ID, so if you do not declare an `id` string in your document, one will be auto-generated for you.

</article>

<article id="2">

## Save Multiple Documents

With the same method you're able to save multiple data documents by passing an array of objects.

```javascript
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.create('movies', [
		{
			"title": "Star Wars III",
			"year": 2005,
			"rating": 8.0
		},
		{
			"title": "Star Wars II",
			"year": 2002,
			"rating": 8.6
		}
	]).then(function(movies) {
		console.log(movies);
	});
```
```swift
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.create(resource: "movies", object: [
	[
		"title" : "Star Wars III",
		"year" : 2005,
		"ratings" : 8.0
	],
	[
		"title" : "Star Wars II",
		"year" : 2002,
		"ratings" : 8.6
	]
	])
	.then { movie in
		print(movie)
	}
```
```text/x-java
JSONObject movie1JsonObject = new JSONObject()
	.put("title", "Star Wars III")
	.put("year", 2005)
	.put("rating", 8.0);

JSONObject movie2JsonObject = new JSONObject()
	.put("title", "Star Wars II")
	.put("year", 2002)
	.put("rating", 8.6);

JSONArray moviesJsonArray = new JSONArray()
	.put(movie1JsonObject)
	.put(movie2JsonObject);

WeDeploy
	.data("https://<serviceID>-<projectID>.wedeploy.io")
	.create("movies", moviesJsonArray)
	.execute();
```

</article>

## What's next?

Now that you've learned how to save, you can start [getting data](/docs/data/retrieving-data/).
