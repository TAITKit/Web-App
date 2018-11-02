<template>
  <v-content>
    <img
      v-if="imageUrl"
      :src="imageUrl"
      height="150"></img>
    <v-text-field
      v-model="imageName"
      label="Select Image"
      prepend-icon="attach_file"
      @click="pickFile"/>
    <input
      ref="image"
      type="file"
      style="display: none"
      accept="image/*"
      @change="onFilePicked">
  </v-content>
</template>
<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => {}
    },
    type: {
      type: String,
      default: () => 'file'
    }
  },
  data: () => ({
    title: 'Image Upload',
    imageName: '',
    imageUrl: '',
    imageFile: ''
  }),
  methods: {
    pickFile() {
      this.$refs.image.click()
    },
    onFilePicked(e) {
      const files = e.target.files
      if (files[0] !== undefined) {
        this.imageName = files[0].name
        if (this.imageName.lastIndexOf('.') <= 0) {
          return
        }
        const fr = new FileReader()
        fr.readAsDataURL(files[0])
        fr.addEventListener('load', () => {
          this.imageUrl = fr.result
          this.imageFile = files[0] // this is an image file that can be sent to server...
        })
      }
    }
  }
}
</script>
