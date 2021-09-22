import { WeatherData } from "./WeatherData.mjs";

class temperature extends WeatherData {
    constructor(value, time, place, type, unit) {
        super(value, time, place, type, unit)
    }

    convertToF() {
        if(this.unit === "C") {
            this.value = this.value * 1.8 + 32
            this.unit = "F"
        }
    }

    convertToC() {
        if(this.unit === "F") {
            this.value = (this.value - 32) / 1.8
            this.unit = "C"
        }
    }
}

class precipitation extends WeatherData {
    constructor(value, time, place, type, unit) {
        super(value, time, place, type, unit)
    }

    getPrecipitationType() {
        return type
    }

    convertToInches() {
        if(this.unit === "mm") {
            this.value = this.value * 0.039370
            this.unit = "in"
        }
    }

    convertToMM() {
        if(this.unit === "in") {
            this.value = this.value * 25.4
            this.unit = "mm"
        }
    }
}

class wind extends WeatherData {
    constructor(value, time, place, type, unit, direction) {
        super(value, time, place, type, unit)
        this.direction = direction
    }

    getDirection() {
        return this.direction
    }

    convertToMPH() {
        if(this.unit === "mps") {
            this.value = this.value * 2.236936
            this.unit = "mph"
        }
    }

    convertToMS() {
        if(this.unit === "mph") {
            this.value = this.value * 0.44704
            this.unit = "mps"
        }
    }
}

class cloudCoverage extends WeatherData {
    constructor(value, time, place, type, unit, uv) {
        super(value, time, place, type, unit)
        this.uv = uv
    }

    getUv() {
        return uv
    }
}