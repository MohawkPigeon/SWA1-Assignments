import { WeatherData } from "./WeatherData.mjs"

class WeatherHistory extends WeatherData  {
constructor(data = []){
    this.data = data
    Object.freeze(this)
}


forPlace(place){
    const places = data => data.filter(WeatherData => WeatherData.getPlace() === place)

    return new WeatherHistory(places)
}

forType(type){
    const types = data => data.filter(WeatherData => WeatherData.getType() === type)

    return new WeatherHistory(types)
}

forPeriod(dateFrom, dateTo){
    const periods = data => data.filter(WeatherData => WeatherData.time() >= dateFrom).filter(WeatherData => WeatherData.time() <= dateTo)

    return new WeatherHistory(periods)
}

including(newdata){
    const datas = data => data.concat(newdata)

    return new WeatherHistory(datas)
}

convertToUsUnit(){
    let newValue = this.getValue()
    let newUnit = "in"
    if(this.unit === "mm") {
        newValue = newValue * 0.039370
    }

    return new WeatherHistory(newValue, newUnit)
}

convertToInternationalUnits(){
    let newValue = this.getValue()
    let newUnit = "mm"
    if(this.unit === "in") {
        newValue = newValue * 25.4
    }

    return new WeatherHistory(newValue, newUnit)
}

lowestValue(){       
    const lowestValue = () => data
    .filter(WeatherData => WeatherData.getValue())
    .sort((a, b) => (a.value > b.value) ? 1 : -1)
    .slice(0, 1)
    
    return lowestValue
}

getData(){
    return this.data
}
}