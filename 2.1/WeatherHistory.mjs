import { WeatherData } from "./WeatherData.mjs"

class WeatherHistory  {

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
    const periods = data => data.filter(WeatherData => WeatherData.getTime() >= dateFrom).filter(WeatherData => WeatherData.getTime() <= dateTo)

    return new WeatherHistory(periods)
}

including(newdata){
    const datas = data => data.concat(newdata)

    return new WeatherHistory(datas)
}

convertToUsUnit(){
    const newValue = data => data.filter(WeatherData => WeatherData.getType() === 'mm')
    .map(WeatherData => WeatherData.getValue() * 0.039370)
    .map(WeatherData => WeatherData.getType() = "in")

    return new WeatherHistory(newValue)
}

convertToInternationalUnits(){
    const newValue = data => data.filter(WeatherData => WeatherData.getType() === 'in')
    .map(WeatherData => WeatherData.getValue() * 25.4)
    .map(WeatherData => WeatherData.getType() = "mm")

    return new WeatherHistory(newValue)
}

lowestValue(){   
    const min = data => data.filter(WeatherData => WeatherData.getValue() != null)
    .reduce((a, b) => Math.min(a, b))
    
    return min
}

getData(){
    return this.data
}
}
