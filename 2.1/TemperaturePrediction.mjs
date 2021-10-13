import { WeatherPrediction } from "./WeatherPrediction.mjs";

class temperature extends WeatherPrediction {
    constructor(minValue, maxValue, time, place, type, unit) {
        super(minValue, maxValue, time, place, type, unit)
        Object.freeze(this)
    }

    convertToF() {
        let newMinValue = this.getMin()
        let newMaxValue = this.getMax()
        let newUnit = "F"

        if(this.getUnit() === "C") {
            newMinValue = newMinValue * 1.8 + 32
            newMaxValue = newMaxValue * 1.8 + 32
        }

        return new temperature(newMinValue, newMinValue, this.time, this.place, this.type, newUnit)
    }

    convertToC() {
        let newMinValue = this.getMin()
        let newMaxValue = this.getMax()
        let newUnit = "C"

        if(this.unit === "F") {
            newMinValue = (newMinValue - 32) / 1.8
            newMaxValue = (newMaxValue - 32) / 1.8
        }

        return new temperature(newMinValue, newMinValue, this.time, this.place, this.type, newUnit)
    }
}

class precipitation extends WeatherPrediction {
    constructor(minValue, maxValue, time, place, type, unit, expectedTypes) {
        super(minValue, maxValue, time, place, type, unit)
        this.expectedTypes = expectedTypes
        Object.freeze(this)
    }

    getExpectedTypes() {
        return this.expectedTypes
    }

    convertToInches() {
        let newMinValue = this.getMin()
        let newMaxValue = this.getMax()
        let newUnit = "in"
        if(this.unit === "mm") {
            newMinValue = newMinValue * 0.039370
            newMaxValue = newMaxValue * 0.039370
        }

        return new precipitation(newMinValue, newMinValue, this.time, this.place, this.type, newUnit, this.expectedTypes)
    }

    convertToMM() {
        let newMinValue = this.getMin()
        let newMaxValue = this.getMax()
        let newUnit = "mm"
        if(this.unit === "in") {
            newMinValue = newMinValue * 25.4
            newMaxValue = newMaxValue * 25.4
        }

        return new precipitation(newMinValue, newMinValue, this.time, this.place, this.type, newUnit, this.expectedTypes)
    }
}

class wind extends WeatherPrediction {
    constructor(minValue, maxValue, time, place, type, unit, direction) {
        super(minValue, maxValue, time, place, type, unit)
        this.direction = direction
        Object.freeze(this)
    }

    getExpectedDirections() {
        return this.direction
    }

    convertToMPH() {
        let newMinValue = this.getMin()
        let newMaxValue = this.getMax()
        let newUnit = "mph"
        if(this.unit === "mps") {
            newMinValue = newMinValue * 2.236936
            newMaxValue = newMaxValue * 2.236936
        }

        return new wind(newMinValue, newMinValue, this.time, this.place, this.type, newUnit, this.direction)
    }

    convertToMS() {
        let newMinValue = this.getMin()
        let newMaxValue = this.getMax()
        let newUnit = "mps"
        if(this.unit === "mph") {
            newMinValue = newMinValue * 0.44704
            newMaxValue = newMaxValue * 0.44704
        }

        return new wind(newMinValue, newMinValue, this.time, this.place, this.type, newUnit, this.direction)
    }
}

class cloudCoverage extends WeatherPrediction {
    constructor(minValue, maxValue, time, place, type, unit, uv) {
        super(minValue, maxValue, time, place, type, unit)
        this.uv = uv
        Object.freeze(this)
    }

    getUv() {
        return this.uv
    }
}