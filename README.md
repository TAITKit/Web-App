# taitk-web-app

> Tai Toolkit web app

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

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
    funtional: '<FUNTIONAL NAME>'
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
      { name: '<NAME>', type: '<TYPE>', description: '<DESCRIPTION>' },
      ...
    ],
    inputs: [
      { name: '<NAME>', type: '<TYPE>', description: '<DESCRIPTION>' },
      ...
    ],
    outputs: [
      { name: '<NAME>', type: '<TYPE>', description: '<DESCRIPTION>' },
      ...
    ]
  }
}
```
