---
title: "Updating Data"
description: "Update an existing record in the database with certain attributes."
headerTitle: "Data"
layout: "guide"
weight: 8
---

### {$page.title}

###### {$page.description}

<aside>

If you are unfamiliar with our API, please visit the [API Clients](/docs/intro/api-clients/) page first to learn how to install and configure it.

</aside>

<article id="1">

## Updating Data

Updating existing data is as simple as posting new data to the fields that already exist in a document.

```javascript
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.update('movies/115992383516607958', {
		"rating": 9.1
	}).then(function(movie) {
		console.log(movie);
	});
```
```swift
WeDeploy
	.data('https://<serviceID>-<projectID>.wedeploy.io')
	.update(resourcePath: "movies/115992383516607958", updatedAttributes: [
		"rating": 9.1
	])
	.then { movie in
		print(movie)
	}
```
```text/x-java
JSONObject movieJsonObject = new JSONObject()
	.put("rating", 9.1);

WeDeploy
	.data("https://<serviceID>-<projectID>.wedeploy.io")
	.update("movies/115992383516607958", movieJsonObject)
	.execute();
```

</article>

<article id="2">

## Replacing Data

You can also replace all the data in an existing document with the new data that you pass to it.

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .replace('movies/115992383516607958', {
    "rating": 9.1,
    "title": "Avengers"
  }).then(function(movie) {
    console.log(movie);
  });
```
```swift
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .replace(resourcePath: "movies/115992383516607958", replacedAttributes: [
    "rating": 9.1,
    "title": "Avengers"
  ])
  .then { movie in
    print(movie)
  }
```
```text/x-java
JSONObject movieJsonObject = new JSONObject()
  .put("rating", 9.1);
  .put("title", "Avengers");

WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .replace("movies/115992383516607958", movieJsonObject)
  .execute();
```

**Warning**: By using `replace`, all old data in the replaced document will be gone and only the data you pass will remain.

</article>

## What's next?

Now that you've learned how to update, you can start [deleting data](/docs/data/deleting-data/).
