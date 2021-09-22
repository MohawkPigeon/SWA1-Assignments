import { WeatherPrediction } from "./WeatherPrediction.mjs";

class temperature extends WeatherPrediction {
    constructor(minValue, maxValue, time, place, type, unit) {
        super(minValue, maxValue, time, place, type, unit)
    }

    convertToF() {
        if(this.unit === "C") {
            this.minValue = this.minValue * 1.8 + 32
            this.maxValue = this.maxValue * 1.8 + 32
            this.unit = "F"
        }
    }

    convertToC() {
        if(this.unit === "F") {
            this.minValue = (this.minValue - 32) / 1.8
            this.maxValue = (this.maxValue - 32) / 1.8
            this.unit = "C"
        }
    }
}

class precipitation extends WeatherPrediction {
    constructor(minValue, maxValue, time, place, type, unit, expectedTypes) {
        super(minValue, maxValue, time, place, type, unit)
        this.expectedTypes = expectedTypes
    }

    getExpectedTypes() {
        return expectedTypes
    }

    convertToInches() {
        if(this.unit === "mm") {
            this.minValue = this.minValue * 0.039370
            this.maxValue = this.maxValue * 0.039370
            this.unit = "in"
        }
    }

    convertToMM() {
        if(this.unit === "in") {
            this.minValue = this.minValue * 25.4
            this.maxValue = this.maxValue * 25.4
            this.unit = "mm"
        }
    }
}

class wind extends WeatherPrediction {
    constructor(minValue, maxValue, time, place, type, unit, direction) {
        super(minValue, maxValue, time, place, type, unit)
        this.direction = direction
    }

    getExpectedDirections() {
        return this.direction
    }

    convertToMPH() {
        if(this.unit === "mps") {
            this.minValue = this.minValue * 2.236936
            this.maxValue = this.maxValue * 2.236936
            this.unit = "mph"
        }
    }

    convertToMS() {
        if(this.unit === "mph") {
            this.minValue = this.minValue * 0.44704
            this.maxValue = this.maxValue * 0.44704
            this.unit = "mps"
        }
    }
}

class cloudCoverage extends WeatherPrediction {
    constructor(minValue, maxValue, time, place, type, unit, uv) {
        super(minValue, maxValue, time, place, type, unit)
        this.uv = uv
    }

    getUv() {
        return uv
    }
}