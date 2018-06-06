---
title: "Building a truly serverless mobile app with WeDeploy and Kotlin"
description: "In this post you will find out how simple is to use WeDeploy to create a truly serverless mobile app."
date: "June 5, 2018"
author: "Victor Oliveira"
image: "images/blog/post-30--0.png"
layout: "blog"
---

<article>

<figure>
  <img src="/images/blog/post-30--0.png" alt="We Love Koltin" />
</figure>

#### Kotlin + WeDeploy = Serverless App

The WeDeploy Android SDK is developed in Java, but I decided to use Kotlin in our demo mainly because the language has been officially adopted by Google, in addition to making our app construction a lot more fun.

![layout](images/blog/post-30--1.png)
Our application is very simple only with a list of items on the screen and initial, with the option to add, update and delete.

The first step is to make an account at wedeploy.com and create a project by configuring the Data service. This setting is quite simple and you can find it in detail in the video at the end of the article, or simply use our magic button available in [our repository](https://github.com/victorlaerte/wedeploy-webinar).

Let's start by creating our project in Android Studio using the Basic Activity template:

![create template](images/blog/post-30--1.png)

  Do not forget to add our new activity to the manifest and also to add internet permission to our App. [AndroidManifest.xml](https://github.com/victorlaerte/wedeploy-webinar/blob/master/WeDeployWebinar/app/src/main/AndroidManifest.xml)

  The layouts creation will be ignored in this post because it is trivial for any Android programmer. [You can find layouts here](https://github.com/victorlaerte/wedeploy-webinar/tree/master/WeDeployWebinar/app/src/main/res/layout)

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

Note that to use weDeploy Data we just need to create an instance and call the date method by passing the URL of our service. This url is found in the dashboard of your project.

To create a new collection the create method receives the name of the collection and a JSON of our object or a JSONArray with several objects. The update method works in a similar way however in addition to the name of the collection it is necessary to pass the id of the item that you want to change. Easy huh ??!

The next step is to return our MainActivity to list the items that we can now register and edit, so we will use the get method:

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

The get method is very simple, it gets the name of the collection we want to fetch and calls a success or failure callback, depending on how our request behaves. The interesting thing here is that we can chain methods that help us in the search and/or ordering of our list. There are several operators available that I will not go into detail, but it's worth checking out [our documentation](https://wedeploy.com/docs/).

We still have a problem. When adding a new item our list is not being updated 😭 What to do now??

There are several ways to do this using Android's own strategies, but here we will use the magic of weDeploy: REALTIME !!!!

How does it work ?? Realtime is nothing more than a socket that listens certain events in your collection. In our examples we will listen to the change event so that every time our collection changes, we update our list ***automagically***.

```kotlin
realTime = weDeploy.data("https://data-meetup.wedeploy.io")
    .where(Filter.similar("name", "Real"))
    .orderBy("name", SortOrder.ASCENDING)
    .watch("items")
    .on("changes", { args ->
        args.forEach {
            val items = Parser.parseJSONArray(it as JSONArray)
            refreshRecyclerView(recyclerView, items)
        }
    })
```

Because it is a socket it is recommended that we close the socket when we are no longer using it, so do not forget to call the close method in the onDestroy method of your application:

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
              Log.d("teste", "${it.statusCode} ${it.statusMessage} ${it.body}")
          }
      }
      override fun onFailure(e: Exception?) {
          e?.let {
              Log.d("teste", e.message)
          }
      }
  })
```

Okay, our demo is done!!! I hope you have enjoyed it and if you want to see the implementation details abstracted here follows the Webinar link given by me showing step by step the creation of this same demo.



Did you like this post? Don't forget to let us know about your opinions! **You can connect with us on [Twitter](https://twitter.com/wedeploy) or join our community on [Slack](https://chat.wedeploy.com).**

</article>
