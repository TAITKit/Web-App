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
export default {
  async asyncData(ctx) {
    return {
      apps: (await ctx.app.pageData(ctx)).map(a => {
        return { route: `/app/${a.bindName}`, ...a }
      })
    }
  }
}
</script>
