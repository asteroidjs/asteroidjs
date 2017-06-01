# ASTEROID JS

**METEOR ON STEROIDS.**

Open source platform to built fast, real-time, and scalable web, mobile, and desktop progressive applications.

This project is designed to showcase the exact same functionality as Meteor, but **without the monolithic structure**. It trades a little simplicity **for a lot of flexibility & performances**.

![](https://github.com/asteroidjs/branding/blob/master/logo/LOGO%20TEXT%202048.png?raw=true)

| Problem | METEOR's solution | ASTEROIDJS's solution | Result |
|---|---|---|---|
| Database | [MongoDB](https://www.mongodb.org/) | [RethinkDB](https://www.rethinkdb.com/) | Built in real-time and scalability. |
| Database schema | [Simple Schema](https://github.com/aldeed/meteor-simple-schema) | [GraphQL](https://github.com/graphql/graphql-js) | Simple & powerfull. |
| Client validation | [Simple Schema](https://github.com/aldeed/meteor-simple-schema) | [Joi](https://github.com/hapijs/joi) | Clean API for client validation, although the package is HUGE. |
| Database hooks | [Collections2](https://github.com/aldeed/meteor-collection2) | [GraphQL](https://github.com/graphql/graphql-js) | GraphQL is overkill for small apps. |
| Forms | [AutoForm](https://github.com/aldeed/meteor-autoform) | [redux-form](https://github.com/erikras/redux-form) | State tracking awesomeness that works beautifully with react. |
| Client-side cache | [Minimongo](https://www.meteor.com/mini-databases) | [redux](http://redux.js.org/) | Bonus logging, time traveling, and undo functionality. |
| Socket server | [DDP-server](https://www.meteor.com/ddp) | [socketcluster](http://socketcluster.io/#!/)                        | super easy scaling, pubsub, auth, middleware. |
| Authentication | Meteor accounts | [JWTs](https://jwt.io) | JWTs can also serve to authorize actions, too. |
| Auth-transport | [DDP](https://www.meteor.com/ddp) | GraphQL (via HTTP) or using websocket | Don't use sockets until you need to. |
| Front-end | [Blaze](https://www.meteor.com/blaze) | [React](https://facebook.github.io/react/) | Vdom, **server-side rendering**, async router, etc... |
| Build system | Meteor | [webpack](https://webpack.github.io/) | Using webpack inside meteor is very limited. |
| CSS | magically bundle & serve | [css-modules](https://github.com/css-modules/css-modules) | component-scoped css with variables available in a file or embedded. |
| Optimistic UI | latency compensation | [redux-optimistic-ui](https://github.com/mattkrick/redux-optimistic-ui)  | Makes your app feel faster. |
| Testing | Velocity (or nothing at all) | [AVA](https://github.com/sindresorhus/ava) | Awesome es2016 concurrent testing. |
| Linting | Your choice | [xo](https://www.npmjs.com/package/xo) | No dotfiles, fixes errors. |
| Routing | [FlowRouter](https://github.com/kadirahq/flow-router) | [react-router-redux](https://github.com/reactjs/react-router-redux) | Stick the route in the state, react-router SSR, async routes. |
| Server | Node 6 | Node 8 | Faster. |     

Highly modulable, you can change the database or replace any techology above.

## Installation

Comming soon.

## Tutorials

 * [A production-ready realtime SaaS with webpack](https://medium.com/@matt.krick/a-production-ready-realtime-saas-with-webpack-7b11ba2fa5b0#.bifdf5iz8)
 * [GraphQL Field Guide to Auth](https://medium.com/@matt.krick/graphql-field-guide-to-auth-ead84f657ab#.f3tg2sf3d)


## Contributing

Pull requests welcomed!
