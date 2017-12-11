---
title: "Realtime Data"
description: "Instead of polling for changes, you can continuously get any new or updated documents in real time."
headerTitle: "Data"
layout: "guide"
weight: 5
---

### {$page.title}

###### {$page.description}

<aside>

If you are unfamiliar with our API, please visit the [API Clients](/docs/intro/api-clients/) page first to learn how to install and configure it.

</aside>

<article id="1">

## Reference

To access your data in real time, all you need to do is change from the `get` method to the `watch` method and then update your response to an event-based promise.

There are multiple event types that you can choose from for your watch task.

| Type | Description | Response |
| ---- | ----------- | -------- |
| **[changes](#2)** | Watches for newly created or updated documents | Returns list of previous 500 changed documents |
| **[create](#3)** | Watches for newly created documents | Returns most recently created document |
| **[delete](#4)** | Watches for newly deleted documents | Returns most recently deleted document |
| **[update](#5)** | Watches for newly updated | Returns most recently updated document |

Just like `get`, you also must pass the collection, or data path, that you want to watch (`.watch(collection)`).

</article>

<article id="2">

## Watching for Changed

When watching the `changes` event, the data service uses a default query limit of `500` which means on every change it will fetch the 500 most recently updated or created documents.

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .watch('movies')
  .on('changes', function(data) {
    console.log(data);
  })
  .on('fail', function(error) {
    console.log(error);
  });
```
```swift
// You have to hold a strong reference to the socket or it will be released
socket = WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .watch(resourcePath: "movies")

socket.on([.changes, .error]) { data in
  switch(data.type) {
  case .changes:
    print("changes \(data.document)")
  case .error:
    print("error \(data.document)")
  default:
    break
  }
}
```
```text/x-java
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .watch("movies")
  .on("changes", data -> System.out.println(data))
  .on("fail", error -> System.out.println(error));
```

In order to always get the most recently created document in your database, you would need to limit the query by `1` and sort by `id` in descending order. This only works if you let WeDeploy automatically create your ID's because they are generated in chronological order. If you create your own, you will need to sort for the most recently changed item another way.

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .limit(1)
  .orderBy('id', 'desc')
  .watch('movies')
  .on('changes', function(data) {
    console.log(data);
  })
  .on('fail', function(error) {
    console.log(error);
  });
```
```swift
// You have to hold a strong reference to the socket or it will be released
socket = WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .limit(1)
  .orderBy(field: "id", order: .DESC)
  .watch(resourcePath: "movies")

socket.on([.changes, .error]) { data in
  switch(data.type) {
  case .changes:
    print("changes \(data.document)")
  case .error:
    print("error \(data.document)")
  default:
    break
  }
}
```
```text/x-java
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .limit(1)
  .orderBy("id", SortOrder.DESCENDING)
  .watch("movies")
  .on("changes", data -> System.out.println(data))
  .on("fail", error -> System.out.println(error));
```

Now every time the database detects changes that affect the query you're watching, you will receive a notification with the response body you'd receive if you had done a `get` request instead. Furthermore, every time this change leads to an error response, you'll receive the error object in a fail notification on the client.

</article>

<article id="3">

## Watching for Created

When watching the `create` event, every time a new document is created within your collection, you will receive the contents of the created document within the response of your watch task.

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .watch('movies')
  .on('create', function(data) {
    console.log(data);
  })
  .on('fail', function(error) {
    console.log(error);
  });
```
```swift
// You have to hold a strong reference to the socket or it will be released
socket = WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .watch(resourcePath: "movies")

socket.on([.create, .error]) { data in
  switch(data.type) {
  case .create:
    print("create \(data.document)")
  case .error:
    print("error \(data.document)")
  default:
    break
  }
}
```
```text/x-java
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .watch("movies")
  .on("create", data -> System.out.println(data))
  .on("fail", error -> System.out.println(error));
```

</article>

<article id="4">

## Watching for Deleted

When watching the `delete` event, every time a new document is deleted within your collection, you will receive the `id` of the deleted document within the response of your watch task.

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .watch('movies')
  .on('delete', function(data) {
    console.log(data);
  })
  .on('fail', function(error) {
    console.log(error);
  });
```
```swift
// You have to hold a strong reference to the socket or it will be released
socket = WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .watch(resourcePath: "movies")

socket.on([.delete, .error]) { data in
  switch(data.type) {
  case .delete:
    print("delete \(data.document)")
  case .error:
    print("error \(data.document)")
  default:
    break
  }
}
```
```text/x-java
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .watch("movies")
  .on("delete", data -> System.out.println(data))
  .on("fail", error -> System.out.println(error));
```

</article>

<article id="5">

## Watching for Updated

When watching the `update` event, every time a new document is updated within your collection, you will receive the body of the updated document within the response of your watch task.

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .watch('movies')
  .on('update', function(data) {
    console.log(data);
  })
  .on('fail', function(error) {
    console.log(error);
  });
```
```swift
// You have to hold a strong reference to the socket or it will be released
socket = WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .watch(resourcePath: "movies")

socket.on([.update, .error]) { data in
  switch(data.type) {
  case .update:
    print("update \(data.document)")
  case .error:
    print("error \(data.document)")
  default:
    break
  }
}
```
```text/x-java
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .watch("movies")
  .on("update", data -> System.out.println(data))
  .on("fail", error -> System.out.println(error));
```

</article>

<article id="6">

## Watching with Advanced Filters

To watch for data with an advanced query, you can apply any filter to one of the available watch events.

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .where('category', 'cinema')
  .or('category', 'cartoon')
  .watch('movies')
  .on('update', function(data) {
    console.log(data);
  })
  .on('fail', function(error) {
    console.log(error);
  });
```
```swift
// You have to hold a strong reference to the socket or it will be released
socket = WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .where(field: "category", op: "=", value: "cinema")
  .or(field: "category", op: "=", value: "cartoon")
  .watch(resourcePath: "movies")

socket.on([.update, .error]) { data in
  switch(data.type) {
  case .update:
    print("update \(data.document)")
  case .error:
    print("error \(data.document)")
  default:
    break
  }
}
```
```text/x-java
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .where(equal("category", "cinema").or("category", "cartoon"))
  .watch("movies")
  .on("update", data -> System.out.println(data))
  .on("fail", error -> System.out.println(error));
```

<aside>

For more examples of useful filters and result sorting you can use, see our **[Filtering Data page](/docs/data/filtering-data/)**.

</aside>

</article>

## What's next?

Now that you've learned how to use real-time, you can start [searching data](/docs/data/searching-data/).
