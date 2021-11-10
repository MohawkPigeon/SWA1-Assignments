<template>
<div>
<button v-on:click="update()">Update</button>
  <table>
      <thead><tr><td>Value</td><td>Place</td></tr></thead> 
      <tbody>
          <tr v-for="m in measures" :key="m.id">
              <td>{{ m.value }} </td>
              <td>{{ m.place }}</td>
          </tr>
      </tbody>
  </table>
</div>
</template>

<script>
export default {
  emits: ['update'],
  name: "computedDataTable",
  props: {
    measures: Array
  },
  methods: {
    update() {
      this.$emit('update')
    }
  }
}
</script>