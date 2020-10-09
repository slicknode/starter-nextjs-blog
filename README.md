# Slicknode NextJS Blog Starter

This is a simple blog site to get you started with [NextJS](https://nextjs.org) and [Slicknode](https://slicknode.com). It has a very minimal setup that you can easily customize and extend. 


## Installation

Clone the repository and install all dependencies:

    yarn

Then run the setup script:

    yarn setup

This will create a new Slicknode project with, GraphQL API and the GraphQL endpoint will be added to your local configuration. Just follow the instructions on the screen.
You might be asked to enter your Slicknode credentials. If you don't have an account yet, you can [sign up for free here](https://slicknode.com).

Start the local development server and start hacking:

    yarn dev

For more information how to build NextJS applications, check out [the official NextJS docs](https://nextjs.org/docs).


## Customizing Data Model

Install the [Slicknode CLI](https://www.npmjs.com/package/slicknode) globally if you don't already have it installed on your computer:

    npm install -g slicknode@latest

The Slicknode modules with the data model are located in [modules/](./modules/). To change and extend the data model, open the schema file of the blog module [modules/blog/schema.graphql](./modules/blog/schema.graphql), add your changes and redeploy your
project to the Slicknode cloud:

    slicknode deploy

Check out the [Slicknode documentation](https://slicknode.com/docs/data-modeling/introduction/) for more information on how to model your data, create your own modules, etc.


## Static Site Export

To generate a static site export of your site to deploy to the web via S3, Netlify etc:

    yarn export

This will generate a static version of your site in the folder `export/`.


## Run Production Server

If you need server-side rendering instead of static site export (for example for automatic rebuild of pages), first create a build and then start the server:

    yarn build

Start web server:

    yarn start
