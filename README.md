<h1 style="text-align:center;">Discord Trial Bot</h1>

## Features

* This bot will add a "TRIAL" role to users who command /trial in the channel. The bot will wait for a limited amount of time (30s in this app), and after that the bot will remove the ROLE from the user.

## Installation

Clone the repository then create a file named `.env` and fill it out accordingly

```js
TOKEN=
CLIENT_ID=APPLICATION_CLIENT_ID
PREFIX=!
MONGO_URI=
MONGO_DATABASE_NAME=
ROLE_ID=ROLE_ID_FOR_TRIAL_ROLE
CHANNEL_ID=CHANNEL_ID
```

Build the project using the typescript module and start the bot using the `npm start` command
