<template>
<div>
<button v-on:click="update()">Update</button>
  <table>
      <thead><tr><td>Value</td><td>Type</td><td>Unit</td><td>Time</td><td>Place</td></tr></thead> 
      <tbody>
          <tr v-for="m in measures" :key="m.id">
              <td>{{ m.value }} </td>
              <td>{{ m.type }} </td>
              <td>{{ m.unit }}</td>
              <td>{{ m.time }}</td>
              <td>{{ m.place }}</td>
          </tr>
      </tbody>
  </table>
</div>
</template>

<script>
export default {
  emits: ['update'],
  name: "DataTable",
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