<template>
  <vue-clip :options="options">
    <template slot="clip-uploader-action">
      <div>
        <div class="dz-message"><h3> Click or Drag and Drop files here upload </h3></div>
      </div>
    </template>

    <template slot="clip-uploader-body" scope="props">
      <div v-for="file in props.files">
        <img v-bind:src="file.dataUrl" />
        {{ file.name }} {{ file.status }}
      </div>
    </template>

  </vue-clip>
</template>

<script>

export default {
  data () {
    return {
      options: {
        url: '/upload',
        paramName: 'file'
      }
    }
  }
}
</script>

<style scoped>
.dz-message {
  border: 2px solid gray;
  color: gray;
  background-color: white;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  width: 420px;
}

</style>
