---
title: "Custom Domains"
description: "Often times in production apps, you will want to point your service URL's to a custom domain so it's easier for users to find your site and more consistant with your message and branding."
headerTitle: "Intro"
layout: "guide"
weight: 6
---

### {$page.title}

###### {$page.description}

<article id="1">

## Introduction

To make your app live right away, WeDeploy makes every service accessible via its service domain, but when your app moves towards production, you will most likely want to add a custom domain to beautify your websites URL. Configuring custom domains can be a tricky and complicated process, which is why we wanted to make it simple and straightforward for you.

</article>

<article id="2">

## Simple Setup

The easiest way to configure your custom domain, is to add two or more of our WeDeploy name servers. Once you point to our name servers from your domain provider and wait for confirmation, you can simply add the custom domain to your service and we will do all the configuration work for you.

1. Go to your domain provider and find where you can set a custom name server.
2. Enter two to four of the regional WeDeploy name servers from the list below.
3. Wait for confirmation from your provider regarding the changed name servers. (You can also check on your CLI using `dig NS yourdomain`). The change usually takes about one hour, but it might be longer.
4. Go to the service of your project, click on _"Custom Domains"_, and add the new domain.

<aside>

**Note:** When changing name servers, it can take a few hours to complete and you will be unable to complete the custom domain configuration on WeDeploy until this setup is complete. If you receive an error when trying to add a custom domain after recently updating the name servers, please try again later.

</aside>

**On the Console**

![Custom Domains](/images/docs/intro/custom-domains--settings.png)

**In Your wedeploy.json**

```application/json
{
  "id": "myServiceId",
  "customDomains": ["myproject.com", "www.myproject.com"]
}
```

<div class="table-container">

| Country           | Name Server                     |
| ----------------- | ------------------------------- |
| Australia         | **sydney**.wedeploy.domains     |
| Germany           | **frankfurt**.wedeploy.domains  |
| France            | **paris**.wedeploy.domains      |
| Netherlands       | **amsterdam**.wedeploy.domains  |
| Singapore         | **singapore**.wedeploy.domains  |
| United Kingdom    | **london**.wedeploy.domains     |
| United States     | **california**.wedeploy.domains |
| United States     | **iowa**.wedeploy.domains       |
| United States     | **newyork**.wedeploy.domains    |

</div>

</article>

<article id="3">

## Adding Subdomains

You may also want to add a subdomain like _www.myapp.com_ on your own domain provider. This can by done by configuring a CNAME.

<div class="table-container">

| Record            | Subdomain            | Project Target Domain    |
| ----------------- | -------------------- | ------------------------ |
| CNAME             | www.mydomain.com     | ui-myapp.wedeploy.io.    |
| CNAME             | api.mydomain.com     | db-myapp.wedeploy.io.    |

</div>

</article>

<article id="4">

## Advanced Configuration

What if you want to configure the DNS yourself? No problem, that is a simple process as well. Instead of using a name server to route your project, you can simply add an root(apex) domain as an CNAME.

<div class="table-container">

| NAME              | TYPE        | DATA                    |
| ----------------- | ----------- | ----------------------- |
| empty             | CNAME       | ui-myapp.wedeploy.io.   |

</div>

<aside>

###### <span class="icon-16-alert"></span> Attention

This method is only available for domain providers that allow CNAME configuration for root domains. Some providers call this "CNAME Flattering", others call this record "ALIAS".

</aside>

</article>

<article id="5">

## Custom WeDeploy domains

Every time you install a service, we create a unique URL for that service (service-project.wedeploy.io), but what if you want to add a cleaner URL for that service? This is easy to accomplish by simply adding a `*.wedeploy.io` domain as a custom domain on your service.

The most common use of this functionality would be to add a "home service" for your project. This is often when you have a primary UI service that you want to make more friendly by simplifying its URL to just `project.wedeploy.io`.

![WeDeploy Custom Domains](/images/docs/intro/custom-domains--wedeploy-domains.png)

## Checking the domain for errors

If you have configured the domain following one of the approaches above but WeDeploy still rejects it, please check it for errors. There might be several reasons for the failure. For example, if the domain cannot pass [DNSSEC](http://www.dnssec.net/) validation, it will be rejected. To check it, you may use some of the publicly available tools, like [Google Public DNS](https://dns.google.com/), [dnssec-debugger](http://dnssec-debugger.verisignlabs.com/) or [DNSViz](http://dnsviz.net/).

If you have configured the name servers of the domain to be some of WeDeploy's name servers, please check if they were properly updated before to enter the domain to WeDeploy. You may use `dig NS yourdomain` or `dig +trace NS yourdomain`.

</article>

## What's next?

* Learn more about using [environment variables](/docs/intro/environments/).
