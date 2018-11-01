<template>
  <v-layout>
    <v-flex text-xs-left>
      <v-list
        v-for="app in apps"
        :key="app.name"
      >
        <v-list-tile
          :to="app.route"
          router
        >
          <v-list-tile-content>
            {{ app.name }} by {{ app.author }}
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-flex>
  </v-layout>
</template>
<script>
// import Get from 'mixins/get'
export default {
  async asyncData({ app, route }) {
    // called every time before loading the component
    let apps = (await app.$axios.get(`/api${route.path}`)).data
    apps = apps.map(a => {
      a = { route: `/app/${a.bindName}`, ...a }
      return a
    })
    return {
      apps: apps
    }
  }
}
</script>
