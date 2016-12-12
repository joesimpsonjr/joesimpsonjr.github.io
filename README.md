# joesimpsonjr.github.io
Welcome to my repository. Here you’ll find information on Open Source projects, course homework and more that I am working on and would like to share. Interested in finding our more, just use my screen name, *joesimpsonjr*, on social media (@facebook.com, @twitter, etc) or via email at @gmail.com.

##Coursework
####General Assembly
* **Javascript Development** - November 8, 2016 - January 31, 2017
  * [Unit Project #1: Slackbot](#unit-project-1-slackbot)
* **Front-End Web Development 2016** - December 6, 2014 - February 14, 2015
* **Front-End Web Development** - December 6, 2014 - February 14, 2015
* **Intermediate WordPress Bootcamp** - December 5, 2015
* **An Introduction to PHP** - October 28, 2015
* **Introduction to Agile Development Process** - October 20, 2015
* **The Write Stuff: Creating Blog Content That Connects and Converts** - October 8, 2015

##Course Projects
###Unit Project #1: Slackbot
####Project Brief
Over the past two General Assembly Javascript Development classes we leveraged *Slack*, a tool used to communicate amongst ourselves, to build our own Slackbot (referred to as bot henceforth) to add an element of interaction to chat sessions. We used *Hubot*, a framework built by GitHub to do this work for us.

> NOTE: In my office, we have bots that notify our team whenever a website build runs on our *Amazon Web Services* servers so I was aware that it could be done, but didn’t know the how.

#### Toolbox
<img src="https://slack.com/img/slack_hash_128.v1464126652.png" width="100" height="100" Title="Slack"/>
<img src="http://saasiter.com/img/services/heroku.png.pagespeed.ce.VI9m2NmQL2.png" data-canonical-src="http://saasiter.com/img/services/heroku.png.pagespeed.ce.VI9m2NmQL2.png" width="100" height="100" Title="Heroku"/>
<img src="http://wegeeks.us/assets/coffeescript_logo-553d0e0b9fc0a816ef444280eeabc84d.png" width="100" height="100" Title="CoffeeScript"/>
<img class="git" src="http://www.plusdoption.com/lib/img/all/github-logo.png" width="133" height="90" Title="GIT"/>
<img src="http://javascript-html5-tutorial.com/wp-content/uploads/2016/08/yeoman-tool.png" width="90" height="90" Title="Yeoman"/>

* Terminal
* Hubot
* Heroku
* CoffeeScript
* GIT; and
* Yeoman

#### Building the Bot
Slackbot construction, like any DIY job, takes some planning and execution. You need to:

1. Register/create a profile on *Heroku*. Apps built with it are managed from the command line. what does Heroku is a Cloud Development Platform whose parent company is owned by Salesforce.
2. Created a directory to host the bot by using ```$ mkdir myhubot```
3. Inside that directory, install *Hubot* and its dependencies listed above. In my case, I had to use the sudo command to install as an administrator
4. After prompt, name and describe your bot
5. Once generated, test your bot to make sure its online by using
6. ```HUBOT_SLACK_TOKEN=TOKEN-GOES-HERE ./bin/hubot --adapter slack```  (using the Slackbot API Key - classes worked in groups of 2 or 3 sharing the API)

#### Jobot at Your Command
With Jobot up and running, I programmed basic interaction by leveraging Javascript to get the bot to listen for specific phrases and respond. We learned how to utilize wildcards and expressions as well.

#### Unsolved Mysteries
In my experience, the process what pretty simple and seamless. My issues were:
* ```.respond``` - I had some issues with whether mentions triggered the desired effect.
* ```.expressions``` - had to modify the code to get the desired effect

#### Best Practices and Next Steps
My most important takeaway was is get as much exposure with what others have done as a reference, inspiration and resource. Pseudocode as much of this inspiration as possible to get you started as well.

#### More Candy
* [Slack Is Overrun With Bots. Friendly, Wonderful Bots](https://www.wired.com/2015/08/slack-overrun-bots-friendly-wonderful-bots/)
* [How I built a Slack bot to help me find an apartment in San Francisco](https://www.dataquest.io/blog/apartment-finding-slackbot/)
* [Slackbot: personal assistant and helpful bot](https://get.slack.help/hc/en-us/articles/202026038-Slackbot-personal-assistant-and-helpful-bot-)
* [Bot Users](https://api.slack.com/bot-users)
