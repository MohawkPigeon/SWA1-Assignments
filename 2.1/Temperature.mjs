import { WeatherData } from "./WeatherData.mjs";

class temperature extends WeatherData {
    constructor(value, time, place, type, unit) {
        super(value, time, place, type, unit)
        Object.freeze(this)
    }

    convertToF() {
        if(this.unit === "C") {
            let newValue = this.value * 1.8 + 32
            let newUnit = "F"
            return new temperature(newValue, this.time, this.place, this.type, newUnit)
        }
    }

    convertToC() {
        if(this.unit === "F") {
            let newValue = (this.value - 32) / 1.8
            let newUnit = "C"
            return new temperature(newValue, this.time, this.place, this.type, newUnit)
        }
    }
}

class precipitation extends WeatherData {
    constructor(value, time, place, type, unit) {
        super(value, time, place, type, unit)
        Object.freeze(this)
    }

    getPrecipitationType() {
        return this.type
    }

    convertToInches() {
        if(this.unit === "mm") {
            let newValue = this.value * 0.039370
            let newUnit = "in"
            return new precipitation(newValue, this.time, this.place, this.type, newUnit)
        }
    }

    convertToMM() {
        if(this.unit === "in") {
            let newValue = this.value * 25.4
            let newUnit = "mm"
            return new precipitation(newValue, this.time, this.place, this.type, newUnit)
        }
    }
}

class wind extends WeatherData {
    constructor(value, time, place, type, unit, direction) {
        super(value, time, place, type, unit)
        this.direction = direction
        Object.freeze(this)
    }

    getDirection() {
        return this.direction
    }

    convertToMPH() {
        if(this.unit === "mps") {
            let newValue = this.value * 2.236936
            let newUnit = "mph"
            return new wind(newValue, this.time, this.place, this.type, newUnit, this.direction)
        }
    }

    convertToMS() {
        if(this.unit === "mph") {
            let newValue = this.value * 0.44704
            let newUnit = "mps"
            return new wind(newValue, this.time, this.place, this.type, newUnit, this.direction)
        }
    }
}

class cloudCoverage extends WeatherData {
    constructor(value, time, place, type, unit, uv) {
        super(value, time, place, type, unit)
        this.uv = uv
        Object.freeze(this)
    }

    getUv() {
        return this.uv
    }
}