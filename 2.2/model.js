const model = (data, forecast) => {

    const latestMeasurement = () => data
        .sort((a, b) => (a.time > b.time) ? -1 : 1)
        .filter(point => point.place === "Copenhagen")
        .slice(0, 4)
        .concat(data.sort((a, b) => (a.time > b.time) ? -1 : 1)
            .filter(point => point.place === "Horsens")
            .slice(0, 4))
        .concat(data.sort((a, b) => (a.time > b.time) ? -1 : 1)
            .filter(point => point.place === "Aarhus")
            .slice(0, 4))

    const minTemp = () => data
        .filter(point => point.place === "Copenhagen")
        .filter(point => point.type === "temperature")
        .sort((a, b) => (a.value > b.value) ? 1 : -1)
        .slice(0, 1)
        .concat(data
            .filter(point => point.place === "Horsens")
            .filter(point => point.type === "temperature")
            .sort((a, b) => (a.value > b.value) ? 1 : -1)
            .slice(0, 1))
        .concat(data
            .filter(point => point.place === "Aarhus")
            .filter(point => point.type === "temperature")
            .sort((a, b) => (a.value > b.value) ? 1 : -1)
            .slice(0, 1))

    const maxTemp = () => data
        .filter(point => point.place === "Copenhagen")
        .filter(point => point.type === "temperature")
        .sort((a, b) => (a.value > b.value) ? -1 : 1)
        .slice(0, 1)
        .concat(data
            .filter(point => point.place === "Horsens")
            .filter(point => point.type === "temperature")
            .sort((a, b) => (a.value > b.value) ? -1 : 1)
            .slice(0, 1))
        .concat(data
            .filter(point => point.place === "Aarhus")
            .filter(point => point.type === "temperature")
            .sort((a, b) => (a.value > b.value) ? -1 : 1)
            .slice(0, 1))


    const totalPrecipitation = () => [data
        .filter(point => point.place === "Copenhagen")
        .filter(point => point.type === "precipitation")
        .slice(0, 120)
        .reduce((s, n) => ({ value: s.value + n.value, place: "Copenhagen" }))]
        .concat([data
            .filter(point => point.place === "Horsens")
            .filter(point => point.type === "precipitation")
            .slice(0, 120)
            .reduce((s, n) => ({ value: s.value + n.value, place: "Horsens" }))]
        )
        .concat([data
            .filter(point => point.place === "Aarhus")
            .filter(point => point.type === "precipitation")
            .slice(0, 120)
            .reduce((s, n) => ({ value: s.value + n.value, place: "Aarhus" }))]
        )

    const avgWindspeed = () => [data
        .filter(point => point.place === "Copenhagen")
        .filter(point => point.type === "wind speed")
        .slice(0, 120)
        .reduce((s, n) => ({
            value: s.value + n.value /
                data.filter(point => point.place === "Copenhagen").filter(point => point.type === "wind speed").length
            , place: "Copenhagen"
        }))]
        .concat([data
            .filter(point => point.place === "Horsens")
            .filter(point => point.type === "wind speed")
            .slice(0, 120)
            .reduce((s, n) => ({
                value: s.value + n.value /
                    data.filter(point => point.place === "Horsens").filter(point => point.type === "wind speed").length
                , place: "Horsens"
            }))]
        )
        .concat([data
            .filter(point => point.place === "Aarhus")
            .filter(point => point.type === "wind speed")
            .slice(0, 120)
            .reduce((s, n) => ({
                value: s.value + n.value /
                    data.filter(point => point.place === "Aarhus").filter(point => point.type === "wind speed").length
                , place: "Aarhus"
            }))]
        )

    const hourlyPrediction = () => forecast
        .sort((a, b) => (a.time > b.time) ? 1 : -1)
        .filter(point => point.place === "Copenhagen")
        .slice(0, 96)
        .reverse()
        .sort((a, b) => (a.type > b.type) ? 1 : -1)
        .concat(data.sort((a, b) => (a.time > b.time) ? 1 : -1)
            .filter(point => point.place === "Horsens")
            .slice(0, 96)
            .reverse()
            .sort((a, b) => (a.type > b.type) ? 1 : -1)
        )
        .concat(data.sort((a, b) => (a.time > b.time) ? 1 : -1)
            .filter(point => point.place === "Aarhus")
            .slice(0, 96)
            .reverse()
            .sort((a, b) => (a.type > b.type) ? 1 : -1)
        )

    const allData = () => data.slice(0, 10)

    return { latestMeasurement, minTemp, maxTemp, totalPrecipitation, avgWindspeed, hourlyPrediction, allData }
}