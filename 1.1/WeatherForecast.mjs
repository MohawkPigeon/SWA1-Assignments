import { weatherPrediction } from "./WeatherPrediction.mjs";
import { dateInterval } from "./DateInterval.mjs";

function weatherForecast(value, time, place, type, unit, dateFrom, dateTo) {

const state = {value, time, place, type, unit, dateFrom, dateTo}   
const weatherDataFunction = weatherPrediction(state)
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

function add(){
    list.push(state)
}

function getFilteredPrediction(){
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
        setPlace,
        clearPlace,
        setType,
        clearType,
        add,
        getFilteredPrediction,
        convertToInternationalUnits,
        convertToUSUints
    }
}

 
let temp = weatherForecast(25.4,2000,"visdd","rain","MM","07/06/2021","03/08/2021")
let temp1 = weatherForecast(25.4,2000,"via","rain","MM","07/06/2021","03/08/2021")
temp.convertToUSUints()
temp.setPeriodFilter("22/06/3333","20/93/3929")
temp.add()




console.log(temp.getFilteredPrediction()[0].unit)
