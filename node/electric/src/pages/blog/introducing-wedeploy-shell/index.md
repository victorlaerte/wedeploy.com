---
title: "Introducing WeDeploy Shell"
description: "We are happy to announce a big improvement to our Console - now all the services you deploy have shell support out of the box. This is an exciting move forward and we can't wait to see what kind of opportunities this opens for our users to keep building amazing apps."
date: "March 25, 2018"
author: "Ivan Santos"
image: "images/blog/post-25--0.gif"
layout: "blog"
---

<article>

{$page.description}

<figure>
  <img class="blog-img-shadow" src="/images/blog/post-25--0.gif" alt="shell demo" />
</figure>

Command-line tools are fundamental for developer experience and productivity because they deliver speed, control, traceability, scripting and automation capabilities to the developer’s workflow.

In many cases, it's challenging to get full visibility and control of your service. Shell access makes it easy to see whats going on inside your application, look for side effects that would not be easily spotted in the logs or even call functions like data population or report generation that are just meant to be performed once.

Now **WeDeploy Shell** provides you with secure, command-line access to your service directly from your browser so you can easily manage your service and perform commands just like you were logged into your server.

#### Getting Started

Imagine that you deploy a feature and need to import a CSV to populate a database or maybe you have a rails application and need to populate your data by typing: `rake db:seed`. Now you can seamlessly perform these types of tasks in your app.

<figure>
  <img class="blog-img-shadow" src="/images/blog/post-25--1.png" alt="shell preview" />
</figure>

Here are a few easy ways to start using it today. Try entering a Linux-based container (like any of our WeDeploy services) and explore these commands:

1. `cd` or `cat` and the tab key to explore your files and feel the ease of autocomplete
2. `ls` to see a color-coded list of all the files and folders in the current directory
3. `uname -a` to see what version of Linux you're running
4. `top` to see an interactive list of all running processes

#### Shell Features

**Autocomplete**

Maybe you are switching between directories or looking inside a file, use the same autocomplete capabilities that you love from your local terminal.

This may seem like a minor feature, but it's a powerful tool to help you stay productive while maneuvering through your container source code.

**Extendability**

Anything that is installed in your container, you can use in the shell. This means if your container comes with any sort of package manager like `pkg` or any other technologies like `cURL` or `Node`, you can use them just like you would in your local environment.

It is important to remember that our shell only gives you access to whatever operation system and software installed from your container. This means, we don't install any packages or technologies into your service that are not native to your container, and therefore some commands that will work in one service may not work in another.

**Out of the Box**

You may be wondering: "how do I enable this feature on my service?" No need to worry because all the services you deploy will come with shell support out of the box. Just simply go to your service on the Console and select the _Shell_ tab next to _Logs_.

#### Disclaimer

**Any changes you make to your service via the Shell are dynamic and will be overridden when you deploy or restart your service.**

The only persistent portion of your services is within the volumes. If you want to make permanent changes, you can install, save, or update any files inside of a [service volume](/docs/deploy/configuring-deployments/#volumes).

---

The possibilities are endless and we can't wait to see what you do with this new feature! If you need any help getting started or want to give us feedback, please **[join our WeDeploy Community](https://chat.wedeploy.com)**.

</article>
