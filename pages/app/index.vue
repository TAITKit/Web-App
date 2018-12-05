<template>
  <v-list two-line>
    <template v-for="(app, i) in apps">
      <v-divider
        v-if="i>=1"
        :key="i"/>
      <v-list-tile
        :to="app.route"
        :key="app.name.abbr"
        router
        ripple
        avatar>
        <v-list-tile-content>
          <v-list-tile-title>
            {{ app.name.abbr }}
            <div
              v-for="(tag, i) in app.categories"
              :key="i"
              class="tag">
              {{ tag }}
            </div>
          </v-list-tile-title>
          <v-list-tile-sub-title>{{ app.name.full }}</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-list-tile-action-text>
            by {{ (app.authors.length !== 0 ? app.authors : app.units)[0] }}
          </v-list-tile-action-text>
        </v-list-tile-action>
      </v-list-tile>
    </template>
  </v-list>
</template>
<script>
export default {
  async asyncData(ctx) {
    return {
      apps: (await ctx.app.pageData(ctx)).map(a => {
        return { route: `/app/${a.name.bind}`, ...a }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.tag
  border-radius: 3px
  border: 1px solid var(--v-primary-lighten2)
  display: inline
  font-size: 0.8em
  padding: 0px 1px 0px 2px
  margin: 2px
</style>
