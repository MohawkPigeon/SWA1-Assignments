import { weatherData } from "./WeatherData.mjs";
import { dateInterval } from "./DateInterval.mjs";

function weatherHistory(value, time, place, type, unit, dateFrom, dateTo) {

const state = {value, time, place, type, unit, dateFrom, dateTo}   
const weatherDataFunction = weatherData(state)
const dateIntervalFunction = dateInterval(state)

let list = []
    
function setPlace(data){
    state.place = data 
     return data
}

function clearPlace(){
    delete state.place
}

function setType(data){
    state.type = data
}

function clearType(){
    delete state.type 
}

function setPeriodFilter(dateFrom, dateTo){
    state.dateFrom = dateFrom
    state.dateTo = dateTo
}

function clearPeriodFilter(){
    delete state.dateFrom
    delete state.dateTo
}

function add(){
    list.push(state)
}

function getFilteredData(){
    return list
}

function convertToUSUints() {
    if(unit === "mm") {
        state.value = value * 0.039370
        state.unit = "in"
    }
}

function convertToInternationalUnits() {
    if(unit === "in") {
        state.value = value * 25.4
        state.unit = "mm"
    }
}
return {
    ...dateIntervalFunction,
    ...weatherDataFunction,
    setPeriodFilter,
    clearPeriodFilter,
    setPlace,
    clearPlace,
    setType,
    clearType,
    add,
    getFilteredData,
    convertToInternationalUnits,
    convertToUSUints
}
}