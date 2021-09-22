import { event, dataType } from "./EventDataType.mjs";

function weatherData(value, time, place, type, unit) {

    const eventFunction = event(time, place)
    const dataTypeFunction = dataType(type, unit)

    function getValue() {
        return value
    }

    return {...eventFunction, ...dataTypeFunction, getValue}
}

export { weatherData }