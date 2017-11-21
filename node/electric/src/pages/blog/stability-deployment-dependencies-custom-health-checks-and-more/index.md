---
title: "Stability, Deployment Dependencies, Custom Health Checks, and more!"
description: "It has been a busy few weeks for the WeDeploy team and we are excited to share some of the new features and fixes we've been working on!"
date: "November 15, 2017"
author: "Jonni Lundy"
layout: "blog"
---

<article>

{$page.description}

#### Improved Deployment Stability

This last month we received some feedback about unexpected deployment failures and mysterious service downtimes. These outages were unacceptable so we set out to eradicate the issue.

We found the root causes of the problem and refactored part of our infrastructure to not only improve stability, but also to give you faster deployments and more resilient applications.

If you were one of the users affected by these issues in the past few weeks, please give it another try and let us know if you have any further issues. We think you'll notice a big difference!

#### Dependency Between Deployments

For many applications, certain services are dependent on the success of other services before they can be deployed gracefully. This is especially true for apps that utilize databases like MySQL or MariaDB.

Now you can do that with WeDeploy! Simply declare the dependencies in your `wedeploy.json` files so that your services are deployed in the sequence that's best for your application.

```application/json
{
  "id": "ui",
  "dependencies": ["db", "auth"]
}
```

​**[Learn more about Dependencies!​](/docs/deploy/configuring-deployments/#dependencies)**

#### Custom Health Checks

Have you ever accessed your service URL right after a new deployment but got an error because the service was still completing some build tasks? That is because our default health check only looked to see if your service is running, rather than verifying if it was finished.

We realized that some services needed more unique health checks, so we have released a new, simple way for you to create custom health checks for each service. You can either add a specific URL to ping until a `200` response is received, or you can create a unique command to run as a test for your service.

```application/json
{
  "id": "ui",
  "healthCheck": {
    "url": "localhost/blog/"
  }
}
```

**[Learn more about Health Checks!​](/docs/deploy/configuring-deployments/#healthCheck)**

#### Optional Zero Downtime

Even though we all want zero downtime for our applications, some services, like databases, work better with a short downtime during deployment. Because of this, we have created an option for you to turn this feature off if it's in the best interest of your service.

```application/json
{
  "id": "ui",
  "zeroDowntime": false
}
```

**[Learn more about Zero Downtime!](/docs/deploy/configuring-deployments/#zeroDowntime)**

</article>
