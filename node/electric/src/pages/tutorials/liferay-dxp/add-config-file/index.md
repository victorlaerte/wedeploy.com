---
title: "Add Config File"
description: "In this section, you'll learn how to deploy an application using Liferay DXP."
buttonTitle: "I added the config files"
tutorialTitle: "Getting started with Liferay DXP"
parentId: "liferay-dxp"
layout: "tutorial"
time: 40
weight: 3
---

#### Add Config File

Every service folder must have a `wedeploy.json` file that configures it, so let's add one file inside the sample project you just downloaded.

1. Open the `liferay-dxp-tutorial` folder in a code editor
2. Create a new file named `wedeploy.json`.
3. In that file, paste this code:

```application/json
{
	"id": "app",
	"image": "wedeploy/liferay:@site.version.image.liferay@",
	"volumes": {
		"data": "/opt/liferay/data"
	},
	"memory": 4096,
	"cpu": 3
}
```

<aside>

###### <span class="icon-16-star"></span> Pro Tip

One of the awesome things you can do in your `wedeploy.json` file is add environment variables. There are many ways to use these; one example is to provide credentials for a external database. In Liferay DXP SP 5 you will be able to configure any portal property in an environment variable, following the name convention defined [here](https://issues.liferay.com/browse/LPS-72541).

```application/json
{
  "id": "app",
  "env": {
    "LIFERAY_JDBC_PERIOD_DEFAULT_PERIOD_DRIVER_UPPERCASEC_LASS_UPPERCASEN_AME": "com.mysql.jdbc.Driver",
    "LIFERAY_JDBC_PERIOD_DEFAULT_PERIOD_URL": "jdbc:mysql://database/lportal?characterEncoding=UTF-8&dontTrackOpenResources=true&holdResultsOpenOverStatementClose=true&useFastDateParsing=false&useUnicode=true",
    "LIFERAY_JDBC_PERIOD_DEFAULT_PERIOD_PASSWORD": "passwor0d",
    "LIFERAY_JDBC_PERIOD_DEFAULT_PERIOD_USERNAME": "liferay"
  }
}
```

Please use this web application to encode/decode your environment variables for [Liferay DXP](https://liferay-envvars.wedeploy.io).


</aside>
