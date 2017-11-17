---
title: "Post Database"
description: "In this section, you'll learn how search for locations based on their coordinates using the WeDeploy API Client."
buttonTitle: "I added the business database"
tutorialTitle: "Getting started with WeDeploy geolocation search"
parentId: "geolocation-search"
layout: "tutorial"
time: 60
weight: 8
---

#### {$page.title}

##### Map the Collection

Before adding any items to the database, we have to map the variable we want to be used for the location. This way the database knows how to handle our queries and can search based on the longitude and latitude of the listing.

To do this, run this script from anywhere in your terminal.

1. Copy the cURL command into your terminal (don't run yet)
2. Go to the <a href="https://console.wedeploy.com" target="_blank">WeDeploy Console</a> of your new project
3. Select _Settings_ and copy the master token
4. Past the master token into the command
5. Paste the actual ID of your project into the command
6. Run it!

```xml
curl -XPOST "https://db-projectID.wedeploy.io/" \
  -H "Authorization: Bearer {masterToken}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "places",
    "mappings": {
      "location": "geo_point"
    }
  }'
```

##### Post the Dataset

Now you are ready to upload the database to a collection so you can start using it in your application.

1. Go to the `tutorial-geolocation-search` directory in your terminal
2. Copy this command into your terminal
3. Replace the master token and project ID
4. Run it (it may take a few seconds to complete)!

```xml
curl -XPOST "https://db-projectID.wedeploy.io/places" \
  -H "Authorization: Bearer {masterToken}" \
  -H "Content-Type: application/json" \
  -d @sample-data.json
```
