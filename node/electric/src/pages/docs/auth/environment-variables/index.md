---
title: "Environment Variables"
description: "Use environment variables to control your app."
headerTitle: "Auth"
layout: "guide"
weight: 7
---

### {$page.title}

###### {$page.description}

<aside>

If you are unfamiliar with how you can apply this concept, please visit our main [Environment Variables](/docs/intro/environment-variables/) page.

</aside>

<article id="1">

## Reference

Here's a list of all the environment variables you can use with this service.

<div class="table-container">

| Key | Description |
| - | - |
| WEDEPLOY_AUTH_EMAIL_CONTENT | HTML code for password reset email |
| WEDEPLOY_AUTH_EMAIL_SENDER | Set password reset email sender |
| WEDEPLOY_AUTH_EMAIL_SERVICE_URL | Set the email service id for sending password reset emails |
| WEDEPLOY_AUTH_EMAIL_SUBJECT | Set password reset email subject |
| WEDEPLOY_AUTH_FACEBOOK | Enable Facebook Auth integration |
| WEDEPLOY_AUTH_FACEBOOK_CLIENT_ID | Facebook OAuth ID |
| WEDEPLOY_AUTH_FACEBOOK_CLIENT_SECRET | Facebook OAuth password |
| WEDEPLOY_AUTH_GITHUB | Enable GitHub Auth integration |
| WEDEPLOY_AUTH_GITHUB_CLIENT_ID | GitHub OAuth ID |
| WEDEPLOY_AUTH_GITHUB_CLIENT_SECRET | GitHub OAuth password |
| WEDEPLOY_AUTH_GOOGLE | Enable Google Auth integration |
| WEDEPLOY_AUTH_GOOGLE_CLIENT_ID | Google OAuth ID |
| WEDEPLOY_AUTH_GOOGLE_CLIENT_SECRET | Google OAuth password |
| WEDEPLOY_AUTH_PASSWORD | Enable email and password Auth |
| WEDEPLOY_AUTH_SECURE_FIELDS | Select which Auth fields are secured |

</div>

<aside>

###### <span id="securityFields" class="icon-16-alert"></span> Attention

When using `WEDEPLOY_AUTH_SECURE_FIELDS`, we will hide these fields in any request that does not contain your master token. We recommend adding these secure fields:

- `password`
- `providers`
- `resetKey`
- `supportedScopes`

Please remember that supportedScopes works differently than the rest. To learn more, see our [Data Validation docs](/docs/data/configuring-data/#5).

```application/json
{
  "id": "auth",
  "image": "wedeploy/auth:@site.version.image.auth@",
  "env": {
    "WEDEPLOY_AUTH_SECURE_FIELDS": "providers,password,resetKey,supportedScopes",
    "WEDEPLOY_AUTH_PASSWORD": "true"
  }
}
```
</aside>


</article>
