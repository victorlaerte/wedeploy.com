---
title: "Deploying Docker"
description: "Launch a Docker application in few seconds."
headerTitle: "Deploy"
layout: "guide"
weight: 7
---

### Docker

###### {$page.description}

<article id="1">

## Introduction

[Docker](https://www.docker.com) is the world’s leading software container platform. Developers use Docker to eliminate “works on my machine” problems when collaborating on code with co-workers. Enterprises use Docker to build agile software and ship new features faster.

</article>

<article id="2">

## Try it yourself

Want to see the process of deploying Docker step by step?

<div class="guide-btn-cta">
	<a class="btn btn-accent btn-sm" href="/tutorials/docker/" target="_blank" data-senna-off>
		<span class="icon-16-external"></span>Try the tutorial
	</a>
</div>

<div class="guide-aux-cta">
	or see a <a href="https://github.com/wedeploy/demo-wordpress" target="_blank" data-senna-off>source code demo</a>.
</div>

</article>

<article id="3">

## Configuring

<aside>

All WeDeploy projects use similar configuration files to prepare your projects for deployment. Learn more on our page about <strong><a href="/docs/deploy/getting-started/">Getting Started with Deploying</a></strong>.

</aside>

Below is an example of a `wedeploy.json` for a Docker container. The `id` for your services are uniquely determined by you.

```application/json
{
	"id": "myservice"
}
```

You need to place a `wedeploy.json` wherever you have a `Dockerfile`. If you were deploying a Wordpress site using Docker images for Wordpress and a MySQL database, this is what your project could look like:

```xml
myservice
├── db
│   ├── Dockerfile
│   └── wedeploy.json
└── wp
    ├── Dockerfile
    └── wedeploy.json
```

</article>

<article id="4">

## Ports

**Automatic Detection**

When deploying a docker image, WeDeploy will look inside the `Dockerfile` to see what ports are exposed. If there is only one, then we will use that one, but if there are multiple ports exposed, we will use the lowest value port.

For example, if you had a `Dockerfile` like this:

```
FROM ubuntu
EXPOSE 3000
EXPOSE 4000
```

We would automatically expose port `3000` for your service so that it can be accessed publicly via your service URL (_service-project.wedeploy.io_).

**Manual Configuration**

What if you what to choose a specific port to expose on your service? You can do this by setting a value on the `port` value in your `wedeploy.json`.

```application/json
{
  "id": "myubuntu",
  "port": 4000
}
```

You can also **block all external access** to your container by setting a port in your `wedeploy.json` that is not exposed in your `Dockerfile`.

```application/json
{
  "id": "myubuntu",
  "port": 0
}
```

</article>

<article id="5">

## Docker Hub

Calling a public image from Docker Hub can be done with a single line of code in your `wedeploy.json` file. Use the `image` parameter to tell WeDeploy what Docker Hub image to pull. Your `wedeploy.json` could look like this to deploy a MySQL database:

```application/json
{
  "id": "mydb",
  "image": "mysql",
  "volume": "/var/lib/mysql",
  "env": {
    "MYSQL_ROOT_PASSWORD": "pass"
  }
}
```

</article>

## What's next?

Now you can start building your docker based application.
