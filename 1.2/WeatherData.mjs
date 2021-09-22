import { EventDataType } from "./EventDataType.mjs";

class WeatherData extends EventDataType {
    constructor(value, time, place, type, unit) {
        super(time, place, type, unit)
        this.value = value
    }

    getValue() {
        return this.value
    }
}

export { WeatherData }