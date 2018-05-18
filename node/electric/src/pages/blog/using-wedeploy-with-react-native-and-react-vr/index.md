---
title: "Using WeDeploy With React Native and React VR"
description: "Throughout the development of WeDeploy, it has been our goal to support as many platforms and environments as possible."
date: "April 25, 2017"
author: "Iliyan Peychev"
image: "images/blog/post-9--0.png"
layout: "blog"
---

<article>

{$page.description}

As a fundamental player in today's development around the world, JavaScript is a key member of that WeDeploy family, but until recently, our API Client only supported Web and Node.js applications. That's why we are excited to announce that **[React Native](https://facebook.github.io/react-native/) and [React VR](https://facebook.github.io/react-vr/) are joining the list too**!

<figure>
	<a href="https://github.com/wedeploy-examples/data-react-native-example" target="_blank">
		<img src="/images/blog/post-9--0.png" alt="React Native">
	</a>
</figure>

If you are not aware of [React Native](https://facebook.github.io/react-native/), this is it in a nutshell - it allows you to build mobile applications using only JavaScript. Interestingly, you don't build a "hybrid app"; rather, you use the same UI building blocks as a regular iOS and Android application, and leverage the full power of the mobile platforms to create a real, first class mobile application.

Also, [React VR](https://facebook.github.io/react-vr) allows you to step into the the Virtual Reality and build VR websites and interactive 360 experiences with React.

#### Using WeDeploy in React Native and React VR

There is no difference between the usage of the JavaScript API for Web and React Native or React VR. The same API calls for [Data](/docs/data/saving-data/), [Auth](/docs/auth/manage-users/), and [Email](/docs/email/sending-email/) are available when your app is running in React Native or React VR environment too. There are no API nuances - the same code you would write for a Web application, will run successfully on React Native and React VR too.

Here is [an snippet taken from this example](https://github.com/wedeploy-examples/data-react-native-example/blob/master/TodoApp/pages/list-items.js#L24-L36):

```text/javascript
WeDeploy
  .data('<data-url-here>')
  .orderBy('id', 'desc')
  .limit(5)
  .get('tasks')
  .then((tasks) => {
    this.setState({
      items: tasks
    });
  })
  .catch((error) => {
    console.error(error);
  });
```

The above code establishes a connection with the Data Service and retrieves the first five To-do tasks, then sets them to the `state` of the component to be rendered on the screen.

#### Building an application

To help you start building applications, we created an example To-Do List application. You may check the code [here](https://github.com/wedeploy-examples/data-react-native-example). The application is short but powerful enough to showcase a few fundamental things:

1. Instantiating WeDeploy
2. Working with the data service
3. Working with Real-time events
4. Sharing application code between iOS and Android.

Here is what the To-Do List application looks like:

<figure>
  <video controls style="max-width: 300px;">
    <source src="/images/blog/post-9--1.webm" type="video/webm">
    <source src="/images/blog/post-9--1.mp4" type="video/mp4">
    Your browser doesn't support HTML5 video in WebM with VP8/VP9 or MP4 with H.264.
  </video>
</figure>

We are excited to see what you start building with WeDeploy using React Native and React VR!

</article>
