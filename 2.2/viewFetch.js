const view = (window) => {
    const document = window.document
    const tables = ["showMeasurementData", "showMinData", "showMaxData", "showTotalData", "showAvgData", "showPredictData"]

    const addData = d => {
        const tr = table_body.appendChild(document.createElement('tr'))
        tr.insertCell().appendChild(document.createTextNode(d.type))
        tr.insertCell().appendChild(document.createTextNode(d.value))
        tr.insertCell().appendChild(document.createTextNode(d.unit))
        tr.insertCell().appendChild(document.createTextNode(d.time))
        tr.insertCell().appendChild(document.createTextNode(d.place))
        if (d.precipitation_type) tr.insertCell().appendChild(document.createTextNode(d.precipitation_type))
        if (d.direction) tr.insertCell().appendChild(document.createTextNode(d.direction))
    }

    const addRow = r => {
        const tr = table_body.appendChild(document.createElement('tr'))
        tr.insertCell().appendChild(document.createTextNode(r.value))
        tr.insertCell().appendChild(document.createTextNode(r.place))
    }

    const displayError = e => {
        const msg_board = document.getElementById('error messages')
        msg_board.innerText = e
    }
    
    const updateTable = (model, item) => {
        table_body = document.getElementById(item)

        switch(item){
        case "showMeasurementData":
            while(table_body.firstChild) table_body.removeChild(table_body.firstChild)
            model.latestMeasurement().forEach(addData)
        break;

        case "showMinData":
            while(table_body.firstChild) table_body.removeChild(table_body.firstChild)
            model.minTemp().forEach(addData)
        break; 
        
        case "showMaxData":
            while(table_body.firstChild) table_body.removeChild(table_body.firstChild)
            model.maxTemp().forEach(addData)
        break;  

        case "showTotalData":
            while(table_body.firstChild) table_body.removeChild(table_body.firstChild)
         model.totalPrecipitation().forEach(addRow)
        break;  

        case "showAvgData":
            while(table_body.firstChild) table_body.removeChild(table_body.firstChild)
            model.avgWindspeed().forEach(addRow)
        break;  

        case "showPredictData":
            while(table_body.firstChild) table_body.removeChild(table_body.firstChild)
            model.hourlyPrediction().forEach(addData)
        break;  

        default :
            while(table_body.firstChild) table_body.removeChild(table_body.firstChild)
            model.allData().forEach(addData)
            break;
        }
    }

    const update = (model) => {
        tables.forEach(updateTable.bind(null, model))
        }
        
    const prompt = window.prompt.bind(window)


    return { addData, update, prompt, displayError}
}