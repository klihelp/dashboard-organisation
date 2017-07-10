# Dashboard

A dashboard for a quick overview of a Github *organisation* or *user*.


## Usage & Deployment

depending on whether you would like to use the dashboard for a Github organisation or a Github user you have to declare one of the following *environment variable*.

- `REACT_APP_ORGANISATION`: ex, `internet4000` [github.com/internet4000](http://github.com/internet4000/)
- `REACT_APP_USER`: ex, `hugurp` [github.com/hugurp](http://github.com/hugurp/)

Note: there are [other ways](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables) to declare the needed evironment variable.

As explained on the create-react-app [documentation](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables):

> The environment variables are embedded during the build time. Since Create React App produces a static HTML/CSS/JS bundle, it can’t possibly read them at runtime. To read them at runtime, you would need to load HTML into memory on the server and replace placeholders in runtime, just like described here. Alternatively you can rebuild the app on the server anytime you change them.

*Therefore, be sure to rebuild your app if you change these environment variables.* Otherwise, you'll get some weird behavior.


## Deployment

The easiest way to use this project with your data is to fork this repo and deploy it to [http://netlify.com](http://netlify.com).

You can of course use any other static host.

Quick alternatives (one click):

- deploy to [Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/internet4000/dashboard-organisation)

## Development

You are wecome to contribute, fork and reuse the code.


```
// develop
yarn start // npm start

// build for production
yarn run build // npm run build

// test
yarn test // npm run test
```


## Known issues

[Github API rate limit](https://developer.github.com/v3/#rate-limiting) can easily be reached while in development.


## Docs

Generator: [Create React App](https://github.com/facebookincubator/create-react-app).
