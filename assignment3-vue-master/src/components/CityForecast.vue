<template>
  <div>
      <table>
        <thead><tr><td>From</td><td>To<td>Type</td><td>Unit</td><td>Time</td><td>Place</td></tr></thead>
          <tbody>
            <tr v-for="f in forecasts" :key="f">
              <td>{{ f.from }} </td>
              <td>{{ f.to }} </td>
              <td>{{ f.type }} </td>
              <td>{{ f.unit }} </td>
              <td>{{ f.time }} </td>
              <td>{{ f.place }} </td>  
            </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
export default {
  emits: [],
  name: "Forecasts",
  props: {
    forecasts: Array
  },
  methods: {}
}
</script>