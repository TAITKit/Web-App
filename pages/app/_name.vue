<template>
  <v-container
    grid-list-md
    text-xs-center>
    <v-layout
      row
      wrap>
      <v-flex xs12>
        <v-card>
          <v-form>
            <v-card-title primary-title>
              <h2 class="headline"> {{ app.name }} </h2>
            </v-card-title>
            <v-card-text>
              <v-text-field
                ref="text"
                v-model="text"
                name="text"
                type="text"
                label="Input text"/>
            </v-card-text>
            <v-btn
              type="submit"
              color="primary"
              nuxt
              flat
              @click.stop.prevent="submit()">Submit</v-btn>
          </v-form>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card>
          <v-card-title primary-title>
            <h3> Output </h3>
          </v-card-title>
          <v-card-text>
            <h4> {{ result }} </h4>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  async asyncData(ctx) {
    return {
      app: await ctx.app.pageData(ctx),
      text: null,
      result: null
    }
  },
  methods: {
    async submit() {
      this.result = (await this.$axios.post(`/api/short/${this.app.bindName}`, {
        params: {},
        data: { text: this.text }
      })).data
    }
  }
}
</script>
