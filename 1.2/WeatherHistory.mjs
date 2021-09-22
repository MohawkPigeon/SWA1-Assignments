import { WeatherData } from "./WeatherData.mjs"

class WeatherHistory extends WeatherData  {
    constructor(value, place, type, unit, dateFrom, dateTo){
    super(value, place, type, unit, dateFrom, dateTo)   
}
    getPlaceFilter(){
        return this.place
    }
    setPlacefilter(place){
        place = this.place
    }
    clearPlaceFilter(){
       delete this.place 
    }
    setTypeFilter(type){
        type = this.type
    }
    clearTypeFilter(){
        delete this.type
    }
    setPeriodFilter(dateFrom, dateTo){
        this.dateFrom = dateFrom
        this.dateTo = dateTo
    }
    clearPeriodFilter(){
        delete this.dateFrom
        delete this.dateTo
    }
    convertToUSUnits() {
        if(this.unit === "mm") {
            this.value = this.value * 0.039370
            this.unit = "in"
        }
    }
    convertToInternationalUnits() {
        if(this.unit === "in") {
            this.value = this.value * 25.4
            this.unit = "mm"
        }
    }
    add(){  
        let data = [this.value, this.place, this.type, this.unit, this.dateFrom, this.dateTo]
        return data
    } 
}