import { WeatherPrediction } from "./WeatherPrediction.mjs"

class WeatherForecast  {
    constructor(data = []){
        this.data = data
        Object.freeze(this)
    }


    forPlace(place){
        const places = data => data.filter(WeatherPrediction => WeatherPrediction.getPlace() === place)

        return new WeatherForecast(places)
    }

    forType(type){
        const types = data => data.filter(WeatherPrediction => WeatherPrediction.getType() === type)

        return new WeatherForecast(types)
    }

    forPeriod(dateFrom, dateTo){
        const periods = data => data.filter(WeatherPrediction => WeatherPrediction.getTime() >= dateFrom).filter(WeatherPrediction => WeatherPrediction.getTime() <= dateTo)

        return new WeatherForecast(periods)
    }

    including(newdata){
        const datas = data => data.concat(newdata)

        return new WeatherForecast(datas)
    }

    convertToUsUnit(){
        const newValue = data => data.filter(WeatherPrediction => WeatherPrediction.getType() === 'mm')
        .map(WeatherPrediction => WeatherPrediction.getValue() * 0.039370)
        .map(WeatherPrediction => WeatherPrediction.getType() = "in")
    
        return new WeatherForecast(newValue)
    }

    convertToInternationalUnits(){
        const newValue = data => data.filter(WeatherPrediction => WeatherPrediction.getType() === 'in')
        .map(WeatherPrediction => WeatherPrediction.getValue() * 25.4)
        .map(WeatherPrediction => WeatherPrediction.getType() = "mm")
    
        return new WeatherForecast(newValue)
    }

    getAverageMinValue(){        
        const avgMinValue = () => [data.filter(WeatherPrediction => WeatherPrediction.getMin() != null)
            .reduce((s, n) => ({
                value: s.value + n.value /
                    data.filter(WeatherPrediction => WeatherPrediction.getMin()).length
            }))]

            return (avgMinValue)
    }

    getAverageMaxValue(){
        const avgMaxValue = () => [data.filter(WeatherPrediction => WeatherPrediction.getMax() != null)
            .reduce((s, n) => ({
                value: s.value + n.value /
                    data.filter(WeatherPrediction => WeatherPrediction.getMax()).length
            }))]

            return (avgMaxValue)
    }

    getPredictions(){
        return this.data
    }
}
