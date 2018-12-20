---
title: "Introducing WeDeploy Environments"
description: "From dev to staging to production, now you can easily organize, duplicate and manage multiple application stages with WeDeploy Environments."
date: "July 9, 2018"
author: "Jonni Lundy"
image: "/images/blog/post-30--0.jpg"
layout: "blog"
---

<article>

Today, we are releasing a new feature that we believe will enable both solo developers and large teams alike in their pursuit of shipping incredible apps, faster.

{$page.description}

<figure>
  <img src="/images/blog/post-30--0.jpg" alt="new environment">
  <figcaption>WeDeploy Environments</figcaption>
</figure>

#### Why Environments?

Having multiple environments for your project is a powerful way to organize your releases and share different versions with the people you need to.
Here are some of our favorite environments to use:

* **dev**: for exploring breaking changes
* **qa**: for your quality assurance team to run tests
* **uat**: for getting feedback from others people about the upcoming release

Having these stages in your development process grouped together in your WeDeploy project will make it even easier to quickly and confidently push new changes to your users.

#### How Do Environments Work?

Each project begins with its default, or production, environment. Projects with just one environment will look and behave like a regular project.

<figure>
  <img class="blog-img-shadow" src="/images/blog/post-30--1.png" alt="single environment">
</figure>

From there, you can create a new environment by duplicating that original environment. All environments will bear the ID of the original project and then append the new environment name (e.g. `wordpress-dev`).

<figure>
  <img class="blog-img-shadow" src="/images/blog/post-30--2.png" alt="creating environment">
  <figcaption>Easily duplicate environments and customize environment variables</figcaption>
</figure>

Each Environment behaves like a separate project so you can add unique team members, custom domains, environment variables, and even services to each one.

This means each environment can have its own characteristics like datasets or user access.

<figure>
  <img class="blog-img-shadow" src="/images/blog/post-30--3.png" alt="creating environment">
  <figcaption>Add unique contributors to each environment</figcaption>
</figure>

#### How Do I Deploy to My Environment?

Deploying is easy! You can either use the project flag (`-p`) to pass the project and environment ID's together, or you can use the new environment flag (`-e`) to pass them separately.

```
we deploy -p wordpress-dev
we deploy -p wordpress -e dev
```

<aside>

There is currently no way to create new environments from the CLI. To do this, you must go use the Console.

</aside>

So what are you waiting for? [Login to your account](https://console.wedeploy.com/) and create a new environment for any of your projects!

---

We are very excited for you to try this new feature and to see how you use it to deploy amazing applications!
If you need any help getting started or want to give us feedback, please **[join our WeDeploy Community](https://chat.wedeploy.com)** or **[follow us on Twitter](https://twitter.com/wedeploy)**.

</article>