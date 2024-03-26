# ADF/APS Application with Angular CLI

this is created specifically for contract lifecycle management.

if you'd like to create a docker image of compiled app, use:

docker build -t <imagename:tag>  .
docker run --name adfapacontracts -d -p 4200:80 <imagename:tag>

## PreReqs

have node 9.x and angular 16.x installed.  then proceed to quick start

## Process Flow

the process starts at the dashboard after logging in. there's an interval timer to auto update data used throughout; however, this may need some tweaking as of 9-6-2023.

ChartJS is used to display the doughnut chart..clicking invokes a mat table that shows data gathered from rest api call.  The code as all the queries for each data category (like new, in progress, 30 days expiration, etc...)


Minimal ready-to-use Angular CLI project template pre-configured with ADF components.

## Quick start

```sh
npm install
npm start
```

## Supported ADF component libraries

This project has all the existing ADF component libraries already pre-configured.

The main focus of the project is:

- ADF integration and setup
- Basic demonstration of working components

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Proxy settings

The template provides certain proxy settings to allow running web application locally without CORS setup.
You can find details in the `proxy.conf.json` file.

List of URLs being proxied:

- `/` -> `http://0.0.0.0:9999`
- `/auth/realms/myrealm` -> `http://0.0.0.0:9999/YOUR_OAUTH_HOST`
- `/auth/admin/realms/myrealm` -> `http://0.0.0.0:9999/
YOUR_IDENTITY_HOST`
- `/alfresco` -> `http://0.0.0.0:8080`

## Code scaffolding

Run `ng generate component component-name -m app.module` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

