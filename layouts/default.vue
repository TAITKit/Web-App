<template>
  <v-app>
    <v-navigation-drawer
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          router
          exact>
          <v-list-tile-action>
            <v-icon v-html="item.icon" />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
      color="primary"
    >
      <v-toolbar-side-icon
        class="white--text"
        @click="drawer = !drawer" />
      <v-toolbar-title
        class="white--text"
        v-text="title"/>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt v-model="pageContent"/>
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>AINTU &copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        { icon: 'apps', title: 'Welcome', to: '/' },
        { icon: 'apps', title: 'Apps', to: '/app' }
      ],
      pageContent: { name: '123' },
      miniVariant: false,
      title: 'Taitk'
    }
  }
}
</script>
