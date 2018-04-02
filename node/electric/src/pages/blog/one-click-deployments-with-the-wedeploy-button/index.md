---
title: "One-Click Deployments With The WeDeploy Button"
description: "We believe that deploying apps shouldn't be hard. It shouldn't take days or hours. And it definitely shouldn't take multiple steps or complicated processes."
date: "April 2, 2018"
author: "Zeno Rocha"
layout: "blog"
---

<article>

{$page.description}

Now, we are making it even easier to kickstart your projects with the WeDeploy Button and we would love for you to try it out.

#### See For Yourself

Why talk about it when you could just see it live? Click the button below to **deploy a site right from this blogpost!**

[![Deploy](https://cdn.wedeploy.com/images/deploy.svg)](https://console.wedeploy.com/deploy?repo=https://github.com/wedeploy-examples/hosting-example)

If you want to try other buttons like this, check our [new GitHub organization with more than 60 examples](https://github.com/wedeploy-examples) including [Node.js](https://github.com/wedeploy-examples/nodejs-example), [Wordpress](https://github.com/wedeploy-examples/wordpress-example), [Rocket.Chat](https://github.com/wedeploy-examples/rocketchat-example).

#### How It Works

We created an endpoint that you can call with a Git repository as a parameter. From there, we will clone and deploy your project.

<figure>
  <img src="/images/blog/post-28--0.gif" alt="WeDeploy Button in Action">
</figure>

To improve your experience even more, we added support to the most popular Git providers like **[GitHub](https://github.com/), [GitLab](https://gitlab.com/) and [Bitbucket](https://bitbucket.org)**.

Besides that, we created a button that you can use to promote your projects and help users get started quickly. Here are the two things you'll need when inserting your own button.

**Button Image**

```text
https://cdn.wedeploy.com/images/deploy.svg
```

**Button Link**

```xml
https://console.wedeploy.com/deploy?repo=<your-git-repository>
```

As you can see, the `repo` param is how you tell WeDeploy what to deploy.

#### Add To Your Readme

Easily add a deploy button to your README files by including this Markdown snippet.

```text
[![Deploy](https://cdn.wedeploy.com/images/deploy.svg)](https://console.wedeploy.com/deploy?repo=https://github.com/wedeploy-examples/hosting-example)
```

#### Add To Your Site

You can also add it anywhere in your website with a simple HTML snippet.

```xml
<a href="https://console.wedeploy.com/deploy?repo=https://github.com/wedeploy-examples/hosting-example">
  <img src="https://cdn.wedeploy.com/images/deploy.svg" alt="Deploy to WeDeploy">
</a>
```

#### Custom Git Branch

What if you want to specify a Git branch to deploy? No problem, just include the branch path in the URL and we will fetch for you.

---

We are very excited about this feature and how it can help you share your amazing applications.

**If you have any questions, join our [Slack Community](https://chat.wedeploy.com).**

</article>
