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
        const periods = data => data.filter(WeatherPrediction => WeatherPrediction.time() >= dateFrom).filter(WeatherPrediction => WeatherPrediction.time() <= dateTo)

        return new WeatherForecast(periods)
    }

    including(newdata){
        const datas = data => data.concat(newdata)

        return new WeatherForecast(datas)
    }

    convertToUsUnit(){
        let newMinValue = this.getMin()
        let newMaxValue = this.getMax()
        let newUnit = "in"
        if(this.unit === "mm") {
            newMinValue = newMinValue * 0.039370
            newMaxValue = newMaxValue * 0.039370
        }

        return new WeatherForecast(newMinValue, newMinValue, newUnit)
    }

    convertToInternationalUnits(){
        let newMinValue = this.getMin()
        let newMaxValue = this.getMax()
        let newUnit = "mm"
        if(this.unit === "in") {
            newMinValue = newMinValue * 25.4
            newMaxValue = newMaxValue * 25.4
        }

        return new WeatherForecast(newMinValue, newMinValue, newUnit)
    }

    getAverageMinValue(){        
        const avgMinValue = () => [data.filter(WeatherPrediction => WeatherPrediction.getMin())
            .reduce((s, n) => ({
                value: s.value + n.value /
                    data.filter(WeatherPrediction => WeatherPrediction.getMin()).length
            }))]

            return (avgMinValue)
    }

    getAverageMaxValue(){
        const avgMaxValue = () => [data.filter(WeatherPrediction => WeatherPrediction.getMax())
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
