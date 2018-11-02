<template>
  <v-container
    grid-list-md
    text-xs-center
    fluid >
    <v-layout
      row
      wrap>
      <v-flex xs12>
        <v-card>
          <v-expansion-panel expand-all>
            <v-expansion-panel-content>
              <div
                slot="header"
                class="headline">{{ app.name }}</div>
              <v-card-text>{{ app.description }}</v-card-text>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <div
                slot="header"> Config </div>
              <parameter-document-table :param="app.configs"/>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <div
                slot="header"> Input </div>
              <parameter-document-table :param="app.inputs"/>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card>
          <v-form>
            <v-card-text
              v-for="(input, i) in app.inputs"
              :key="i">
              <v-textarea
                v-if="input.type === 'text'"
                v-model="inputs[input.name]"
                :name="input.name"
                :label="input.name"
                :hint="input.description"
                type="text"/>
              <file-upload
                v-if="input.type === 'file'"/>
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
import ParameterDocumentTable from '~/components/ParameterDocumentTable.vue'
import FileUpload from '~/components/FileUpload.vue'

export default {
  components: {
    ParameterDocumentTable,
    FileUpload
  },
  async asyncData(ctx) {
    return {
      app: await ctx.app.pageData(ctx),
      inputs: {},
      configs: {},
      result: null
    }
  },
  methods: {
    async submit() {
      this.result = (await this.$axios.post(`/api/short/${this.app.bindName}`, {
        params: {},
        data: { inputs: this.inputs, configs: this.configs }
      })).data
    }
  }
}
</script>
