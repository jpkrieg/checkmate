TODO - once I've nailed down the structure I need to write some scripts to build and run in both debug and production contexts.

I think I'm close with the server/ and client/ structure I currently have

in server/ run `npm run server` and in client/ run `npm run start`

https://stackoverflow.com/questions/45912655/package-json-for-server-and-client
Restructure to use only one package.json

`sudo service mongodb start`
`mongo`
`> show dbs`


See diagram in the overview section of https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes

Replace db URI with .env call