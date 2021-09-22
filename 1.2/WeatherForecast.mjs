import { WeatherPrediction } from "./WeatherPrediction.mjs"

class WeatherForecast extends WeatherPrediction  {
    constructor(minValue, maxValue, place, type, unit, dateFrom, dateTo){
    super(minValue, maxValue, place, type, unit, dateFrom, dateTo)
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
            this.minValue = this.minValue * 0.039370
            this.maxValue = this.maxValue * 0.039370
            this.unit = "in"
        }
    }
    convertToInternationalUnits() {
        if(this.unit === "in") {
            this.minValue = this.maxValue * 25.4
            this.minValue = this.maxValue * 25.4
            this.unit = "mm"
        }
    }
    add(){  
        let data = [this.minValue, this.maxValue, this.place, this.type, this.unit, this.dateFrom, this.dateTo]
        return data
    } 
}