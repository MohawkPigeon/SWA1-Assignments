<template>
  <table>
      <tbody>
        <td colspan = "3"><button v-on:click="add(weather)">Add</button></td>
      </tbody>
  </table>
</template>

<script>
export default {
  emits: ['add'],
  name: "Weather",
  props: {
    weathers: Array
  },
  methods: {
    add(w) {
      this.$emit('add', w)
    }
  }
}
</script>
