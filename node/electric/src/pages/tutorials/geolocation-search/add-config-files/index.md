---
title: "Add Config Files"
description: "In this section, you'll learn how search for locations based on their coordinates using the WeDeploy API Client."
buttonTitle: "I added the config files"
tutorialTitle: "Getting started with WeDeploy geolocation search"
parentId: "geolocation-search"
layout: "tutorial"
time: 60
weight: 3
---

#### {$page.title}

Every service folder must have a `wedeploy.json` file that configures it, so let's add two files inside the sample project you just downloaded.

##### Data

1. Open the `tutorial-geolocation-search` folder in a code editor.
2. Create a new file named `wedeploy.json` inside the `db` folder.
3. In that file, paste this code:

```application/json
{
	"id": "db",
	"image": "wedeploy/data:@site.version.image.data@"
}
```

##### Hosting

1. Change to the `ui` folder and create another `wedeploy.json` file
3. In that file, paste this code:

```application/json
{
	"id": "ui",
	"image": "wedeploy/hosting:@site.version.image.hosting@"
}
```

<aside>

###### <span class="icon-16-star"></span> Pro Tip

One of the awesome things you can do in your `wedeploy.json` file is add environment variables. There are many ways to use these; one example is to provide a custom health check for your service.

```application/json
{
	"id": "ui",
	"image": "wedeploy/hosting:@site.version.image.hosting@",
	"healthCheck": {
		"url": "localhost"
	}
}
```

See the full list of ways you can <a href="/docs/deploy/configuring-deployments/" target="_blank">configure your deployments</a>.

</aside>
