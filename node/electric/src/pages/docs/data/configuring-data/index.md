---
title: "Configuring Data"
description: "Configure your database and to secure paths to certain documents or to validate request data types."
headerTitle: "Data"
layout: "guide"
weight: 2
---

### {$page.title}

###### {$page.description}

<aside>

If you are unfamiliar with our API, please visit the [API Clients](/docs/intro/api-clients/) page first to learn how to install and configure it.

</aside>

<article id="1">

## Introduction

By default WeDeploy Data service is going to use all the JSON files starting with `api-*` and also the file `api.json`.

These files are used to help you manage features such as path validation, authentication, and data type validation.

The api JSON files are located at the same path of the `./wedeploy.json` and are used following the ordering filesystem.

</article>

<article id="2">

## JSON Attributes

We have a list of supported attributes to help you configure your database.

<div class="table-container">

| Field | Type | Description |
| - | - | - |
| **[path](#path)** | string | The path that represents the collection used to handle the request data. |
| **[data](#data)** | boolean | Tells the service if the request to a collection should be stored or not. |
| **[description](#description)** | string | Used to describe the behavior of an endpoint. |
| **[auth](#auth)** | object | Used to define authentication rules for the endpoint. |
| **[method](#method)** | array | HTTP method allowed for the request. |
| **[parameters](#parameters)** | object | Parameters and validation rules for the collection. |

</div>

<h4 id="path">path</h4>

A path represents the resource used to store your project data.

```application/json
[
  {
    "path": "/movies/:movieId"
  },
  {
    "path": "/fruits/*"
  }
]
```

<h4 id="data">data</h4>

You can create endpoints just for validation or to actually store the request in the collection. If set to `true` it will store the request.

```application/json
[
  {
    "path": "/fruits/*",
    "data": true
  }
]
```

<h4 id="description">description</h4>

The `description` is a simple way to keep your endpoints organized by describing their behavior and role.

```application/json
[
  {
    "description": "Returns actors of a movie",
    "path": "/movies/:movieId/actors",
    "method": "GET"
  }
]
```

<h4 id="auth">auth</h4>

You can prevent unauthorized applications and users from accessing certain endpoints by using the `auth` field. A common use is to verify if the application requesting the endpoint is authenticated before it completes the request.

```application/json
[
  {
    "path": "/movies/*",
    "auth": {
      "validator": "$auth !== null"
    }
  }
]
```

<h4 id="method">method</h4>

The `method` specifies the HTTP method used for the request. In the example bellow, it allows a GET request and if you try to do a PUT or DELETE the route will not be recognized and will fail. This is very useful for adding different types of validation for different request methods.

```application/json
[
  {
    "path": "/movies/:movieId",
    "data": true,
    "method": "GET"
  }
]
```

Available methods include:

- `GET`
- `POST`
- `PATCH`
- `PUT`
- `DELETE`

<h4 id="parameters">parameters</h4>

You generally would use `parameters` to force validation in order to make sure that the params sent to a collection follow predefined rules.

```application/json
[
  {
    "description": "Creates a new movie",
    "path": "/movies",
    "method": "POST",
    "parameters": {
      "title": {
        "type": "string",
        "required": true
      }
    },
    "data": true
  }
]
```

Available parameter types include:

- boolean
- number
- string
- array
- object

</article>

<article id="3">

## Allowing Usage of All the Collections

In order to freely use any collection with any kind of operation, you just need to add the following content in your `api.json`.

```application/json
[
  {
    "path": "/*",
    "data": true
  }
]
```

This path tells the data service to allow any request to the base path of the data service.

</article>

<article id="4">

## Validating Resources

The Validator script will be executed in an environment where several requests and server data will be available. In this environment, there are several global variables available to you that can be used to validate the request parameter, body, or values.

The validator can be used as an integration with the [Auth service](/docs/auth/):

```application/json
{
  "path": "/movies/*",
  "auth": {
    "validator": "$auth !== null"
  }
}
```

The global variables are:

<div class="table-container">

| Variable | Description |
| - | - |
| $auth | The authenticated user of this request. If the request was not authenticated, it will be null. |
| $config | The raw JSON data stored in the service's config.json file. |
| $session | All stored session data. If the request had no session cookie, it will be an empty map for the new session created for this request. |
| $params | The request params as they were loaded from url query and request body. All query and form parameters will be strings here. |
| $values | The parsed request params, as they are used for parameter validation. All query and form parameters will be parsed to JSON values. |
| $body | The parsed request body, according to the request Content-Type. |
| $data | The data view for this request, if a data path is mounted in the API path, and the request path represents a key to access any data resource (collection, document or inner field from a document). It will be null otherwise. |

</div>

Some common validators are:

<ol>

<li>Authenticated users only:</li>

```xml
$auth !== null
```

<li>Mixed with dynamic values:</li>

```xml
$auth.id === $params.id
```

<li>Validate new data value against old one:</li>

```xml
$body.timestamp > $data.timestamp
```

<li>Multiple contitional validation:</li>

```xml
$auth !== null && $auth.id === $params.id
```

</ol>

</article>

<article id="5">

## Limiting Access by Scope

Controlling who gets to see, update, create or delete data is a very important part of your application. For this, we provide you with `supportedScopes` so you can set what scopes an authenticated user must have in order to make requests to your data collections. All you have to do is add the scopes to your path authentication.

```application/json
"auth":{
  "scopes": ["scope"],
  "validator": "$auth !== null"
}
```

This is what it will look like in your `api.json`.

```application/json
[
  {
    "path": "/movies/*",
    "method": "POST",
    "auth":{
      "scopes": ["scope"],
      "validator": "$auth !== null"
    }
  }
]
```

Learn more about how to [add user scopes](/docs/auth/manage-users/#9).

</article>

## What's next?

Now that you have configured, you can start [saving data](/docs/data/saving-data/).
