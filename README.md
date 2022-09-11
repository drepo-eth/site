# dRepo Website

This site describes what a dRepo is and why they are important.
The site is static and can be hosted anywhere.
However, the official domain is [drepo.eth] and it is hosted on IPFS.

The project is based on [hugo](https://gohugo.io/) but disables some features
as we just want to produce a couple of pages that act more like a book than a
fully fledged cms driven website.

Note: hugo extended is used for SASS integration and such.

## Development

NPM is used for dependency management. Thus the build is actually triggered by
using `npm`.

### Build

```sh
npm run build
```

this produces a `public` directory that holds the rendered static site and can
be used for deployments.

### Creating new stuff

```sh
npm run new
```

is an "alias" for `hugo new`. Thus it should be used to create new pages and
such.

### Development Server

```sh
npm run server
```

starts hugo's development server `hugo server` with the flag to include drafts.
Using this server the site automatically refreshes when there are changes to
code or content.
