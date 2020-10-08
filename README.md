# Slicknode NextJS Blog Starter

This is a simple blog site to get you started with NextJS and Slicknode. It has a very minimal setup that you can easily customize and extend. 


## Installation

Install the [Slicknode CLI](https://www.npmjs.com/package/slicknode) if you don't already have it installed on your computer:

    npm install -g slicknode@latest

Clone the repository and install all dependencies:

    git clone https://github.com/slicknode/starter-nextjs-blog.git
    yarn

Deploy the Slicknode project to the Slicknode cloud so you can add content to your blog with the Slicknode console. You need to enter your Slicknode credentials. If you don't have an account yet, you can [sign up for free here](https://slicknode.com).

    slicknode deploy

Open the Slicknode console and add a blog post:

    slicknode console

Now get the GraphQL endpoint of your Slicknode project:

    slicknode endpoint

Add the value to the file [src/.env](./src.env), for example:

    NEXT_PUBLIC_SLICKNODE_ENDPOINT=https://api.us-east-1.aws.slicknode.com/v1/yourproject

Start the local development server:

    yarn dev

This starts the local dev server with hot reload etc. and you can start making changes. 


# Customizing Data Model

The Slicknode modules with the data model are located in [modules/](./modules/). To change and extend the data model, just open the schema file of the blog module [modules/blog/schema.graphql](./modules/blog/schema.graphql), add your changes and redeploy your
project to the Slicknode cloud:

    slicknode deploy

Check out the [Slicknode documentation](https://slicknode.com/docs/data-modeling/introduction/) for more information on how to model your data, create your own modules, etc.


## Static Site Export

To generate a static site export of your site to deploy to the web via S3, Netlify etc:

    yarn export

This will generate a static version of your site in the folder `export/`.


## Run Production Server

If you need server-side rendering (for example for automatic rebuild of pages), first create a build and then start the server:

    yarn build

Start web server:

    yarn start
