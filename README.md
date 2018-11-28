# taitk-web-app

> Tai Toolkit web app

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
# serve with hot reload at localhost:3000
# but ajax on url instead of localhost
$ npm run dev-server

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Scheme

### App
```javascript
app = {
  name: {
    brief: '<BRIEF NAME>',
    full: '<FULL NAME>',
    funtional: '<FUNTIONAL NAME>',
    bind: '<BIND NAME>'
  },
  author: {
    people: ['<PEOPLE_1>', ...], // or key to user
    units: ['<UNIT_1>', ...] // or key to user
  },
  categories: ['<CATEGORY_1>', '<CATEGORY_2>'],
  tags: ['<TAG_1>', ...],
  description: {
    text: '<LONG_DESCRIPTION_TEXT>',
    links: [
      { url: '<GITHUB>', 'description': 'Github' },
      { url: '<PAPER>', 'description': 'Paper' },
      ...
    ]
  },
  meta: {
    references: [
      { name: '<SOURCE_NAME>', url: '<SOURCE_URL>' },
      { name: '<REFERENCE_NAME>', url: '<REFERENCE_URL>' }
    ],
    envrioment: {
      platforms: ['<OS>'],
      language: ['<PROG_LANG>'],
      packages: ['<PACKAGE_1>']
    }
  },
  format: {
    configs: [
      { name: '<NAME>', type: '<TYPE>', default: '<VALUE>', description: '<DESCRIPTION>' },
      ...
    ],
    inputs: [
      { name: '<NAME>', type: '<TYPE>', default: '<VALUE>', description: '<DESCRIPTION>' },
      ...
    ],
    outputs: [
      { name: '<NAME>', type: '<TYPE>', default: '<VALUE>', description: '<DESCRIPTION>' },
      ...
    ]
  }
}
```

## Trouble Shooting
### Run server under Mac OSX [server app](https://www.apple.com/tw/macos/server/)
[solution](https://apple.stackexchange.com/questions/151388/can-i-deploy-my-django-site-to-os-x-server)
Since server app is not compatible with external web app (java, node, other python program ...), we have to configure manually
Create `/Library/Server/Web/Config/apache2/other/web_app.conf`, and write

```
Listen *:2999
<VirtualHost *:2999>
        ServerName your.site
        ServerAdmin your@mail
        ProxyPass         /         http://localhost:3000/
        ProxyPassReverse  /         http://localhost:3000/
        ProxyPreserveHost On
</VirtualHost>
```

Restart Mac OSX server website service, and the web app is avaliable at port 2999
