---
title: "Getting Started"
description: "Deploying is very easy with WeDeploy. You can start hosting your project, building a database, or even authenticating users within a couple of minutes!"
headerTitle: "Deploy"
layout: "guide"
weight: 1
---

### Deploy

###### {$page.description}

<article id="1">

## Getting Started

There are basically two ways to deploy your project. You can integrate with GitHub for [continuous deployment](/docs/deploy/continuous-deployment/) or use the command line for instant deployment, as seen below:

![instant deployment](/images/blog/post-12--instant-deployment.gif)

##### Download the CLI

In your terminal, run this command:

```
curl https://cdn.wedeploy.com/cli/latest/wedeploy.sh -sL | bash
```

This will install our [command-line interface](/docs/intro/using-the-command-line/) which is a tool that will help you use the WeDeploy platform.

<aside>

The command above will only work for Unix-like systems such as macOS or Linux. If you use Windows, you should download the [Windows amd64 installer](https://bin.equinox.io/c/8WGbGy94JXa/cli-stable-windows-amd64.msi).

</aside>

##### Deploy Instantly

Assuming you already have a project locally, now you just need to run:

```
we deploy
```

This will immediately start uploading your files. Once that's finished, WeDeploy will start building and deploying your application. In the end, you'll be able to see it online in any browser.

<aside>

If you don't have a project ready to deploy, you can download this [simple project](https://github.com/wedeploy/boilerplate-hosting/archive/master.zip) and run the `we deploy` command inside that folder.

</aside>

Notice that this command will create a random name for your project. If you want to specify a new name or choose an existing project, you just need to run:

```
we deploy -p myproject
```

Being able to deploy instantaneously is great, but sometimes you want to trigger a deploy every time a push is made to GitHub. If that's your case, check the **[Continuous Deployment](/docs/deploy/continuous-deployment/)** section.

</article>

<article id="2">

## Automatic Code Detection

When you send a bunch of files to WeDeploy, we detect how you want us to build your source code.

If you are deploying a project using **Node.js**, **Java**, **Ruby**, or a **Dockerfile**, we will scan your project and build it according to your project's unique attributes. For example, if we find a `package.json`, we'll build that as a Node.js service.

In order to make sure we know where you want us to scan, we require that you place a `wedeploy.json` inside the folder of every service you want to deploy and simply declare an ID inside.

```application/json
{
	"id": "myservice"
}
```

<aside>

To learn more about using the `wedeploy.json` to configure your project's behavior, see our [Configuring Deployments Page](/docs/deploy/configuring-deployments/)

</aside>

</article>

<article id="5">

## Try it yourself

We have created a whole array of tutorials to teach you how to start using WeDeploy. Click on one of the links below that interests you and begin your journey towards deployment!

* **<a data-senna-off target="_blank" href="/tutorials/hosting/">Hosting</a>**: Deploy static files like HTML, CSS, and JS.
* **<a data-senna-off target="_blank" href="/tutorials/data-web/">Data</a>**: Deploy a to-do list app using our Data Service and JS.
* **<a data-senna-off target="_blank" href="/tutorials/auth-web/">Auth</a>**: Deploy an authentication app using our Auth Service and JS.
* **<a data-senna-off target="_blank" href="/tutorials/email-web/">Email</a>**: Deploy an email-sending app using our Email Service and JS.
* **<a data-senna-off target="_blank" href="/tutorials/java/">Java</a>**: Deploy an app using Java and Spring Boot.
* **<a data-senna-off target="_blank" href="/tutorials/ruby/">Ruby</a>**: Deploy an app using Ruby and Sinatra.
* **<a data-senna-off target="_blank" href="/tutorials/nodejs/">Node.js</a>**: Deploy an app using Node.js and Express.
* **<a data-senna-off target="_blank" href="/tutorials/liferay-dxp/">Liferay DXP Trial</a>**: Deploy a Liferay DXP instance.
* **<a data-senna-off target="_blank" href="/tutorials/docker/">Docker</a>**: Deploy a Docker container.

</article>

## What's next?

Learn more about how to [configure your deployments](/docs/deploy/configuring-deployments/).
