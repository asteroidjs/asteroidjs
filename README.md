# ASTEROID JS

**METEOR ON STEROIDS.**

Open-source platform to built fast, real-time, and scalable web, mobile, and desktop progressive applications. As we're going more profesional, it enable the most advanced web innovations and permits to develop powerful apps.

This project is designed to showcase the exact same functionality as Meteor, but **without the monolithic structure**. It trades a little simplicity **for a lot of flexibility & performances**.

![](https://github.com/asteroidjs/branding/blob/master/logo/LOGO%20TEXT%202048.png?raw=true)

| Problem | METEOR's solution | ASTEROIDJS's solution | Result |
|---|---|---|---|
| Database | [MongoDB](https://www.mongodb.org/) | [RethinkDB](https://www.rethinkdb.com/) + [Redis](https://redis.io/) + ? | Built in real-time and for scalability. |
| Database schema | [Simple Schema](https://github.com/aldeed/meteor-simple-schema) | [GraphQL](https://github.com/graphql/graphql-js) | Simple & powerfull. |
| Client validation | [Simple Schema](https://github.com/aldeed/meteor-simple-schema) | [Joi](https://github.com/hapijs/joi) | Clean API for client validation, although the package is HUGE. |
| Database hooks | [Collections2](https://github.com/aldeed/meteor-collection2) | [GraphQL](https://github.com/graphql/graphql-js) | GraphQL is overkill for small apps. |
| Forms | [AutoForm](https://github.com/aldeed/meteor-autoform) | [redux-form](https://github.com/erikras/redux-form) | State tracking awesomeness that works beautifully with react. |
| Client-side cache | [Minimongo](https://www.meteor.com/mini-databases) | [redux](http://redux.js.org/) | Bonus logging, time traveling, and undo functionality. |
| Client-side DB | [Minimongo](https://www.meteor.com/mini-databases) | [pouchDB](https://pouchdb.com/) | Keep sync, asynchronous, big storage |
| Socket server | [DDP-server](https://www.meteor.com/ddp) | [socketcluster](http://socketcluster.io/#!/)                        | super easy scaling, pubsub, auth, middleware. |
| Usual authentication | Meteor accounts | [JWTs](https://jwt.io) | JWTs can also serve to authorize actions, too. |
| Specific authentication | Custom | Encrypted keys or tokens | Post-quantum encryption is recommended |
| Auth-transport | [DDP](https://www.meteor.com/ddp) | GraphQL (via HTTP) or using websocket | Don't use sockets until you need to. |
| Front-end | [Blaze](https://www.meteor.com/blaze) | [React](https://facebook.github.io/react/) | Vdom, **server-side rendering**, async router, etc... |
| Build system | Meteor | [webpack](https://webpack.github.io/) | Using webpack inside meteor is very limited. |
| CSS | magically bundle & serve | [css-modules](https://github.com/css-modules/css-modules) | component-scoped css with variables available in a file or embedded. |
| Optimistic UI | latency compensation | [redux-optimistic-ui](https://github.com/mattkrick/redux-optimistic-ui)  | Makes your app feel faster. |
| Testing | Velocity (or nothing at all) | [AVA](https://github.com/sindresorhus/ava) | Awesome es2016 concurrent testing. |
| Linting | Your choice | [xo](https://www.npmjs.com/package/xo) | No dotfiles, fixes errors. |
| Routing | [FlowRouter](https://github.com/kadirahq/flow-router) | [react-router-redux](https://github.com/reactjs/react-router-redux) | Stick the route in the state, react-router SSR, async routes. |
| Server | Node 6 | Node 8 | Faster. |
| Deployment | Custom | [Cordova](https://cordova.apache.org/) + [Crosswalk](https://crosswalk-project.org/) | Powerful, consistent, stable, and industrial. |    

Highly modulable, you can change the database or replace any techology above.

# License

MIT License

Copyright (c) 2017 ASTEROIDJS

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
