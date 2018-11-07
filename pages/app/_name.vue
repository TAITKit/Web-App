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
                class="headline">{{ app.name.brief }}</div>
              <v-card-text>
                <h3>{{ app.name.full }}</h3>
                <span
                  v-for="(person, i) in app.author.people"
                  :key="i">
                  {{ person }}
                  {{ app.author.people.length-2 > i ? ',' : '' }}
                  {{ app.author.people.length-2===i ? ' and ' : '' }}
                </span> <br >
                <span
                  v-for="(unit, i) in app.author.units"
                  :key="i - app.author.units.length">
                  {{ unit }}
                  {{ app.author.units.length-2 > i ? ',' : '' }}
                  {{ app.author.units.length-2===i ? ' and ' : '' }}
                </span>
              </v-card-text>
              <v-card-text>
                {{ app.description.text }} <br >
                <a
                  v-for="(link, i) in app.description.links"
                  :key="i"
                  :href="link.url"
                  style="margin: 0 3px 0 0"
                  flat
                  nuxt>{{ link.description }}</a>
              </v-card-text>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <div
                slot="header"> Config </div>
              <parameter-document-table :param="app.format.configs"/>
            </v-expansion-panel-content>
            <v-expansion-panel-content>
              <div
                slot="header"> Input </div>
              <parameter-document-table :param="app.format.inputs"/>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card>
          <v-form>
            <v-card-text
              v-for="(input, i) in app.format.inputs"
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
      this.result = (await this.$axios.post(
        `/api/short/${this.app.name.bind}`,
        {
          params: {},
          data: { inputs: this.inputs, configs: this.configs }
        }
      )).data
    }
  }
}
</script>
<style lang="stylus" scoped>
.tag
  border-radius: 3px
  border: 1px solid var(--v-primary-lighten2)
  display: inline
  font-size: 0.6em
  padding: 0px 1px 0px 2px
  margin: 1px
</style>
