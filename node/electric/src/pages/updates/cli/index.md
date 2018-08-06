---
title: "CLI"
description: "Check out the latest releases of the WeDeploy"
layout: "updates"
updates:
 -
  version: 1.6.0
  date: August 5th, 2018
  description: Improved Windows install experience. Removed project id confirmation when extracting it from working directory. Minor improvements.
 -
  version: 1.5.10
  date: July 12th, 2018
  description: Only print first 12 chars of instance ids. Autoconnect to instance on 'we shell' when only one instance is running. Minor improvements.
 -
  version: 1.5.9
  date: July 8th, 2018
  description: Added 'we list instances' command. Improved instance support. Minor improvements.
 -
  version: 1.5.8
  date: July 4th, 2018
  description: Fixed deployment upload failure feedback. Minor improvements.
 -
  version: 1.5.7
  date: June 28th, 2018
  description: Fix processing flags on command 'we new project'. Minor improvements.
 -
  version: 1.5.6
  date: June 22nd, 2018
  description: Adding support to upcoming environment feature. Fixed flags on 'we new'. Minor improvements.
 -
  version: 1.5.5
  date: June 20th, 2018
  description: Show current number of deployed instances on 'we scale' and ask for service before prompting for number of instances on change.
 -
  version: 1.5.4
  date: June 19th, 2018
  description: Improving error messages. Minor improvements.
 -
  version: 1.5.3
  date: June 19th, 2018
  description: Minor improvements.
 -
  version: 1.5.2
  date: June 15th, 2018
  description: Print friendly status text errors on API errors.
 -
  version: 1.5.1
  date: June 15th, 2018
  description: Improved output colors for requests when using --verbose. Minor improvements.
 -
  version: 1.5.0
  date: June 13th, 2018
  description: Added the --skip-progress flag to 'we deploy' and changed --quiet behavior to make it wait until deployment is finished.
 -
  version: 1.4.10
  date: June 12th, 2018
  description: Fix 'we deploy' for Windows users whose usernames contains spaces. Minor improvements.
 -
  version: 1.4.9
  date: May 30th, 2018
  description: Fixing panic when using 'we deploy --quiet'. Fixing 'we login' when using Git bash for Windows.
 -
  version: 1.4.8
  date: May 18th, 2018
  description: Added support for piping username and password for 'we login'. Minor improvements.
 -
  version: 1.4.7
  date: May 13th, 2018
  description: Improved user experience when running 'we deploy'. Minor improvements.
 -
  version: 1.4.6
  date: May 8th, 2018
  description: Added support for using custom timezones (with environment variable TZ). Added support for deploying Git repositories. Fixing missing 'error counter'. Minor improvements.
 -
  version: 1.4.5
  date: May 4th, 2018
  description: Added release notes. Added timestamsp to 'we log'.
 -
  version: 1.4.4
  date: Mar 30th, 2018
  description: Added 'we shell' command.
 -
  version: 1.4.2
  date: Mar 6th, 2018
  description: Renaming 'we env' with 'we env-var'. Stop allowing dashes on service ids. Minor improvements.
 -
  version: 1.4.1
  date: Mar 6th, 2018
  description: Minor improvements.
 -
  version: 1.4.0
  date: Mar 6th, 2018
  description: Making 'we scale' work with no required arguments. Minor improvements.
 -
  version: 1.3.5
  date: Feb 22nd, 2018
  description: Fixing issue where nested services would be identified as services for the CLI. Fix skipping directories that have any files on the .gitignore list (instead of only the file itself). Minor improvements.
 -
  version: 1.3.4
  date: Jan 15th, 2018
  description: Fixed issue where deployment might never seem to terminate on CLI due to metadata type mismatch. Minor improvements.
 -
  version: 1.3.3
  date: Jan 14th, 2018
  description: Validate wedeploy.json before trying to deploy. Added prompt for selecting or creating a project id on `we deploy`. Added commands `we list projects` and `we list services`. Added the --no-tty flag to make it easier to use the CLI programmatically. Minor improvements.
 -
  version: 1.3.2
  date: Jan 13th, 2018
  description: Improved error messages on malformed wedeploy.json. Fixing bug on setting two environment variables at once. Added --replace flag to `we env set`. Minor improvements.
 -
  version: 1.3.1
  date: Jan 12th, 2018
  description: Added support to applying environment variables from a file on `we env set`. Minor improvements.
 -
  version: 1.3.0
  date: Jan 12th, 2018
  description: Improved user experience for the `we env` and `we domain` commands. Minor improvements.
 -
  version: 1.2.9
  date: Jan 9th, 2018
  description: Added prompt to verify project creation on `we deploy`. Improved removal protection, making you type the project or service name of the resource you want to remove on `we delete`. Minor improvements.
 -
  version: 1.2.8
  date: Jan 5th, 2018
  description: Added protection to avoid deploying content in sensitive directories such as the home directory. Minor improvements.
 -
  version: 1.2.7
  date: Jan 2nd, 2018
  description: Added prompt for projects and services on most commands. Added `we new` and `we open` commands. Minor improvements.
 -
  version: 1.1.5
  date: Oct 14th, 2017
  description: Don't ask for authentication on `we console`. Minor improvements.
---
