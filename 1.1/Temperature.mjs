import { weatherData } from "./WeatherData.mjs";

function temperature(value, time, place, type, unit) {

    const weatherDataFunction = weatherData(value, time, place, type, unit)

    function convertToF() {
        if(unit === "C") {
            value = value * 1.8 + 32
            unit = "F"
        }

        return {value, unit}
    }

    function convertToC() {
        if(unit === "F") {
            value = (value - 32) / 1.8
            unit = "C"
        }

        return {value, unit}
    }

    return {
        ...weatherDataFunction,
        convertToF,
        convertToC
    }
}

function precipitation(value, time, place, type, unit, precipitation) {

    const weatherDataFunction = weatherData(value, time, place, type, unit)

    function getPrecipitationType() {
        return precipitation
    }

    function convertToInches() {
        if(unit === "mm") {
            value = value * 0.039370
            unit = "in"
        }

        return {value, unit}
    }

    function convertToMM() {
        if(unit === "in") {
            value = value * 25.4
            unit = "mm"
        }

        return {value, unit}
    }

    return {
        ...weatherDataFunction,
        getPrecipitationType,
        convertToInches,
        convertToMM
    }
}


function wind(value, time, place, type, unit, direction) {

    const weatherDataFunction = weatherData(value, time, place, type, unit)

    function getDirection() {
        return direction
    }

    function convertToMPH() {
        if(unit === "mps") {
            value = value * 2.236936
            unit = "mph"
        }

        return {value, unit}
    }

    function convertToMS() {
        if(unit === "mph") {
            value = value * 0.44704
            unit = "mps"
        }

        return {value, unit}
    }

    return {
        ...weatherDataFunction,
        getDirection,
        convertToMPH,
        convertToMS
    }
}


function cloudCoverage(value, time, place, type, unit, UV, density, cloudType) {

    const weatherDataFunction = weatherData(value, time, place, type, unit)

    function getUV() {
        return UV
    }

    function getDensity() {
        return density
    }

    function getCloudType() {
        return cloudType
    }

    return {
        ...weatherDataFunction,
        getUV,
        getDensity,
        getCloudType
    }
}
