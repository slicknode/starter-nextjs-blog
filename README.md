# Slicknode NextJS Blog Starter

This is a simple blog site to get you started with [NextJS](https://nextjs.org) and [Slicknode](https://slicknode.com). It has a very minimal setup that you can easily customize and extend.

## Installation

Clone the repository and install all dependencies:

    npm install

Then run the setup script:

    npm run setup

This will create a new Slicknode project with, GraphQL API and the GraphQL endpoint will be added to your local configuration. Just follow the instructions on the screen.

Start the local development server and start hacking:

    npm run dev

For more information how to build NextJS applications, check out [the official NextJS docs](https://nextjs.org/docs).

## Customizing Data Model

Install the [Slicknode CLI](https://www.npmjs.com/package/slicknode) globally if you don't already have it installed on your computer:

    npm install -g slicknode@latest

The Slicknode modules with the data model are located in [modules/](./modules/). To change and extend the data model, open the schema file of the blog module [modules/blog/schema.graphql](./modules/blog/schema.graphql), add your changes and redeploy your
project to the Slicknode cloud:

    slicknode deploy

Check out the [Slicknode documentation](https://slicknode.com/docs/data-modeling/introduction/) for more information on how to model your data, create your own modules, etc.

## Preview Mode

To load content in preview mode, visit the URL `/api/preview` in your browser. This will set a cookie and enable
the preview mode for the duration of the browser session. The Slicknode API will then return all content from the
preview stage.

**Securing Preview Mode:**

To secure the preview mode, set a secret via the env variable `PREVIEW_SECRET_TOKEN` in the process that runs the
server. ([See the next.js docs](https://nextjs.org/docs/basic-features/environment-variables))

With the `PREVIEW_SECRET_TOKEN` set, you have to pass the secret to the preview URL to enable the preview mode. For example: `/api/preview?secret=xyz123`.

## Static Site Export

To generate a static site export of your site to deploy to the web via S3, Netlify etc:

    npm run export

This will generate a static version of your site in the folder `out/`.

## Run Production Server

If you need server-side rendering instead of static site export (for example for automatic rebuild of pages), first create a build and then start the server:

    npm run build

Start web server:

    npm start
