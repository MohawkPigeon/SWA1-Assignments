const view = (window) => {
    const document = window.document
    const tables = ['showMeasurementData', 'showMinData', 'showMaxData', 'showTotalData', 'showAvgData', 'showPredictData']

    const addData = w => {
        const tr = table_body.appendChild(document.createElement('tr'))
        tr.insertCell().appendChild(document.createTextNode(w.value))
        tr.insertCell().appendChild(document.createTextNode(w.type))
        tr.insertCell().appendChild(document.createTextNode(w.unit))
        tr.insertCell().appendChild(document.createTextNode(w.time))
        tr.insertCell().appendChild(document.createTextNode(w.place))
        if (w.precipitation_type) tr.insertCell().appendChild(document.createTextNode(w.precipitation_type))
        if (w.direction) tr.insertCell().appendChild(document.createTextNode(w.direction))
    }

    const addRow = r => {
        const tr = table_body.appendChild(document.createElement('tr'))
        tr.insertCell().appendChild(document.createTextNode(r.value))
        tr.insertCell().appendChild(document.createTextNode(r.place))
    }

    const displayError = e => {
        const msg_board = document.getElementById('error message')
        msg_board.innerText = e
    }

    const updateTable = (model, item) => {
        table_body = document.getElementById(item)

        switch (item) {
            case 'showMeasurementData':
                while (table_body.firstChild) table_body.removeChild(table_body.firstChild)
                model.latestMeasurement().forEach(addData)
                break;
            case 'showMinData':
                while (table_body.firstChild) table_body.removeChild(table_body.firstChild)
                model.minTemp().forEach(addData)
                break;
            case 'showMaxData':
                while (table_body.firstChild) table_body.removeChild(table_body.firstChild)
                model.maxTemp().forEach(addData)
                break;
            case "showTotalData":
                while (table_body.firstChild) table_body.removeChild(table_body.firstChild)
                model.totalPrecipitation().forEach(addRow)
                break;
            case "showAvgData":
                while (table_body.firstChild) table_body.removeChild(table_body.firstChild)
                model.avgWindspeed().forEach(addRow)
                break;

            case "showPredictData":
                while (table_body.firstChild) table_body.removeChild(table_body.firstChild)
                model.hourlyPrediction().forEach(addData)
                break;

            default:
                while (table_body.firstChild) table_body.removeChild(table_body.firstChild)
                model.allData().forEach(addData)
                break;
        }
    }

    const update = model => {
        tables.forEach(updateTable.bind(null, model))
        }

    const prompt = window.prompt.bind(window)

    return { addData, update, prompt, displayError }
}