---
title: "Configuring Deployments"
description: "Configure WeDeploy to work with whatever application you are deploying."
headerTitle: "Deploy"
layout: "guide"
weight: 2
---

### {$page.title}

###### {$page.description}

<article id="1">

## wedeploy.json

All WeDeploy services use a `wedeploy.json` file to defines the service's attributes and configurations.

Once you push your local project to WeDeploy, we scan it for `wedeploy.json` files. When we find one, we serve that whole directory as a part of the service you defined within.

For example, let's say you have a project named `app` that uses our Data service with a Node.js application. This is what your project's file structure could look like:

```
app
├── nodejs
│   ├── index.js
│   ├── package.json
│   └── wedeploy.json
└── db
    ├── api.json
    └── wedeploy.json
```

For simple services, all you need to include in your `wedeploy.json` is an `id`, but you can add any of the keys below to your configuration file.

**Using .gitignore**

WeDeploy does not deploy anything that is declared in your `.gitignore` file as long this config file is in the same folder as your `wedeploy.json`.

</article>

<article id="2">

## Reference

To learn more about an individual configuration, click on a key in the table below.

<div class="table-container">

| Field                               | Type    | Default | Description                         |
| ----------------------------------- | ------- | ------- | ----------------------------------- |
| **[id](#id)**                       | String  | random  | Unique service ID                   |
| **[image](#image)**                 | String  |         | Service image type                  |
| **[env](#env)**                     | Object  |         | Exported variables                  |
| **[port](#port)**                   | Number  |         | Exposed service port                |
| **[cpu](#scale)**                   | Number  | 1       | Number of processing units          |
| **[scale](#scale)**                 | Number  | 1       | Maximum number of instances         |
| **[memory](#scale)**                | Number  | 512     | Amount of computing memory in MB    |
| **[volumes](#volumes)**             | Object  |         | Persistent database file system     |
| **[command](#command)**             | Array   |         | Command to be performed when the container starts |
| **[customDomains](#customDomains)** | Array   |         | Set custom domain names             |
| **[healthCheck](#healthCheck)**     | Object  |localhost| How the services' health is checked |
| **[dependencies](#dependencies)**   | Array   |         | Deployment dependency order         |
| **[zeroDowntime](#zeroDowntime)**   | Boolean | true    | Interruption during deployment      |
| **[public](#public)**               | Boolean | true    | Controls public access              |

</div>

**Usage:**

Here are all the configuration keys in action within a `wedeploy.json`.

```application/json
{
  "id": "myservice",
  "image": "wedeploy/example",
  "env": {
    "DB_USER": "root",
    "DB_PASSWORD": "pass123",
  },
  "port": 8080,
  "cpu": 2,
  "scale": 2,
  "memory": 2048,
  "volumes": {
    "storage": "/opt/storage"
  },
  "customDomains": ["myservice.com", "www.myservice.com"],
  "healthCheck": {
    "url": "localhost"
  },
  "dependencies": ["db", "dbadmin"],
  "zeroDowntime": false
}
```

<h4 id="id">id</h4>

When you declare an `id` we will always deploy that service with this ID. If a service with a matching ID exist in your project, it will be overridden by a new deployment.

```application/json
{
  "id": "app"
}
```

<h4 id="image">image</h4>

Every service is a separate Docker container. By declaring an image and version, you are choosing which container you want to deploy for that service.

**WeDeploy Images**

WeDeploy offers a collection of service images you can choose from.

- [WeDeploy Auth](/docs/auth/)
- [WeDeploy Data](/docs/data/)
- [WeDeploy Email](/docs/email/)
- [WeDeploy Hosting](/docs/hosting/)

To deploy one of the official WeDeploy images, you can declare `wedeploy/` and then the image and version you want.

```application/json
{
  "id": "db",
  "image": "wedeploy/data:@site.version.image.data@"
}
```

**Docker Hub Images**

You can also use this image key to call any image from Docker Hub.

```application/json
{
  "id": "db",
  "image": "mysql"
}
```

**Custom Images**

If you want to deploy a custom image that is not published on Docker Hub, you can simply create a `Dockerfile` next to your `wedeploy.json` and not declare any `image` key.

<h4 id="env">env</h4>

Environment variables are a set of dynamic placeholders that can affect the way a certain service will behave. For example, if you are deploying a database and need to pass a password and user.

```application/json
{
  "id": "db",
  "image": "mysql",
  "env": {
    "MYSQL_ROOT_PASSWORD": "pass",
    "MYSQL_ROOT_USER": "example"
  }
}
```

<h4 id="port">port</h4>

**Automatic Detection**

By default, we find any ports exposed in your Docker Hub image or custom `Dockerfile` and choose the lowest value port. In the example below, we would expose port `3000`.

```
FROM ubuntu
EXPOSE 3000
EXPOSE 4000
```

**Note:** If you are using automatic code detection deployments and need to know what port is exposed, check the documentation: [Java](/docs/deploy/deploying-java/#3), [Node.JS](/docs/deploy/deploying-nodejs/#3), [Ruby](/docs/deploy/deploying-ruby/#3).

**Manual Configuration**

Manually choose what port to expose by using the `port` key in your `wedeploy.json`.

```application/json
{
  "id": "os",
  "port": 4000
}
```

**Blocking Port**

If you want to completely block outside access to a service, you can expose any port that is not declared by your service.

```application/json
{
  "id": "os",
  "port": 0
}
```
<aside>

Remember that even if you block a service's port, your service can still be securely accessed via hostname by the other services in your project.

</aside>

<h4 id="scale">cpu, memory, and scale</h4>

There are three ways to scale your application.

**CPU** is the number of processors designated to your service (can be less than one).

**Memory** is the amount of RAM designated to your service (in megabytes).

**Scale** is the number of instances designated to your service.

```application/json
{
  "id": "api",
  "cpu": 0.4,
  "memory": 512,
  "scale": 2
}
```

The available resources for these variables are dependent upon the usage limits of your WeDeploy plan. To learn more about upgrading your plan, see our [Pricing Page](https://wedeploy.com/#pricing).

<h4 id="volumes">volumes</h4>

For many applications, it is necessary to be able to write and access a persistent file system so that your important files can keep their state even after re-deployment or restarting your service. We make this possible with `volumes`.

```application/json
{
  "id": "app",
  "volumes": {
    "foo": "/docs/",
    "bar": "/db/files"
  }
}
```

Volumes ids must contain only alphanumeric characters. The valid regex is `/^[a-z0-9]+$/i`.

Each volume (or file system drive), is mounted with a unique `id` that can be accessed by any service in that project. For example, if you create service1 and deploy with a volume declared as `photos`, you can access that same volume with service2 by declaring the same volume `id`.

In this scenario, this is how the services would connect to the volumes via their `wedeploy.json`:

**service1**

```application/json
{
  "id": "service1",
  "volumes": {
    "photos": "/photos"
  }
}
```

**service2**

```application/json
{
  "id": "service2",
  "volumes": {
    "photos": "/myapp/photos"
  }
}
```

In this example, the `photos` volume will be shared and both services can access the files within that volume by the declared paths. We only accept absolute paths and not relative ones.

**Note:** Once you delete your project, any files in the volumes will also be destroyed.

<h4 id="customDomains">customDomains</h4>

Each service is deployed with a unique URL (service-project.wedeploy.io), but as your application moves towards production, you will most likely want to add custom domains. This is how you can do that with your `wedeploy.json`.

```application/json
{
  "id": "ui",
  "customDomains": ["myapp.com", "www.myapp.com"]
}
```

If you want to know more about custom domains, check our [Custom Domain Documentation](/docs/intro/custom-domains/).

<h4 id="healthCheck">healthCheck</h4>

Health checks are the way we test the status of your service. We also use them know if a new deployment of your service was successful.

The default health check simply looks to see if the service (or more specifically your container) is running, but certain types of services need unique status checks. To do this, you can add a custom health check as a `url` or a `command`.

If you provide a `url`, we will ping that address until we get a `200` response. For the command, you have more control over what kind of action we take when checking your service health.

Here is an example of the `url` approach:

```application/json
{
  "id": "ui",
  "healthCheck": {
    "url": "localhost"
  }
}
```

By putting `localhost` as the health check URL, we will ping the IP of your service. You could also specify a specific path like `localhost/blog/` or a certain port like `localhost:4000`.

For more complex health checks, you can add commands to check the uptime of your service.

```application/json
{
  "id": "db",
  "healthCheck": {
    "command": "curl -X GET --silent --fail 'localhost/blog/'"
  }
}
```

With both of these approaches, we provide you with other customizable configurations.

- `interval`: How many seconds should pass between health check tries. The default value for it is `30`.
- `timeout`: How long we will wait for your service to answer. The default value for it is `30`.
- `startPeriod`: How many seconds the healthCheck should wait after the service is up before testing. The default value for it is `0`.
- `retries`: How many times the healthCheck will retry before declaring your service as `unhealthy`. The default value for it is `3`.

<h4 id="dependencies">dependencies</h4>

For many complex applications, it is important to deploy your services in a specific order. For example, you may want your database to deploy before your frontend UI. You may also want to automatically cancel the deployment of your UI if the database doesn't fully deploy. For this, you can declare service dependencies in your `wedeploy.json`.

```application/json
{
  "id": "ui",
  "dependencies": ["db", "dbadmin"]
}
```

In the example above, the `ui` service will wait to deploy until the `db` and `dbadmin` services have successfully deployed.

<h4 id="zeroDowntime">zeroDowntime</h4>

By default, all services utilize our zero downtime deployment. This means that your service will always be up, even if you redeploy it. When this property is true, any deployment is made in a background instance which replaces the current one when it is up. The background instance is up if it passes its [healthCheck](#healthCheck).

However, some services, like databases, are not designed for this kind of deployment. In these cases, you can simply turn off the zero downtime deployment of your service.

```application/json
{
  "id": "db",
  "zeroDowntime": false
}
```

<h4 id="command">command</h4>

There are some applications that require a command to be started. This property allows you to perform any command you want when the container starts.

```application/json
{
  "id": "app",
  "command": ["npm", "run", "dev"]
}
```

<aside>

###### <span class="icon-16-alert"></span> Attention

Note that the property `command` from `wedeploy.json` is different from the `command` used to `healthCheck`.

</aside>

<h4 id="public">public</h4>

Sometimes you may not want your service to be accessible from outside of your project. By adding `"public": false` to your `wedeploy.json`, your service will be removed from our load balancer. This will make the service inaccessible from public access but still accessible by other project services through the project's private network.

```application/json
{
  "id": "app",
  "public": false
}
```

As previously described, once the `public` field is configured to `false`, the service is only reachable inside the project network. This means that the only way to make requests to a service like this is using it's `id` as its address. For example, you can make a GET for a service by executing the following.

```
curl -X GET serviceId
```

The request via API would look like the code bellow.

```javascript
WeDeploy.url(http://${serviceId}).get()
```

</article>
