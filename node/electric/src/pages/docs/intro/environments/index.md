---
title: "Environments"
description: "From dev to staging to production, you can easily organize, duplicate and manage multiple application stages with WeDeploy Environments."
headerTitle: "Intro"
layout: "guide"
weight: 7
---

### {$page.title}

###### {$page.description}

<article id="1">

## Introduction

Having multiple environments for your project is a powerful way to organize your releases and share those versions with the people you need to.

Here are some of our favorite environments to use:

* **dev**: for exploring breaking changes
* **qa**: for your quality assurance team to run tests
* **uat**: for getting feedback from others about the upcoming release

Having these stages in your development process seamlessly grouped together in your app's WeDeploy project will make it easy to quickly and confidently push new changes to your users.

</article>

<article id="2">

## Creating a New Environment

Each project begins with its default, or production, environment. Projects with just one environment will look and behave like a regular project.

<figure>
  <img class="blog-img-shadow" src="/images/blog/post-30--1.png" alt="single environment">
</figure>

From there, you can create a new environment and choose to copy from an existing environment or create a clean one. All environments will bear the ID of the original project and then append the new environment name (e.g. `project-env`).

<figure>
  <img class="blog-img-shadow" src="/images/blog/post-30--2.png" alt="creating environment">
</figure>

Each Environment behaves like a separate project so you can add unique team member, custom domains, environment variables, and even services to each one.

This means each environment can have its own characteristics like datasets or user access.

<figure>
  <img class="blog-img-shadow" src="/images/blog/post-30--3.png" alt="creating environment">
</figure>

</article>

<article id="3">

## Environment Variables

Environment variables are a set of dynamic placeholders that can affect the way a certain service will behave inside of an environment. They are dynamic because they can change according to your needs.

A good example would be credentials for a database, where each environment has its own values. The ideal solution for handling this scenario, would be using environment variables, in order to set up different configurations for different environments using the same code.

WeDeploy can help you configure environment variables in two ways, you can either use the Console or use the `wedeploy.json` file.

<aside>

Some WeDeploy services have pre-defined environment variables, you can learn more about it by visiting them individually:

* [**Auth Environment Variables**](/docs/auth/environment-variables/)
* [**Data Environment Variables**](/docs/data/environment-variables/)
* [**Email Environment Variables**](/docs/email/environment-variables/)
* [**Hosting Environment Variables**](/docs/hosting/environment-variables/)

</aside>

##### Using the Console

1) Go to the specific service page.
2) Click on *"Environment"*.
3) Add your keys and values.
4) Click on *"Update Environment"*.

<figure>
  <img class="blog-img-shadow" src="/images/docs/intro/environment-variables.png" alt="Using the Console">
</figure>

This will restart your service with the new environment variables.

<aside>

###### <span class="icon-16-alert"></span> Attention

If you create or update a variable on the Console, this will not automatically reflect in `wedeploy.json`. Make sure you also update your local file before deploying again or your local variables will override the changes made on the Console.

</aside>

##### Using the wedeploy.json

You can also define environment variables directly on your code repository by using the `wedeploy.json` files like this:

```application/json
{
  "id": "myservice",
  "env": {
    "DATABASE_USER": "root",
    "DATABASE_PASSWORD": "test"
  }
}
```

<aside>

###### <span class="icon-16-alert"></span> Attention

All environment variables specified in your `wedeploy.json` will be created or overridden on the Console upon each new deployment.

</aside>

</article>

<article id="4">

## Deleting Environments

Deleting environments is just as serious as deleting projects, because it will remove all data, access, and WeDeploy domains associated to your environment.

To delete a specific environment, you can go to the _Settings_ page of that environment and click on the Delete button.

To delete all environments in a project, you need to go to the original environment of the project (the one without a `-<env>` in the ID) and delete it from the _Settings_ page. This will delete all data, access, and WeDeploy domains associated with that project and all of its environments.

</article>