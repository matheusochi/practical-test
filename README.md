# Pratical Test

> Search GitHub users and see their repositories. Project made for a selection process. 

See the [demo](http://pratical-test.surge.sh)

## Technologies
This project uses Angular (7.2), and fetch the data from [GitHub API](https://developer.github.com/v3/). The users table is made with Angular Material, the main reason I chose to use it, is the datasource technology, which makes tables implementation a lot easier.

## Installing
In order to run the project, you will need to install some "libraries", so make sure you have [npm](https://nodejs.org/en/), and [Angular CLI](https://angular.io/guide/setup-local) installed in your environment.

Run `npm install`

Into `src/environments`, copy `environment.default.ts` to `environment.ts`, to run this project you'll also need to generate an OAuth token from [GitHub API](https://developer.github.com/v3/oauth_authorizations/), then you can paste it into the token property in the environment file.

## Development
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Goodbye

That's it. Leave a star if you liked.
