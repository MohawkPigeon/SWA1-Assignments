import { weatherPrediction } from "./WeatherPrediction.mjs";

function temperaturePrediction(minValue, maxValue, time, place, type, unit) {

    const weatherPredictionFunction = weatherPrediction(minValue, maxValue, time, place, type, unit)

    function convertToF(){
        unit = 'F'
        minValue = minValue*1.8+32
        maxValue = maxValue*1.8+32
        return{
            minValue,
            maxValue
        }
    }

    function convertToC(){
        unit = 'C'
        minValue = (minValue-32)*0.5556
        maxValue = (maxValue-32)*0.5556
        return{
            minValue,
            maxValue
        }
    }

    return {
        ...weatherPredictionFunction,
        convertToF,
        convertToC
    }
}


function precipitationPrediction(minValue, maxValue, time, place, type, unit, expectedTypes) {

    const weatherPredictionFunction = weatherPrediction(minValue, maxValue, time, place, type, unit)

    function getExpectedTypes(){
        return{
            expectedTypes
        }
    }

    function convertToInches(){
        unit = 'in'
        minValue = minValue/25.4
        maxValue = maxValue/25.4
        return{
            minValue,
            maxValue
        }
    }

    function convertToMM(){
        unit = 'mm'
        minValue = minValue*25.4
        maxValue = maxValue*25.4
        return{
            minValue,
            maxValue
        }
    }

    return {
        ...weatherPredictionFunction,
        getExpectedTypes,
        convertToInches,
        convertToMM
    }
}


function windPrediction(minValue, maxValue, time, place, type, unit, expectedDirections) {

    const weatherPredictionFunction = weatherPrediction(minValue, maxValue, time, place, type, unit)

    function getExpectedDirections(){
        return{
            expectedDirections
        }
    }

    function convertToMPH(){
        unit = 'mph'
        minValue = minValue*2.236936
        maxValue = maxValue*2.236936
        return{
            minValue,
            maxValue
        }
    }

    function convertToMS(){
        unit = 'mps'
        minValue = minValue/2.236936
        maxValue = maxValue/2.236936
        return{
            minValue,
            maxValue
        }
    }

    return {
        ...weatherPredictionFunction,
        getExpectedDirections,
        convertToMPH,
        convertToMS
    }
}

function cloudCoveragePrediction(minValue, maxValue, time, place, type, unit, UV, density, cloudType) {

    const weatherPredictionFunction = weatherPrediction(minValue, maxValue, time, place, type, unit)

    function getExpectedUV() {
        return UV
    }

    function getExpectedDensity() {
        return density
    }

    function getExpectedCloudType() {
        return cloudType
    }

    return {
        ...weatherPredictionFunction,
        getExpectedUV,
        getExpectedDensity,
        getExpectedCloudType
    }
}
