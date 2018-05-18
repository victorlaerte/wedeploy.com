---
title: "How WeDeploy Estimates Tasks?"
description: "Last year we started to notice how we were missing our release estimates on WeDeploy. We would start a new feature and say: 'Oh, this is going to take only one month to release', but in reality it would take three. This year we decide to change that and now we're seeing some substantial improvements."
date: "May 3, 2018"
author: "Zeno Rocha"
image: "images/blog/post-29--0.png"
layout: "blog"
---

<article>

<figure>
  <img src="/images/blog/post-29--0.png" alt="Fibonacci Spiral" />
</figure>

{$page.description}

<aside>

This is the first post of a series called **#HowWeDeployWorks**, the idea is to show the "behind the scenes" of how the WeDeploy team operates. We know every team works differently and there is [no silver bullet](https://en.wikipedia.org/wiki/No_Silver_Bullet). Our goal here is to share what we're learning along the way.

</aside>

#### Why Estimate?

Regardless of what position you occupy, one day someone will come and ask you: 'When will it be done?'. You don't have a crystal ball, so how can you know the answer? In the real world, people have deadlines to meet and they need an answer. Well, you have no alternative other than to guess.

**Estimating software is the art of guessing.** The good news is that if you start estimating, you're going to have a more accurate guess. If you don't, you'll miss all the time.

#### Mental Shift

**Adopting a mentality of always estimating your tasks is not easy at all**. Once we decided that we were going to do that, we selected a few members of the team to see how they would react.

As we got more confident, we slowly brought one more member to the process every week. As of today, we onboarded over half of the team and are continuining to learn how to bring that mentality to each individual's unique development process.

#### Understanding A Task

Before you start estimating, you first need to discuss the technical challenges of a task with the engineers. We noticed that if you don't do that you'll end up with tasks that are too large.

**The bigger a task is, the less accurate an estimate will be.** That's why it's so important to really understand the task and break it down as much as you can.

#### The Estimate Unit

Some people do planning poker and others use t-shirt sizes. Each technique has their own pros and cons, you can even use them together if you want. At WeDeploy, we use points in a Fibonacci scale.

One is not necessarily better than the other, it will really depend on the needs of your project and how your team adopts it. **Regardless of what unit you use, the important thing is to estimate.**

#### Don't Get Confused

When we started this process, we found that it was difficult to be aligned on the value of a point. To help with this, we've tried equating 1 point to 4 hours of work. This served as a guidance for different people to be on the same page about the complexity of a task.

**One thing to keep in mind is that these points are not deadlines.** If they miss their estimates, that's totally ok. It doesn't mean they didn't do the work or were less productive. Estimates are guesses and sometimes our guesses will be wrong.

#### Why Fibonacci Scale?

Fibonacci is interesting because it's exponential. As the numbers increase, the difference between two succeeding numbers will also increase. We noticed that this helps when deciding if a task will take 5 or 8 points because it makes the difference between them more clear.

It is easier to determine the relative complexity of a task rather than figuring out exactly how much time it will take.

**Another thing we noticed is that higher points are usually a sign that a task is not very clear or well defined yet.** Once again it's important to ask more questions and try to break it down even more if possible.

#### The Tool We Use

A [study by the Journal of Experimental Psychology](http://www.apa.org/research/action/multitask.aspx) demonstrated that even brief mental blocks created by shifting context can cost as much as 40 percent of someone's productive time.

Why is this important? **Because you don't want to introduce a tool that will get in the way of your team's productivity.**

Most of our team is technical so we usually stay on GitHub the whole day. That's why we chose [ZenHub](https://www.zenhub.com/) which is pretty much a browser extension that adds some functionalities to GitHub. The ability to add an estimate to an issue is one of them.

<figure>
  <img src="/images/blog/post-29--1.png" alt="Estimating using ZenHub" />
</figure>

#### The Results

Now that we're being more diligent with the tasks, we've started to see results in our ability to release faster. The good news is that not only the team is seeing that, but users are noticing as well.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I am absolutely staggered by how quickly <a href="https://twitter.com/wedeploy?ref_src=twsrc%5Etfw">@wedeploy</a> is rolling out amazing features for devs <a href="https://twitter.com/hashtag/Developer?src=hash&amp;ref_src=twsrc%5Etfw">#Developer</a> <a href="https://twitter.com/hashtag/DevOps?src=hash&amp;ref_src=twsrc%5Etfw">#DevOps</a> <a href="https://t.co/4e6P53Wi4T">https://t.co/4e6P53Wi4T</a></p>&mdash; Robin Wolstenholme (@rjwolstenholme) <a href="https://twitter.com/rjwolstenholme/status/987400173847568384?ref_src=twsrc%5Etfw">April 20, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Of course, estimating won't produce those results alone, there are many other things in place that contribute to that.

Estimating a task is especially helpful when planning your next sprint and understanding how fast your team moves. That's exactly what we're hoping to talk about soon in this series.

Did you like this post? Don't forget to let us know about your opinions! **You can connect with us on [Twitter](https://twitter.com/wedeploy) or join our community on [Slack](https://chat.wedeploy.com).**

</article>
