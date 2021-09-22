import { EventDataType } from "./EventDataType.mjs";
import { WeatherData } from "./WeatherData.mjs";

class WeatherPrediction extends EventDataType {
    constructor(minValue, maxValue, time, place, type, unit) {
        super(time, place, type, unit)
        this.minValue = minValue
        this.maxValue = maxValue
    }

    matches(weatherData){
        if(weatherData.getTime() === this.time && weatherData.getPlace() === this.place && weatherData.getType() === this.type && weatherData.getUnit() === this.unit && weatherData.getValue() >= this.minValue && weatherData.getValue() <= this.maxValue){
            return true
        } else {
            return false
        }
    }

    getMin() {
        return this.minValue
    }

    getMax() {
        return this.maxValue
    }
}

export { WeatherPrediction }