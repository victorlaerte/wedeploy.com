---
title: "The New WeDeploy Button"
description: "We believe that deploying applications shouldn't be complicated. With this new feature, we are making it even easier to try projects on WeDeploy and share them seamlessly with others."
date: "March 28, 2018"
author: "Jonni Lundy"
layout: "blog"
---

<article>

{$page.description}

#### See For Yourself

Why talk about it when you could just try it. Click the button below to deploy one of our popular examples in action.

[![Deploy](https://cdn.wedeploy.com/images/deploy.svg)](https://console.wedeploy.com/deploy?repo=https://github.com/wedeploy-examples/hosting-example)

#### How It Works

To add this functionality, we created a URL based path for any user to deploy a Git repo to WeDeploy. This means it's easy to change the URL to the specific GitHub, GitLab or Bitbucket repo that you want to deploy, and then add it to your site.

Here are the two assets you'll need when creating your own deploy button.

- Deploy Link: https://console.wedeploy.com/deploy?repo=<your-git-repository>.
- Button Image: https://cdn.wedeploy.com/images/deploy.svg

As you can see, the `repo` param is how you tell WeDeploy what to deploy.

#### Add To Your ReadMe

Easily add a deploy button to your GitHub, GitLab, or Bitbucket readme by including this markdown.

```text
[![Deploy](https://cdn.wedeploy.com/images/deploy.svg)](https://console.wedeploy.com/deploy?repo=https://github.com/wedeploy-examples/hosting-example)
```

#### Add To Your Site

You can also add it anywhere in your website with simple HTML to promote your project.

```xml
<a href="https://console.wedeploy.com/deploy?repo=https://github.com/wedeploy-examples/hosting-example">
  <img src="https://cdn.wedeploy.com/images/deploy.svg" alt="Deploy">
</a>
```

#### Custom Git Branch

What if you want to specify a git branch to deploy? No problem, just include the branch path in the git url and we will 

We are excited about this feature and how it can help you share your amazing applications.

---

**If you have any questions, join our [Slack Community](https://chat.wedeploy.com).**

</article>
