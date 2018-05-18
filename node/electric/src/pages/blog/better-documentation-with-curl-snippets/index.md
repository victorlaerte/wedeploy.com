---
title: "Better Documentation With cURL Snippets"
description: "We're always looking for ways to be more accessible to any developer using any kind of programming language. Today we're taking another step in that direction by adding cURL snippets to our documentation."
date: "March 13, 2018"
author: "Zeno Rocha"
image: "images/blog/post-22--0.png"
layout: "blog"
---

<article>

<figure style="margin-top: -1.5rem">
  <img src="/images/blog/post-22--1.gif" alt="Better documentation with cURL snippets">
</figure>

{$page.description}

#### What is cURL?

cURL is a command-line tool for making HTTP requests. It's available for most platforms including Linux, Windows and macOS.

You can check if cURL is available by running:

```text/x-sh
curl -I "https://wedeploy.com"
```

Or you can just [download](https://curl.haxx.se/download.html) and install it onto your system.

#### What does this change mean?

As you may know, we currently have three official SDKs for [JavaScript](/docs/intro/api-clients/#2), [Swift (iOS)](/docs/intro/api-clients/#3), and [Java (Android)](/docs/intro/api-clients/#4). These libraries are great and will help you work with our services much more easily.

But what happens if you use other languages like PHP, Python, Ruby, Go, or C++? Now you can simply navigate to our documentation and view the code snippets under the cURL tab to see how to make the requests.

#### Where can I see examples?

You can browse our [documentation](/docs) or check some cURL examples below.

**Creating a new user with [WeDeploy Auth](/docs/auth/manage-users/#1):**

```text/x-sh
curl -X "POST" "https://<serviceID>-<projectID>.wedeploy.io/users" \
     -H 'Content-Type: application/json' \
     -d '{
       "email": "user@domain.com",
       "password": "mysecretpassword"
     }'
```

**Deleting a collection on [WeDeploy Data](/docs/data/deleting-data/#1):**

```text/x-sh
curl -X "DELETE" "https://<serviceID>-<projectID>.wedeploy.io/movies" \
     -H 'Authorization: Bearer <your-project-master-token>'
     -H 'Content-Type: application/json' \
```

**Sending an email using [WeDeploy Email](/docs/email/sending-email/#1):**

```text/x-sh
curl -X "POST" "https://<serviceID>-<projectID>.wedeploy.io/emails" \
     -H 'Authorization: Bearer <your-project-master-token>' \
     -H 'Content-Type: application/json' \
     -d $'{
        "from": "me@domain.com",
        "to": "you@domain.com",
        "subject": "Hi there!",
        "message": "What are your plans on Thursday?"
      }'
```

#### And that's it!

This is just one of the many exciting things we've been building for you. We're looking forward to share more improvements in the next few days.

> Simplicity is the ultimate sophistication - Leonardo da Vinci

*Happy hacking!*

</article>
