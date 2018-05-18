---
title: "Running an application on a specific version of Node.js"
description: "In case you are building a Node.js application and want to host it on WeDeploy, we have good news for you - now you can specify a designated version of Node.js."
date: "October 18, 2017"
author: "Iliyan Peychev"
image: "images/blog/post-16--0.gif"
layout: "blog"
---

<article>

{$page.description}

<figure>
  <img src="/images/blog/post-16--0.gif" alt="Specifying Node.js version">
</figure>

This solves at least these two problems:
1. You can use all the experimental features which Node.js has already, even if they are not available in the default version of Node.js which runs on WeDeploy.
2. In case of a vulnerability, you can immediately update the Node.js version even before we update the default version.

To specify the designated version, you may use the standard [engines property](https://docs.npmjs.com/files/package.json#engines) in your `package.json`. We honour npm's full syntax so the following will work just fine.

Specifying range:

```application/json
{
  "engines": {
    "node": ">=8.4 <8.6"
  }
}
```

Specifying a fixed version:

```application/json
{
  "engines": {
    "node": "8.7.0"
  }
}
```

#### Using ECMAScript 2015 modules
The recent versions of Node.js contain most of the modern features added to JavaScript. We can use classes, arrow functions, async/await and so on, which makes the life of a developer much easier.

However, till recently, we were still not able to use the [import](https://www.ecma-international.org/ecma-262/6.0/#sec-imports) and [export](https://www.ecma-international.org/ecma-262/6.0/#sec-exports) statements as specified by the language. Instead we either had to use `require` or to use transpilers, like Babel. Fortunately, an experimental [implementation](https://nodejs.org/api/esm.html) of ES2015 modules in Node was added recently. Let's see how can we use it.

To enable ES2015 modules support, you have to specify at least v8.5 of Node.js and run the program with `--experimental-modules` flag:

```application/json
{
  "engine": {
    "node": ">=8.5.0"
  },
  "scripts": {
    "start": "node --experimental-modules index.mjs"
  }
}
```

To show an example of their usage, we created a sample project. You may see it live [here](https://es2015modules.wedeploy.io/). The full [source code](https://github.com/wedeploy-examples/nodejs-example/tree/es2015-modules) is available on Github.

The project shows how to import the three kind of modules: built-in Node modules, locally created modules and npm modules:

```javascript
import http from 'http';
import hackerQuotes from 'hacker-quotes';
import {getRandomQuote} from './random-hacker-quotes.mjs';
```

No transpilers or complex build systems are used - just plain JavaScript.

Happy hacking!

</article>
