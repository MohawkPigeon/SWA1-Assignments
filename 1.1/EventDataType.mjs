function event(time, place) {

    function getTime() {
        return time
    }

    function getPlace() {
        return place
    }

    return {
        getTime,
        getPlace
    }
}

function dataType(type, unit) {
    
    function getType() {
        return type
    }

    function getUnit() {
        return unit
    }

    return {
        getType,
        getUnit
    }
}

export { event, dataType }