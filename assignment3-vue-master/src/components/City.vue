<template>
  <div>
    <button v-on:click="copenhagenWeather()">Copenhagen weather</button>
    <button v-on:click="aarhusWeather()">Aarhus weather</button>
    <button v-on:click="horsensWeather()">Horsens weather</button>
      <table>
        <thead><tr><td>Value</td><td>Type</td><td>Unit</td><td>Time</td><td>Place</td></tr></thead>
          <tbody>
            <tr v-for="w in cities" :key="w">
              <td>{{ w.value }} </td>
              <td>{{ w.type }} </td>
              <td>{{ w.unit }} </td>
              <td>{{ w.time }} </td>
              <td>{{ w.place }} </td>  
            </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
export default {
  emits: ['copenhagenWeather', 'aarhusWeather', 'horsensWeather'],
  name: "Weather",
  props: {
    cities: Array
  },
  methods: {
    copenhagenWeather() {
      this.$emit('copenhagenWeather')
    },
    aarhusWeather() {
      this.$emit('aarhusWeather')
    },
    horsensWeather() {
      this.$emit('horsensWeather')
    }
  }
}
</script>