---
title: "Filtering Data"
description: "Use our simple filters to make complex queries with a few lines of code."
headerTitle: "Data"
layout: "guide"
weight: 7
---

### {$page.title}

###### {$page.description}

<aside>

If you are unfamiliar with our API, please visit the [API Clients](/docs/intro/api-clients/) page first to learn how to install and configure it.

</aside>

The `.get`, `.watch`, and `.search` data methods can use these filters.

<article id="1">

## Reference

##### Operators

| Filter | Description |
| - | - |
| **[.where](#where)** | Conditional query using common operators |
| **[.or](#or)** | Additional operator query |
| **[.lt](#operators)** | Less than |
| **[.lte](#operators)** | Less than or equal to |
| **[.gt](#operators)** | Greater than |
| **[.gte](#operators)** | Greater than or equal to |
| **[.range](#range)** | Matches within numerical range |
| **[.none](#none)** | Negation filter for the query |
| **[.any](#any)** | Any matches within the array of values |
| **[.exists](#exists)** | Matches with non-`null` field |

##### Text Query

| Filter | Description |
| - | - |
| **[.match](#match)** | Matches any part of the query |
| **[.phrase](#phrase)** | Matches of exact query string sequence |
| **[.prefix](#prefix)** | Matches that begin with same value |
| **[.similar](#similar)** | Matches documents like this query |

##### Geolocation

| Filter | Description |
| - | - |
| **[.boundingBox](#boundingBox)** | Matches within rectangle geo zone |
| **[.distance](#distance)** | Matches within distance of specific location |

##### Results

| Filter | Description |
| - | - |
| **[.limit](#limit)** | Maximum results from query |
| **[.offset](#offset)** | Number of results skipped for pagination |
| **[.highlight](#highlight)** | Emphasizes portion of result that matches query |
| **[.aggregate](#aggregate)** | Generates query statistics |
| **[.count](#count)** | Counts number of resulting documents from query |
| **[.orderBy](#orderBy)** | Sorts query results by field |
| **[.fields](#fields)** | Select which fields should be retrieved |

</article>

<article id="2">

## Operators

<h5 id="where">where</h5>

To construct your own operator filter, you can use a `where` statement and include the operator type.

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .where('ratings', '>', 8.3)
  .get('movies')
```
```swift
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .where(field: "ratings", op: ">", value: 8.3)
  .get(resourcePath: "movies")
```
```text/x-java
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .where(Filter.field("ratings", ">", 8.3))
  .get("movies")
  .execute();
```
```text/x-sh
curl -X "GET" "https://<serviceID>-<projectID>.wedeploy.io/movies" \
     -H 'Authorization: Bearer <your-project-master-token>' \
     --get \
     --data-urlencode $'filter=[
        {
          "ratings": {
            "value": 8.3,
            "operator": ">"
          }
        }
      ]'
```

Above we are getting all documents in the movies collection where the ratings field is greater than 8.3.

You can also add multiple `where` statements (e.g. where this is true and this is true).

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .where('ratings', '>', 8.3)
  .where('theater', '=', 'Regal')
  .get('movies')
```
```swift
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .where(field: "ratings", op: ">", value: 8.3)
  .where(field: "theater", op: "=", value: "Regal")
  .get(resourcePath: "movies")
```
```text/x-java
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .where(Filter.field("ratings", ">", 8.3))
  .where(Filter.field("theater", "=", "Regal"))
  .get("movies")
  .execute();
```
```text/x-sh
curl -X "GET" "https://<serviceID>-<projectID>.wedeploy.io/movies" \
     -H 'Authorization: Bearer <your-project-master-token>' \
     --get \
     --data-urlencode $'filter=[
        {
          "ratings": {
            "value": 8.3,
            "operator": ">"
          }
        },
        {
          "theater": {
            "value": "Regal",
            "operator": "="
          }
        }
      ]'
```

Above we are getting all documents in the movies collection where the ratings field is greater than 8.3 and the theater is Regal.

The list of all the operators that can be used is `<`, `<=`, `>`, `>=`, `=`, `!=`, and `~`.

<h5 id="or">or</h5>

In conjunction with the `where` filter above, you can include an `or` statement to find results that match any one of the statements.

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .where('theater', '=', 'Regal')
  .or('theater', '=', 'CMA')
  .get('movies')
```
```swift
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .where(field: "theater", op: "=", value: "Regal")
  .or(field: "theater", op: "=", value: "CMA")
  .get(resourcePath: "movies")
```
```text/x-java
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .where(Filter.field("theater", "=", "Regal")
  .or(Filter.field("theater", "=", "CMA")))
  .get("movies")
  .execute();
```
```text/x-sh
curl -X "GET" "https://<serviceID>-<projectID>.wedeploy.io/movies" \
     -H 'Authorization: Bearer <your-project-master-token>' \
     --get \
     --data-urlencode $'filter=[
        {
          "or": [
            {
              "theater": {
                "value": "Regal",
                "operator": "="
              }
            },
            {
              "theater": {
                "value": "CMA",
                "operator": "="
              }
            }
          ]
        }
      ]'
```

Above we are getting all documents in the movies collection where the theater is Regal or CMA.

The list of all the operators that can be used is `<`, `<=`, `>`, `>=`, `=`, `!=`, and `~`.

<h5 id="operators">lt, lte, gt, gte</h5>

You can explicitly declare your operators as _lt_, _lte_, _gt_, or _gte_.

- `lt` Less than
- `lte` Less than or equal to
- `gt` Greater than
- `gte` Greater than or equal to

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .gt('rating', '7')
  .lte('ratings', '9.5')
  .get('movies')
```
```swift
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .gt(field: "ratings", value: "7")
  .lte(field: "ratings", value: "9.5")
  .get(resourcePath: "movies")
```
```text/x-java
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .where(Filter.gt("ratings", 7)
  .and(Filter.lte("ratings", 9.5)))
  .get("movies")
  .execute();
```
```text/x-sh
curl -X "GET" "https://<serviceID>-<projectID>.wedeploy.io/movies" \
     -H 'Authorization: Bearer <your-project-master-token>' \
     --get \
     --data-urlencode $'filter=[
        {
          "and": [
            {
              "ratings": {
                "value": 7,
                "operator": ">"
              }
            },
            {
              "ratings": {
                "value": 9.5,
                "operator": "<="
              }
            }
          ]
        }
      ]'
```

Above we are getting all documents in the movies collection where the ratings are greater than 7 and less than or equal to 9.5.

<h5 id="range">range</h5>

You can filter results that fit within a numerical range.

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .range('ratings', 4, 8)
  .get('movies')
```
```swift
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .range(field: "ratings", range: Range(from: 4, to: 8))
  .get(resourcePath: "movies")
```
```text/x-java
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .where(Filter.range("ratings", 4, 8))
  .get("movies")
  .execute();
```
```text/x-sh
curl -X "GET" "https://<serviceID>-<projectID>.wedeploy.io/movies" \
     -H 'Authorization: Bearer <your-project-master-token>' \
     --get \
     --data-urlencode $'filter=[
        {
          "ratings": {
            "value": {
              "from": 4,
              "to": 8
            },
            "operator": "range"
          }
        }
      ]'
```

Above we are getting all documents in the movies collection where the ratings are between 4 and 8.

<h5 id="none">none</h5>

You can filter results that do not match your query input.

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .none('theaters', 'Regal')
  .get('movies')
```
```swift
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .none(field: "theaters", value: ["Regal"])
  .get(resourcePath: "movies")
```
```text/x-java
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .where(Filter.none("theaters", "Regal"))
  .get("movies")
  .execute();
```
```text/x-sh
curl -X "GET" "https://<serviceID>-<projectID>.wedeploy.io/movies" \
     -H 'Authorization: Bearer <your-project-master-token>' \
     --get \
     --data-urlencode $'filter=[
        {
          "theaters": {
            "value": [
              "Regal"
            ],
            "operator": "none"
          }
        }
      ]'
```

Above we are getting all documents in the movies collection where the theater is not Regal.

You can also add multiple parameters.

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .none('theaters', 'Regal', 'AMC')
  .get('movies')
```
```swift
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .none(field: "theaters", value: ["Regal", "AMC"])
  .get(resourcePath: "movies")
```
```text/x-java
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .where(Filter.none("theaters", "Regal", "AMC"))
  .get("movies")
  .execute();
```
```text/x-sh
curl -X "GET" "https://<serviceID>-<projectID>.wedeploy.io/movies" \
     -H 'Authorization: Bearer <your-project-master-token>' \
     --get \
     --data-urlencode $'filter=[
        {
          "theaters": {
            "value": [
              "Regal",
              "AMC"
            ],
            "operator": "none"
          }
        }
      ]'
```

<h5 id="any">any</h5>

You can filter results that match your query input.

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .any('theaters', 'CMA')
  .get('movies')
```
```swift
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .any(field: "theaters", value: ["CMA"])
  .get(resourcePath: "movies")
```
```text/x-java
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .where(Filter.any("theaters", "CMA"))
  .get("movies")
  .execute();
```
```text/x-sh
curl -X "GET" "https://<serviceID>-<projectID>.wedeploy.io/movies" \
     -H 'Authorization: Bearer <your-project-master-token>' \
     --get \
     --data-urlencode $'filter=[
        {
          "theaters": {
            "value": [
              "CMA"
            ],
            "operator": "any"
          }
        }
      ]'
```

Above we are getting all documents in the movies collection where the theater is CMA.

You can also add multiple parameters.

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .any('theaters', 'Regal', 'AMC')
  .get('movies')
```
```swift
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .any(field: "theaters", value: ["Regal", "AMC"])
  .get(resourcePath: "movies")
```
```text/x-java
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .where(Filter.any("theaters", "Regal", "AMC"))
  .get("movies")
  .execute();
```
```text/x-sh
curl -X "GET" "https://<serviceID>-<projectID>.wedeploy.io/movies" \
     -H 'Authorization: Bearer <your-project-master-token>' \
     --get \
     --data-urlencode $'filter=[
        {
          "theaters": {
            "value": [
              "Regal",
              "AMC"
            ],
            "operator": "any"
          }
        }
      ]'
```

<h5 id="exists">exists</h5>

You can filter results that contain non-`null` contents.

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .exists('theaters')
  .get('movies')
```
```swift
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .exists(field: "theaters")
  .get(resourcePath: "movies")
```
```text/x-java
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .where(Filter.exists("theaters"))
  .get("movies")
  .execute();
```
```text/x-sh
curl -X "GET" "https://<serviceID>-<projectID>.wedeploy.io/movies" \
     -H 'Authorization: Bearer <your-project-master-token>' \
     --get \
     --data-urlencode $'filter=[
        {
          "theaters": {
            "operator": "exists"
          }
        }
      ]'
```

Above we are getting all documents in the movies collection where there is any value for theater.

</article>

<article id="3">

## Text Queries

For all text query examples, lets assume we are using a collection of Star Wars movies as the sample data.

Text queries ignore upper or lower case letters.

<h5 id="match">match</h5>

You can filter for content that matches any part of your query. This would allow us to search for "The Revenge of the Sith" by simply querying something like "Sith's revenge".

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .match('title', "Sith\'s revenge")
  .get('movies')
```
```swift
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .match(field: "title", pattern: "Sith's revenge")
  .get(resourcePath: "movies")
```
```text/x-java
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .where(Filter.match("title", "Sith's revenge"))
  .get("movies")
  .execute();
```
```text/x-sh
curl -X "GET" "https://<serviceID>-<projectID>.wedeploy.io/movies" \
     -H 'Authorization: Bearer <your-project-master-token>' \
     --get \
     --data-urlencode $'filter=[
        {
          "title": {
            "value": "Sith's revenge",
            "operator": "match"
          }
        }
      ]'
```

Above we are getting all documents in the movies collection where the title contains "sith's" or "revenge".

You can also use in-line operators to enhance the accuracy of your results.

- `-` Place at beginning of a word to negate it in your query
- `+` Place at beginning of a word to enforce it in your query
- `~` Place at end of a word to add it as a fuzzy element of your query
- `"` Place around a group of words to fully match the phrase in your query

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .match('title', 'sith +Revenge -jedi')
  .get('movies')
```
```swift
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .match(field: "title", pattern: "sith +Reveng -jedi")
  .get(resourcePath: "movies")
```
```text/x-java
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .where(Filter.match("title", "sith +Revenge -jedi"))
  .get("movies")
  .execute();
```
```text/x-sh
curl -X "GET" "https://<serviceID>-<projectID>.wedeploy.io/movies" \
     -H 'Authorization: Bearer <your-project-master-token>' \
     --get \
     --data-urlencode $'filter=[
        {
          "title": {
            "value": "sith +Revenge -jedi",
            "operator": "match"
          }
        }
      ]'
```

Above we are getting all documents in the movies collection where the title has to contain "revenge", does not contain "jedi", and might contain "sith".

<h5 id="phrase">phrase</h5>

You can filter content containing the phrase with the prefix of the last word of your query. This is a helpful tool for providing auto-complete prompts.

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .phrase('title', 'revenge of the')
  .get('movies')
```
```swift
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .phrase(field: "title", value: "revenge of the")
  .get(resourcePath: "movies")
```
```text/x-java
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .where(Filter.phrase("title", "revenge of the"))
  .get("movies")
  .execute();
```
```text/x-sh
curl -X "GET" "https://<serviceID>-<projectID>.wedeploy.io/movies" \
     -H 'Authorization: Bearer <your-project-master-token>' \
     --get \
     --data-urlencode $'filter=[
        {
          "title": {
            "value": "revenge of the",
            "operator": "phrase"
          }
        }
      ]'
```

Above we are getting all documents in the movies collection where the title contains "revenge of the".

<h5 id="prefix">prefix</h5>

You can filter for content that contains the prefix of your text query.

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .prefix('title', 'reven')
  .get('movies')
```
```swift
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .prefix(field: "title", value: "reven")
  .get(resourcePath: "movies")
```
```text/x-java
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .where(Filter.prefix("title", "reven"))
  .get("movies")
  .execute();
```
```text/x-sh
curl -X "GET" "https://<serviceID>-<projectID>.wedeploy.io/movies" \
     -H 'Authorization: Bearer <your-project-master-token>' \
     --get \
     --data-urlencode $'filter=[
        {
          "title": {
            "value": "reven",
            "operator": "prefix"
          }
        }
      ]'
```

Above we are getting all documents in the movies collection where a word in the title begins with "reven".

<h5 id="similar">similar</h5>

You can filter for content that is similar to your text query.

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .similar('title', 'sth')
  .get('movies')
```
```swift
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .similar(field: "title", query: "sth")
  .get(resourcePath: "movies")
```
```text/x-java
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .where(Filter.similar("title", "sth"))
  .get("movies")
  .execute();
```
```text/x-sh
curl -X "GET" "https://<serviceID>-<projectID>.wedeploy.io/movies" \
     -H 'Authorization: Bearer <your-project-master-token>' \
     --get \
     --data-urlencode $'filter=[
        {
          "title": {
            "value": {
              "query": "sth"
            },
            "operator": "similar"
          }
        }
      ]'
```

Above we are getting all documents in the movies collection where the title contains similar content to "sth".

</article>

<article id="4">

## Geolocation

**Initializing**

To begin utilizing the geolocation filtering, you must prepare the mapping of your collection field first so that the database knows to only accept valid geolcation entries. To do this, run this cURL command (replace the service ID, Project ID, collection ID, and field name).

```text/x-sh
curl -X POST \
  --url https://{service}-{project}.wedeploy.io/ \
  --header 'content-type: application/json' \
  --data '{
    "name": "{collection}",
    "mappings": {
      "{field}": "geo_point"
    }
  }'
```

Once you have mapped the field as a `geo_point`, you can start using the capabilities of our geolocation filtering.

**Supported Formats**

There are three supported formats for geolocation entries:

```javascript
// Object format
location: { 'lat': 20, 'lon': 40 }

// String format
location: "20, 40"

// Array format
location: [20, 40]
```
```swift
GeoPoint(lat: 20, long: 40)
```
```text/x-java
Geo.point(20, 40)
```

<aside>

**Note**: The array format is only compatible with [GeoJSON](http://geojson.org/).

</aside>

<h5 id="boundingBox">boundingBox</h5>

You can filter for results within a specific geo box.

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .boundingBox('location', '20,0', '0,20')
  .get('movies')
```
```swift
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .polygon(field: "location", points: [GeoPoint(lat: 20, long: 0), GeoPoint(lat: 0, long: 20)])
  .get(resourcePath: "movies")
```
```text/x-java
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .where(Filter.boundingBox("location", "20,0", "0,20"))
  .get("movies")
  .execute();
```
```text/x-sh
curl -X "GET" "https://<serviceID>-<projectID>.wedeploy.io/movies" \
     -H 'Authorization: Bearer <your-project-master-token>' \
     --get \
     --data-urlencode $'filter=[
        {
          "location": {
            "value": [
              "20,0",
              "0,20"
            ],
            "operator": "gp"
          }
        }
      ]'
```

Above we are getting all documents in the theaters collection where the location is within a geo box with the top left coordinates of 20,0 and the bottom right coordinates of 0,20.

<h5 id="distance">distance</h5>

You can filter for results based on a distance away from a specific location.

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .distance('location', '20,0', '40mi')
  .get('movies')
```
```swift
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .distance(field: "location", latitude: 20, longitude: 0, distance: .mile(40))
  .get(resourcePath: "movies")
```
```text/x-java
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .where(Filter.distance("location", "20.0,0", "40mi"))
  .get("movies")
  .execute();
```
```text/x-sh
curl -X "GET" "https://<serviceID>-<projectID>.wedeploy.io/movies" \
     -H 'Authorization: Bearer <your-project-master-token>' \
     --get \
     --data-urlencode $'filter=[
        {
          "location": {
            "value": {
              "max": "40mi",
              "location": "20.0,0"
            },
            "operator": "gd"
          }
        }
      ]'
```

Above we are getting all documents in the theaters collection where the location is within 40 miles of 20,0.

You can choose from the list of supported distance measurements.

- `mi`: miles
- `yd`: yards
- `ft`: feet
- `in`: inch
- `km`: kilometers
- `m`: meters
- `cm`: centimeters
- `mm`: millimeters
- `nmi`: nautical miles


</article>

<article id="5">

## Results

<h5 id="limit">limit</h5>

You can limit the filter results by setting a maximum query limit (default is 10,000).

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .match('title', 'Revenge')
  .limit(2)
  .get('movies')
```
```swift
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .match(field: "title", pattern: "Revenge")
  .limit(2)
  .get(resourcePath: "movies")
```
```text/x-java
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .where(Filter.match("title", "Revenge"))
  .limit(2)
  .get("movies")
  .execute();
```
```text/x-sh
curl -X "GET" "https://<serviceID>-<projectID>.wedeploy.io/movies" \
     -H 'Authorization: Bearer <your-project-master-token>' \
     --get \
     --data-urlencode 'limit=2' \
     --data-urlencode $'filter=[
        {
          "title": {
            "value": "Revenge",
            "operator": "match"
          }
        }
      ]'
```

Above we are getting a maximum of 2 documents in the movies collection where the title contains "Revenge".

<h5 id="offset">offset</h5>

You can choose how many results to skip in order to provide pagination.

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .match('title', 'Revenge')
  .offset(5)
  .get('movies')
```
```swift
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .match(field: "title", pattern: "Revenge")
  .offset(5)
  .get(resourcePath: "movies")
```
```text/x-java
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .where(Filter.match("title", "Revenge"))
  .offset(5)
  .get("movies")
  .execute();
```
```text/x-sh
curl -X "GET" "https://<serviceID>-<projectID>.wedeploy.io/movies" \
     -H 'Authorization: Bearer <your-project-master-token>' \
     --get \
     --data-urlencode 'offset=5' \
     --data-urlencode $'filter=[
        {
          "title": {
            "value": "Revenge",
            "operator": "match"
          }
        }
      ]'
```

Above we are getting documents in the movies collection where the title contains "Revenge" but skipping the first 5 results.

<h5 id="highlight">highlight</h5>

You can add emphasis to the portion of the field that matches the query.

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .match('title', 'Revenge')
  .highlight('title')
  .get('movies')
```
```swift
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .match(field: "title", pattern: "Revenge")
  .highlight("title")
  .get(resourcePath: "movies")
```
```text/x-java
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .where(Filter.match("title", "Revenge"))
  .highlight("title")
  .get("movies")
  .execute();
```
```text/x-sh
curl -X "GET" "https://<serviceID>-<projectID>.wedeploy.io/movies" \
     -H 'Authorization: Bearer <your-project-master-token>' \
     --get \
     --data-urlencode $'highlight=[
        "title"
      ]' \
     --data-urlencode $'filter=[
        {
          "title": {
            "value": "Revenge",
            "operator": "match"
          }
        }
      ]'
```

Above we are getting documents in the movies collection where the title contains "Revenge" and wrapping all "revenge" words in `<em>`. This would be the result.

```application/json
{
  "title": "Star Wars: Episode III - <em>Revenge</em> of the Sith",
  "id": "star_wars_iii"
},
```

<h5 id="aggregate">aggregate</h5>

You can generate aggregated statistics regarding your queries instead of retrieving the documents themselves.

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .aggregate('my_averages', 'ratings', 'avg')
  .get('movies')
```
```swift
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .aggregate(name: "my_averages", field: "ratings", op: "avg")
  .get(resourcePath: "movies")
```
```text/x-java
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .aggregate(Aggregation.of("my_averages", "ratings", "avg"))
  .get("movies")
  .execute();
```
```text/x-sh
curl -X "GET" "https://<serviceID>-<projectID>.wedeploy.io/movies" \
     -H 'Authorization: Bearer <your-project-master-token>' \
     --get \
     --data-urlencode $'aggregation=[
        {
          "ratings": {
            "name": "my_averages",
            "operator": "avg"
          }
        }
      ]'
```

Above we are finding the average of all the movie ratings in our collection. This is the syntax of the aggregation parameters.

```javascript
.aggregate('unique_aggregation_name', 'collection_field', 'aggregation_type')
```
```swift
.aggregate(name: String, field: String, op: String)
```
```text/x-java
.aggregate(Aggregation.of("unique_aggregation_name", "collection_field", "aggregation_type"))
```

You can choose to use any of these aggregations.

**Without Value Specification**

- `min`: Minimum
- `max`: Maximum
- `sum`: Sum
- `avg`: Average
- `stats`: Statistics containing _min_, _max_, _sum_, _count_ and _avg_
- `extendedStats`: All contents of `stats` with the addition of _sumOfSquares_, _variance_, _stdDeviation_ and _stdDeviationBounds_
- `count`: Counts results
- `missing`: Counts documents excluded from query
- `terms`: All stored values for the query, with document count for each value

**With Value Specification**

- Range: Count documents that fit within a specific range
- Histogram: Generates a histogram within specific intervals
- geoDistance: Count locations within a specific range

<h5 id="count">count</h5>

You can count the number of resulting documents.

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .where('ratings', '>', 8.5)
  .count()
  .get('movies')
```
```swift
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .where(field: "ratings", op: ">", value: 8.5)
  .count()
  .get(resourcePath: "movies")
```
```text/x-java
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .where(Filter.field("ratings", ">", 8.5))
  .count()
  .get("movies")
  .execute();
```
```text/x-sh
curl -X "GET" "https://<serviceID>-<projectID>.wedeploy.io/movies" \
     -H 'Authorization: Bearer <your-project-master-token>' \
     --get \
     --data-urlencode 'type=count' \
     --data-urlencode $'filter=[
        {
          "ratings": {
            "value": 8.5,
            "operator": ">"
          }
        }
      ]'
```

Above we are finding the number of movies that have ratings above 8.5.

<h5 id="orderBy">orderBy</h5>

You can sort the results by alphabetical or numerical order.

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .where('ratings', '>', 8.5)
  .orderBy('title', 'desc')
  .get('movies')
```
```swift
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .where(field: "ratings", op: ">", value: 8.5)
  .orderBy(field: "title", order: .DESC)
  .get(resourcePath: "movies")
```
```text/x-java
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .where(Filter.field("ratings", ">", 8.5))
  .orderBy("title", SortOrder.DESCENDING)
  .get("movies")
  .execute();
```
```text/x-sh
curl -X "GET" "https://<serviceID>-<projectID>.wedeploy.io/movies" \
     -H 'Authorization: Bearer <your-project-master-token>' \
     --get \
     --data-urlencode $'sort=[
        {
          "title": "desc"
        }
      ]' \
     --data-urlencode $'filter=[
        {
          "ratings": {
            "value": 8.5,
            "operator": ">"
          }
        }
      ]'
```

<h5 id="fields">fields</h5>
Sometimes you don't need all fields from a document, in these cases you can use the `fields` method to get only the fields that you want.

```javascript
WeDeploy
  .data('https://<serviceID>-<projectID>.wedeploy.io')
  .fields(['title', 'ratings'])
  .get('movies')
```
```swift
WeDeploy
  .data("https://<serviceID>-<projectID>.wedeploy.io")
  .fields("title", "ratings")
  .get(resourcePath: "movies")
```
```text/x-sh
curl -X "GET" "https://<serviceID>-<projectID>.wedeploy.io/movies" \
     -H 'Authorization: Bearer <your-project-master-token>' \
    --get --data-urlencode $'fields[
      "title",
      "ratings"
    ]'
```

Above we are finding all the movies that have ratings above 8.5 and sorting them by their title in descending order.

You can either order in ascending (`asc`) or descending (`desc`) order. Ascending is the default.

</article>

## What's next?

Now that you've learned how to search, you can start [updating data](/docs/data/updating-data/).
