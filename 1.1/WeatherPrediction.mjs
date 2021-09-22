import { event, dataType } from "./EventDataType.mjs";
import { weatherData } from "./WeatherData.mjs";

function weatherPrediction(minValue, maxValue, time, place, type, unit) {

    const eventFunction = event(time, place)
    const dataTypeFunction = dataType(type, unit)

    function matches(weatherData){
        if(weatherData.getTime() === time && weatherData.getPlace() === place && weatherData.getType() === type && weatherData.getUnit() === unit && weatherData.getValue() >= minValue && weatherData.getValue() <= maxValue){
            return true
        } else {
            return false
        }
    }

    function getMin() {
        return minValue
    }

    function getMax() {
        return maxValue
    }

    return {...eventFunction, ...dataTypeFunction, matches, getMin, getMax}
}

export { weatherPrediction }