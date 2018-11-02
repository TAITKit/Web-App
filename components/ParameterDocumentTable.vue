<template>
  <v-container
    grid-list-md
    fluid>
    <v-layout
      row
      wrap>
      <v-flex
        v-for="(p, i) in param"
        :key="i"
        d-flex
        xs12>
        <v-card class="grey lighten-3">
          <v-layout
            row
            wrap>
            <v-flex
              d-flex
              xs12
              md5>
              <v-card-text
                class="grey lighten-4">
                <div class="grey--text">Name</div>
                <h3>{{ p.name }}</h3>
              </v-card-text>
              <v-card-text
                class="grey lighten-4">
                <div class="grey--text">Default</div>
                <h3>{{ p.default }}</h3>
              </v-card-text>
              <v-card-text
                class="grey lighten-4">
                <div class="grey--text">Type</div>
                <h3>{{ p.type }}</h3>
              </v-card-text>
            </v-flex>
            <v-flex
              d-flex
              xs12
              md7>
              <v-card-text> {{ p.description }} </v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  props: {
    param: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
