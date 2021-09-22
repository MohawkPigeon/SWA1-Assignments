function dateInterval(from, to){

    function getTimeFrom(){
        return from
    }

    function getTimeTo() {
        return to
    }

    return{ getTimeFrom,getTimeTo}
}

export { dateInterval }