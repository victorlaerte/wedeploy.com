---
title: "Building a truly serverless mobile app with WeDeploy and Kotlin"
description: "Easily build a full-serverless CRUD app using WeDeploy Data and Kotlin"
date: "July 31, 2018"
author: "Victor Oliveira"
image: "images/blog/post-31--0.png"
layout: "blog"
---

<article>

<figure>
  <img  src="/images/blog/post-31--0.png" alt="we love kotlin">
  <figcaption>We ❤ Kotlin</figcaption>
</figure>

In this post we gonna use the WeDeploy Android SDK to build a serverless app using Kotlin. Our application is very simple, containing a list of items with options to add, update and delete items.

<figure>
  <img class="blog-img-shadow" src="/images/blog/post-31--1.png" alt="app layout">
</figure>

The first step is to have an account at [wedeploy.com](https://wedeploy.com/) and create a project with the Data service setup. This setting is quite simple and you can find it in detail in the video at the end of the article, or simply use our magic button available in [our repository](https://github.com/victorlaerte/wedeploy-webinar).

Let's start by creating our project in Android Studio using the Basic Activity template:

<figure>
  <img class="blog-img-shadow" src="/images/blog/post-31--2.png" alt="android studio template">
  <figcaption>Android Studio Template</figcaption>
</figure>

<aside>
Do not forget to add our new activity to the manifest and also to add internet permission to our App. <a href="https://github.com/victorlaerte/wedeploy-webinar/blob/master/WeDeployWebinar/app/src/main/AndroidManifest.xml">AndroidManifest.xml</a>
</aside>

<aside>
The layouts creation will be ignored in this post because it is trivial for any Android programmer. <a href="https://github.com/victorlaerte/wedeploy-webinar/tree/master/WeDeployWebinar/app/src/main/res/layout">You can find layouts here</a>
</aside>

Now we can start using WeDeploy to edit or add new items:

```kotlin
override fun onCreate(savedInstanceState: Bundle?) {
  super.onCreate(savedInstanceState)
  setContentView(R.layout.activity_add_item_activity)

  weDeploy = WeDeploy.Builder().build()

  val nameEditText = findViewById<EditText>(R.id.nameEditText)
  val descriptionEditText = findViewById<EditText>(R.id.descriptionEditText)
  val addButton = findViewById<Button>(R.id.addButton)

  val parcelable = intent.extras?.getParcelable<Item>("item")

  parcelable?.let {
      itemId = it.id
      nameEditText.setText(it.name)
      descriptionEditText.setText(it.description)
  }

  addButton.setOnClickListener {
      saveItem(nameEditText, descriptionEditText)
  }
}

private fun saveItem(nameEditText: EditText, descriptionEditText: EditText) {
  val name = nameEditText.text
  val description = descriptionEditText.text
  val itemJSON = JSONObject()

  itemJSON.put("name", name)
  itemJSON.put("description", description)

  if (itemId.isEmpty()) {

      weDeploy.data("https://data-meetup.wedeploy.io")
          .create("items", itemJSON)
          .execute(this)

    } else {

      weDeploy.data("https://data-meetup.wedeploy.io")
          .update("items/$itemId", itemJSON)
          .execute(this)
    }
}

lateinit var container: LinearLayout
lateinit var weDeploy: WeDeploy
var itemId = ""
```

Note that to use WeDeploy Data we just need to create a WeDeploy instance and call the ```data``` method passing the URL of our service. This url is found in the dashboard of your project.

To create a new collection you just call ```create``` method passing the collection name the JSON collection itself. The ```update``` method works in a similar way however in addition to the name of the collection it is necessary to pass the id of the item that you want to update. Easy huh ??!

The next step is to return our ```MainActivity``` to list the items that we can now create and edit, so we will use the get method:

```kotlin
weDeploy.data("https://data-meetup.wedeploy.io")
  .orderBy("name", SortOrder.ASCENDING)
  .get("items")
  .execute(object: Callback {
      override fun onSuccess(response: Response?) {
          response?.let {
              val items = Parser.parseBody(it.body)
              refreshRecyclerView(recyclerView, items)
          }
      }

      override fun onFailure(e: Exception?) {
          e?.let {
            Log.e(MainActivity.javaClass.name, e.message)
          }
      }
  })
```

The ```get``` method is very simple, it gets the name of the collection we want to fetch and calls a ```success``` or ```failure``` callback, depending on how our request behaves. The interesting thing here is that we can chain methods that help us in the search and/or ordering of our list. There are several operators available that I will not go into detail, but it's worth checking out [our documentation](https://wedeploy.com/docs/).

Houston we have a problem!! When adding a new item our list is not being updated 😭. What to do now??

There are several ways to do this using Android's own strategies, but here we will use the WeDeploy magic: REALTIME !!!!

How does it work ?? Realtime is a socket that listens certain events in your collection. In our examples we will listen to the change event so that every time our collection changes, we update our list ***automagically***.

```kotlin
realTime = weDeploy.data("https://data-meetup.wedeploy.io")
    .orderBy("name", SortOrder.ASCENDING)
    .watch("items")
    .on("changes", { args ->
        args.forEach {
            val items = Parser.parseJSONArray(it as JSONArray)
            refreshRecyclerView(recyclerView, items)
        }
    })
```

It's recommended that we close the socket when we are no longer using it, so do not forget to call the ```close``` method in the ```onDestroy``` method of your application:

```kotlin
override fun onDestroy() {
    super.onDestroy()

    realTime?.close()
}
```

To finalize our app we must add an action to delete unwanted items from our collection. For this we added a Long Press action in our list. [Implementation Details](https://github.com/victorlaerte/wedeploy-webinar/blob/master/WeDeployWebinar/app/src/main/java/com/victorlaerte/wedeploywebinar/ItemAdapter.kt)

As simple as the other commands the delete method also receives the collection along with the id of the item that we want to remove:

```kotlin
weDeploy.data("https://data-meetup.wedeploy.io")
  .delete("items/${currentItem.id}")
  .execute(object: Callback {
      override fun onSuccess(response: Response?) {
          response?.let {
              Log.d("demo", "${it.statusCode} ${it.statusMessage} ${it.body}")
          }
      }
      override fun onFailure(e: Exception?) {
          e?.let {
              Log.d("demo", e.message)
          }
      }
  })
```

Okay, our app is done!!! I hope you have enjoyed and if you want to see the implementation details abstracted here you can watch the Webinar below that shows step by step how to build this.

<iframe width="560" height="315" src="https://www.youtube.com/embed/LKjU70wFv9c" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Did you like this post? Don't forget to let us know about your opinions! **You can connect with us on [Twitter](https://twitter.com/wedeploy) or join our community on [Slack](https://chat.wedeploy.com).**

</article>
