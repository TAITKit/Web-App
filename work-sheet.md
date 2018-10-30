# Work Sheet

## Objective

A web as app, with ajax as request

Functions:
- User login 
- Provide services
  - (web) Execute in the app, with flexible documentation/input/output (generated from json) UI
  - (server) Provide web api, like `https://url/api/discourse?text=...` 
  - For example: [facebook graph api](https://developers.facebook.com/docs/graph-api/reference/v3.2/post)
- Register new user
- Register new services
- Exec the java service

## Issue

- Service type
  - Small or large request(data) ?
  - Affects API design
  - Small: input one test data, simple and fast response
  - Large: complex but able to input a dataset and wait for response (possible hours or days)
  - Facebook like: small request (Ex. input is a person id)

## Architecture

### Web (UI)

#### [Vue.js]: Rendering whole website/UI
- Progressive framework
  - Data/form/text ... binding for ordinary web
  - Build Single Page App by vue-router
  - etc

#### [Nuxt.js]: Server side rendering with Vue.js
- Also with many other features intergrated

### Server

#### [Koa.js]: Hold a web server
- Language: [nodejs]
- Minimal web server but with flexible extenable packages (middleware)
  - Cookie management
  - login management (DB, gmail, FB ...)
  - etc

### Working Flow

1. A user opens the url in a browser on any platform
2. The server ([Koa.js]) sends a javascript generated web ([Vue.js]) to the user
3. The user uses the web as an app
4. The user clicks a link like "submit", [Vue.js] converts it into [ajax](https://zh.wikipedia.org/wiki/AJAX) request
5. The server receives the request, processes the request (exec ...), and sends the result to the user
6. [Vue.js] shows the data from server to the user

In fact, since we are using [Nuxt.js], javascript generated web is a server-pre-rendered html (server side rendering) with some other javascript.

### Api

#### Normal

| Url | Method | Description | Parameter | Format | Note |
|-----|--------|-------------|-----------|--------|------|
| https://url/\* | `GET` | Get javascript generated web |  | web |
| https://url/login | `POST` | User login  | Y | json/cookie |

#### App - Quick Web API

| Url | Method | Description | Parameter | Format | Note |
|-----|--------|-------------|-----------|--------|------|
| https://url/api/:name | `POST` | Make a small task of the app 'name' | Y/body as file | json/cookie |

#### Resources

- App
  - 12 types of information
- Task
  - App id
  - Status (running, done, error ...)
  - Multiply file id (input, output, test ...)
- User
  - Name
  - Role (normal user / app holder)
- File 
  - Enable if need to input large dataset
  - Is uploaded
  - File path in server (hide from user)

For example:

| Url | Method | Description | Parameter | Format | Note |
|-----|--------|-------------|-----------|--------|------|
| https://url/app | `GET` | Get brief information of all apps |  | json |
| https://url/app | `POST` | Register a new app |  | json |
| https://url/app/:id | `GET` | Get detailed information of a app (id) |  | json |
| https://url/app/:id | `POST` | Modify the app (id) |  | json |
| https://url/app/:id | `DELETE` | Delete (disable) the app (id) |  | json |

In particular:

| Url | Method | Description | Parameter | Format | Note |
|-----|--------|-------------|-----------|--------|------|
| https://url/task | `GET` | Get all tasks of a user | | json |
| https://url/task | `POST` | Submit a task of a app | json | Y | json |
| https://url/task/:id | `GET` | Get input/output of a task (id) | | json | Contains url to file |
| https://url/file/:id | `GET` | Download a file (id) | | file |
| https://url/file/:id | `POST` | Upload a file (id) | | json |

[Vue.js]: https://vuejs.org
[Nuxt.js]: https://nuxtjs.org
[Koa.js]: https://koajs.com
[nodejs]: https://nodejs.org
