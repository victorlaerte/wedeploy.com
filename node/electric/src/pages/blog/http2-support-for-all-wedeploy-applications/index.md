---
title: "HTTP/2 Support for All WeDeploy Applications"
description: "We are happy to announce a big improvement regarding performance - now HTTP/2 is the default protocol for all applications hosted on WeDeploy. This is a big step ahead, carrying multiple benefits."
date: "November 27, 2017"
author: "Iliyan Peychev"
image: "images/blog/post-19--0.png"
layout: "blog"
---

<article>

{$page.description}

#### Why HTTP/2?

If you are not aware of HTTP/2, this is the latest version of HTTP and is now [available](https://caniuse.com/#feat=http2) in almost every browser. It came to solve some problems with its predecessor, HTTP 1.1. As you probably know, HTTP 1.1 had a big limitation - allowing only one outstanding request per TCP connection. Since that was unacceptable in today's Web applications, browsers didn't have any other choice except to use multiple TCP connections to process multiple requests simultaneously. However, this leads to TCP congestion and to unfair monopolization of network resources.

In contrary to HTTP 1.1, HTTP/2 is a binary protocol, fully multiplexed, uses one connection for parallelism, uses header compression to reduce overhead and allows servers to "push" resources like CSS and images proactively into client caches. If you need more information please [read here](https://http2.github.io/) or [watch this](https://www.youtube.com/watch?v=qyexqwG6fGI).

With fewer connections because of HTTP/2, the number of necessary network round-trips will be reduced. This will save on your application costs and allow you to handle more demanding traffic loads with fewer resources.

#### A real example

Let's see how [wedeploy.com](https://wedeploy.com), our main site behaves after adding support for HTTP/2 on WeDeploy. To check that, we will use the excellent [WebPagetest](https://www.webpagetest.org/) service. You may see the full results when HTTP/2 is disabled [here](http://www.webpagetest.org/result/171122_PQ_698aee2613000d25275de656217c2df9/) and when it is enabled [here](http://www.webpagetest.org/result/171122_AP_f1c8769f86cf310ed8dfed45a5ce88af/).

##### Waterfalls

Waterfall when Chrome loads *wedeploy.com* using HTTP 1.1 ([see original results here](http://www.webpagetest.org/result/171122_PQ_698aee2613000d25275de656217c2df9/1/details)):

<figure>
  <a href="http://www.webpagetest.org/result/171122_PQ_698aee2613000d25275de656217c2df9/1/details">
    <img src="/images/blog/post-19-waterfall-http1.1.png" alt="Waterfall with HTTP 1.1">
  </a>
</figure>

Waterfall when HTTP/2 is enabled ([see original results here](http://www.webpagetest.org/result/171122_AP_f1c8769f86cf310ed8dfed45a5ce88af/1/details)):

<figure>
  <a href="http://www.webpagetest.org/result/171122_AP_f1c8769f86cf310ed8dfed45a5ce88af/1/details">
    <img src="/images/blog/post-19-waterfall-http2.png" alt="Waterfall with HTTP/2">
  </a>
</figure>

See the difference? Notice how flat the waterfall is when HTTP/2 is enabled? Chrome still does an outstanding job loading *wedeploy.com* as smooth as possible when HTTP/2 is disabled, but even with all 6 connections, the results are worse in comparison to loading the site using HTTP/2. Now let's take a closer look at the connections.

##### Connections

Connections when Chrome loads *wedeploy.com* using HTTP 1.1 ([see original results here](http://www.webpagetest.org/result/171122_PQ_698aee2613000d25275de656217c2df9/1/details/)):

<figure>
  <a href="http://www.webpagetest.org/result/171122_PQ_698aee2613000d25275de656217c2df9/1/details/">
    <img src="/images/blog/post-19-connections-http1.1.png" alt="Connections with HTTP 1.1">
  </a>
</figure>

Connections when using HTTP/2 ([see original results here](http://www.webpagetest.org/result/171122_AP_f1c8769f86cf310ed8dfed45a5ce88af/1/details/)):

<figure>
  <a href="http://www.webpagetest.org/result/171122_AP_f1c8769f86cf310ed8dfed45a5ce88af/1/details/">
    <img src="/images/blog/post-19-connections-http2.png" alt="Connections with HTTP/2">
  </a>
</figure>

Here is where HTTP/2 stands out - there is only one connection to [wedeploy.com](wedeploy.com). In comparison, there are 6 connections when HTTP/2 is disabled. Please also note that for each connection, time is spent on initialization and SSL negotiation. This is a waste of network resources.

##### Overall performance

What about the overall performance? HTTP/2 clearly brings benefits, as you can see below (lower is better).

Performance results when Chrome loads *wedeploy.com* using HTTP 1.1 ([see original results here](http://www.webpagetest.org/result/171122_PQ_698aee2613000d25275de656217c2df9/)):

<figure>
  <a href="http://www.webpagetest.org/result/171122_PQ_698aee2613000d25275de656217c2df9/">
    <img src="/images/blog/post-19-performance-http1.1.png" alt="Overall performance with HTTP 1.1">
  </a>
</figure>

Performance results when using HTTP/2 ([see original results here](http://www.webpagetest.org/result/171122_AP_f1c8769f86cf310ed8dfed45a5ce88af/)):

<figure>
  <a href="http://www.webpagetest.org/result/171122_AP_f1c8769f86cf310ed8dfed45a5ce88af/">
    <img src="/images/blog/post-19-performance-http2.png" alt="Overall performance with HTTP/2">
  </a>
</figure>

#### That's cool, but what about my site?

Glad you asked! There is no need to do anything, all services you deploy will come with HTTP/2 out of the box. You know the deal - forget about infrastructure, that's our job. Your job is to create outstanding applications.

Happy hacking!

</article>
