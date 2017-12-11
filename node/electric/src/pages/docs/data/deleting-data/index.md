---
title: "Deleting Data"
description: "Destroy an existing field, document or collection in the database."
headerTitle: "Data"
layout: "guide"
weight: 9
---

### {$page.title}

###### {$page.description}

<aside>

If you are unfamiliar with our API, please visit the [API Clients](/docs/intro/api-clients/) page first to learn how to install and configure it.

</aside>

<article id="1">

## Deleting Data

To delete a field or an entire collection, we use the delete method and pass the collection name or data path that we want to delete.

```javascript
// Deleting a collection
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .delete('movies')

// Deleting a document
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .delete('movies/star_wars_v')

// Deleting a document field
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .delete('movies/star_wars_v/rating')
```
```swift
// Deleting a collection
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .delete(collectionOrResourcePath: "movies")

// Deleting a document
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .delete(collectionOrResourcePath: "movies/star_wars_v")

// Deleting a document field
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .delete(collectionOrResourcePath: "movies/star_wars_v/title")
```
```text/x-java
// Deleting a collection
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .delete("movies")
  .execute()

// Deleting a document
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .delete("movies/star_wars_v")
  .execute()

// Deleting a document field
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .delete("movies/star_wars_v/rating")
  .execute()
```

**Warning**: The `delete` function is irreversible. Any deleted document or collection is completely erased and cannot be retrieved.

</article>
