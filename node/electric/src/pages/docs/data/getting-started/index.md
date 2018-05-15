---
title: "Getting Started"
description: "Leverage a NoSQL database with the power of WeDeploy Data."
headerTitle: "Data"
layout: "guide"
weight: 1
---

### Data

###### {$page.description}

<article id="1">

## Introduction

Our Data service enables you to store data securely to a cloud database, make complex queries instantly, and consume information in real-time.

</article>

<article id="2">

## Try it yourself

Want to see the process of deploying WeDeploy Data step by step?

<div class="guide-btn-cta">
  <a class="btn btn-accent btn-lg" href="/tutorials/data-web/" target="_blank">
    <span class="icon-16-external"></span>Try the tutorial
  </a>
</div>

<div class="guide-aux-cta">
	or see a <a href="https://github.com/wedeploy-examples/data-web-example" target="_blank">source code example</a>.
</div>

Check also the <a href="/tutorials/data-android/" target="_blank">tutorial for Android</a> and the <a href="/tutorials/data-ios/" target="_blank">tutorial for iOS</a>.

</article>

<article id="3">

## Configuring

<aside>

All WeDeploy projects use similar configuration files to prepare your projects for deployment. Learn more on our page about <strong><a href="/docs/deploy/getting-started/">Getting Started with Deploying</a></strong>.

</aside>

Below is an example of a `wedeploy.json` for a Data container.

```application/json
{
  "id": "database",
  "image": "wedeploy/data:@site.version.image.data@"
}
```

The `id` for your services are uniquely determined by you.

</article>

<article id="4">

## Data Path Construction

For your Data service, we build paths to all your collections and documents. This gives you the option to perform actions on these specific items like DELETE or GET.

This is the anatomy of a WeDeploy data document path.

```text
/collectionName/documentId/documentProperty/documentInnerProperty
```

For example, if we had a collection of movies and wanted to reference the rating of Star Wars Episode IV:

```text
https://<serviceID>-<projectID>.wedeploy.io/movies/episode_iv/rating
```

</article>

<article id="5">

## Updates

Check for new releases to our Data Service on our [Updates page](/updates/services/data).

</article>

## What's next?

Now you can learn more about [configuring your data service](/docs/data/configuring-data/).
