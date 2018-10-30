import Nuxt from 'nuxt'
export default {
  methods: {
    get() {
      return Nuxt.$route.path
    }
  }
}
