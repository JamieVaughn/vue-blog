# VuePress Yield Star Blog 

- Visit here: [Blog](https://wjv.io/blog)

Talks about frontend development with Vanilla Javascript and React
- functional programming topics
- Established FP patterns
- Code implementations
- Conceptual explanations
- Articles for Frontend students
- A few original proposed frontend patterns

## Features

- Write posts in Markdown
- Basic pagination sorted by most recent posts
- Ability to search for posts via headings within the post
- Archived posts page
- Basic scheduling for future publishing
- Basic tagging for posts
- Automatic RSS feed generation
- Easily integrate Google Analytics

## Getting Started on local development

### Installation
- [NodeJS >= 8](https://nodejs.org/)
- [yarn](https://yarnpkg.com/lang/en/docs/install/) (Recommended)

clone repo

```bash

# Change directory into project
cd <dir>

# Install dependencies
yarn

# Run local server
yarn dev
```

You should now be able to visit [http://localhost:8080](http://localhost:8080)!


## Git Push & Deployment with Travis CI

The Local repo contains the development platform for Vuepress where all changes to posts/styles/etc are to be made. To check that the Travis CI deployment will be successful, first, in your dev branch, be sure to run 
```
npm run docs:build
```
Correct any errors here before pushing.

When satisfied with changes you must `git push --force` if on master or `git push origin dev` if on dev branch. to trigger Travis CI to rebuild the branch and deploy it to Github pages. Do not `git pull` from origin as that will pull down only the built `/dist` folder contents that Travis CI deployed last.

## Documentation

To check out the boilerplate tutorial and docs, check out [the guide](https://vuepress-blog-boilerplate.bencodezen.io/).

This uses [VuePress](https://vuepress.vuejs.org) to power the blogging platform.