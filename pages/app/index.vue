<template>
  <v-layout>
    <v-flex text-xs-left>
      {{ bbb }}
      <li
        v-for="app in apps"
        :key="app.name">
        {{ app.name }}
        {{ app.author }}
      </li>
    </v-flex>
  </v-layout>
</template>
<script>
// import Get from 'mixins/get'
export default {
  async asyncData(context) {
    let { app } = context
    // called every time before loading the component
    return {
      bbb: await app.$axios.$post('api/QAQ'),
      apps: [
        {
          name: 'Discourse',
          author: 'HHH',
          tags: ['NLP', 'Discourse', 'ParseTree']
        },
        {
          name: 'Discourse2',
          author: 'HHH',
          tags: ['NLP', 'Discourse', 'ParseTree']
        },
        {
          name: 'Discourse3',
          author: 'HHH',
          tags: ['NLP', 'Discourse', 'ParseTree']
        },
        {
          name: 'CoreNLP',
          author: 'Stanford',
          tags: ['NLP', 'Discourse', 'ParseTree', 'Labeling']
        }
      ]
    }
  }
}
</script>
