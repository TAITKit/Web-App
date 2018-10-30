<template>
  <v-layout>
    <v-flex text-xs-left>
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
  asyncData(context) {
    // called every time before loading the component
    return {
      apps: [
        {
          name: 'Discourse',
          author: 'HHH',
          tags: ['NLP', 'Discourse', 'ParseTree']
        },
        {
          name: 'Discourse',
          author: 'HHH',
          tags: ['NLP', 'Discourse', 'ParseTree']
        },
        {
          name: 'Discourse',
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
