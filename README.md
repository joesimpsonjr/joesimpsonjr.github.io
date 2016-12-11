# joesimpsonjr.github.io
Welcome to my repository. Here you’ll find information on Open Source projects, course homework and more that I am working on and would like to share. Interested in finding our more, just use my screen name, *joesimpsonjr*, on social media (@facebook.com, @twitter, etc) or via email at @gmail.com.

Projects | Description | Type/Tools
-------- | ----------- | ----
**Voime** | General Assembly Front-End Web Development Fall 2015 Final Course Project. Rail Car Illustration (CSS Animation); Parallax Images; HTML 5 Video | Website
**Tiffany Rail Anniversary Numerals** | SVG web font form Adobe Illustrator, Font Squirrel and Glyphs | Web Icon Font
**More Expo Trip Planner Form** | Proposed embeddable form | CSS/HTML
[**Star Trek 50th Anniversary**](https://s3-us-west-2.amazonaws.com/bonustreks/index.html) | General Assembly Front-End Web Development Fall 2016 | Bootstrap, jQuery libraries, Amazon Web Services, GitHub
**JavaScript Development** | General Assembly Fall/Winter 2016 | Ira Herman Instructor

## WordPress Development
* Original Theme
* Custom Post Types
* Child Theming

## Bootstrap Solutions
Bootstrap v3 and v4 for forms, menus, tooltips, responsive templating

# Unit Project #1: Slackbot
**Project Brief**
Over the past two General Assembly Javascript Development classes we leveraged *Slack*, a tool used to communicate amongst ourselves, to build our own Slackbot (referred to as bot henceforth) to add an element of interaction to chat sessions. We used *Hubot*, a framework built by GitHub to do this work for us.

> NOTE: In my office, we have bots that notify our team whenever a website build runs on our *Amazon Web Services* servers so I was aware that it could be done, but didn’t know the how.

### Toolbox
<img src="http://saasiter.com/img/services/heroku.png.pagespeed.ce.VI9m2NmQL2.png" data-canonical-src="http://saasiter.com/img/services/heroku.png.pagespeed.ce.VI9m2NmQL2.png" width="100" height="100" Title="Heroku"/>
<img src="http://wegeeks.us/assets/coffeescript_logo-553d0e0b9fc0a816ef444280eeabc84d.png" width="100" height="100" Title="CoffeeScript"/>
<img src="http://www.driveplayer.com/third-party/github-logo/github-logo.png" width="100" height="100" Title="GIT"/>
<img src="http://javascript-html5-tutorial.com/wp-content/uploads/2016/08/yeoman-tool.png" width="100" height="100" Title="Yeoman"/>

* Terminal
* Hubot
* Heroku
* CoffeeScript
* GIT; and
* Yeoman


### Building the Bot
Slackbot construction, like any DIY job, takes some planning and execution. You need to:
* Register/create a profile on *Heroku*. Apps built with it are managed from the command line. what does Heroku is a Cloud Development Platform whose parent company is owned by Salesforce.
  1. Created a directory to host the bot by using $ mkdir myhubot
  2. Inside that directory, install *Hubot* and its dependencies listed above. In my case, I had to use the sudo command to install as an administrator
  3. After prompt, name and describe your bot
  4. Once generated, test your bot to make sure its online by using
  5. HUBOT_SLACK_TOKEN=TOKEN-GOES-HERE ./bin/hubot --adapter slack  (using the Slackbot API Key - classes worked in groups of 2 or 3 sharing the API)
### Jobot at Your Command
With Jobot up and running, I programmed basic interaction by leveraging Javascript to get the bot to listen for specific phrases and respond. We learned how to utilize wildcards and expressions as well.
### Unsolved Mysteries
In my experience, the process what pretty simple and seamless. My issues were:
* RESPOND - I had some issues with whether mentions triggered the desired effect.
* EXPRESSIONS - had to modify the code to get the desired effect
### Best Practices and Next Steps
My most important takeaway was is get as much exposure with what others have done as a reference, inspiration and resource. Pseudocode as much of this inspiration as possible to get you started as well.
### More Candy
[*Slack* Is Overrun With Bots. Friendly, Wonderful Bots](https://www.wired.com/2015/08/slack-overrun-bots-friendly-wonderful-bots/)
[How I built a Slack bot to help me find an apartment in San Francisco](https://www.dataquest.io/blog/apartment-finding-slackbot/)
[*Slackbot:* personal assistant and helpful bot](https://get.slack.help/hc/en-us/articles/202026038-Slackbot-personal-assistant-and-helpful-bot-)
[*Bot Users*](https://api.slack.com/bot-users)
