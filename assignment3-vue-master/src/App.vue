<template>
  <div id="dynamic-component-demo" class="demo">
    <h1>Weather</h1>
    <input type="date" v-model="from" />
    <input type="date" v-model="to" />
    <button v-on:click="fromDateToDate()">Submit</button>
    <weather :weathers="weathers" @add="add" />
    <city
      :cities="cities"
      @copenhagenWeather="copenhagenWeather"
      @aarhusWeather="aarhusWeather"
      @horsensWeather="horsensWeather"
      @fromDateToDate="fromDateToDate"
    />

    <div>
      <div id="dynamic-component-demo" class="demo">
        <h1>Latest measures</h1>
        <dataTable :measures="measures" @update="update" />
      </div>

      <div id="dynamic-component-demo" class="demo">
        <h1>Minimum temperature for the last 5 days</h1>
        <dataTable :measures="minTemp" @update="update" />
      </div>

      <div id="dynamic-component-demo" class="demo">
        <h1>Maximum temperature for the last 5 days</h1>
        <dataTable :measures="maxTemp" @update="update" />
      </div>

      <div id="dynamic-component-demo" class="demo">
        <h1>Total precipitation for the last 5 days</h1>
        <computedDataTable :measures="totalPrecipitation" @update="update" />
      </div>

      <div id="dynamic-component-demo" class="demo">
        <h1>Average wind speed for the last 5 days</h1>
        <computedDataTable :measures="avgWindspeed" @update="update" />
      </div>

      <div id="dynamic-component-demo" class="demo">
        <h1>Hourly predictions for the next 24 hours.</h1>
        <dataTable :measures="hourlyPrediction" @update="update" />
      </div>

      <div id="dynamic-component-demo" class="demo">
        <h1>Forecast</h1>
        <cityForecast :forecasts="forecasts" />
      </div>
    </div>
  </div>
</template>

<script>
import Weather from "@/components/Weather";
import City from "@/components/City";
import CityForecast from "@/components/CityForecast";
import DataTable from "@/components/DataTable";
import computedDataTable from "@/components/computedDataTable";

export default {
  name: "App",
  data() {
    return {
      model: {},
      from: null,
      to: null,
    };
  },

  computed: {
    cities() {
      return this.model.Weather();
    },
    measures() {
      return this.model.Weather();
    },
    minTemp() {
      return this.model.minTemp();
    },
    maxTemp() {
      return this.model.maxTemp();
    },
    totalPrecipitation() {
      return this.model.totalPrecipitation();
    },
    avgWindspeed() {
      return this.model.avgWindspeed();
    },
    hourlyPrediction() {
      return this.model.hourlyPrediction();
    },
    forecasts() {
      return this.model.Forecast();
    }
  },

  methods: {
    async add() {
      const weatherPrompt = window.prompt("Weather Data");
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };
      const weather_res = await fetch("http://localhost:8080/data", {
        method: "POST",
        body: JSON.stringify({ weatherPrompt }),
        headers,
      });
      const weather = await weather_res.json();
      this.model = this.model.addWeatherData(weather);
    },
    async update() {
      const data_res = await fetch("http://localhost:8080/data");
      const data = await data_res.json();
      const forecasts = await fetch("http://localhost:8080/forecast").then((res) => res.json());
      this.model = this.model.updateModel(data, forecasts);
    },
    async copenhagenWeather() {
      const weatherC = await fetch("http://localhost:8080/data/Copenhagen").then((res) => res.json());
      const forecastC = await fetch("http://localhost:8080/forecast/Copenhagen").then((res) => res.json());
      this.model = this.model.CityWeatherData(weatherC, forecastC);
    },
    async aarhusWeather() {
      const weatherAa = await fetch("http://localhost:8080/data/Aarhus").then((res) => res.json());
      const forecastAa = await fetch("http://localhost:8080/forecast/Aarhus").then((res) => res.json());
      this.model = this.model.CityWeatherData(weatherAa, forecastAa);
    },
    async horsensWeather() {
      const weatherH = await fetch("http://localhost:8080/data/Horsens").then((res) => res.json());
      const forecastH = await fetch("http://localhost:8080/forecast/Horsens").then((res) => res.json());
      this.model = this.model.CityWeatherData(weatherH, forecastH);
    },
    async fromDateToDate() {
      this.model = this.model.TimeWeatherData(this.from, this.to);
    },
  },
  components: {
    Weather,
    City,
    CityForecast,
    DataTable,
    computedDataTable,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> 