const myFunction = function() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}

const getGasPrices = () => {
    
    console.log("getGasPrices called")
    
    url = "https://thisisjustatest123.azurewebsites.net/api/HttpTrigger1?code=L_Mdyv-BGGk6iI4MqOi-G8QSC297_5n08nLyNmiVz_13AzFuId9D8A=="

    //url = "http://localhost:7071/api/HttpTrigger1?code=1"

    dates = getQueryDates()

    start = dates[0]
    end = dates[1]

    urlWithParams = url + `&start=${start}&end=${end}`
    
    fetch(urlWithParams, {'mode':'cors' }).then(response => {
        response.text().then(text =>{
            console.log("getGasPrices promise resolved")
            document.getElementById("results").innerHTML = text
        })
    })
}

const clearResult = () => {
    document.getElementById("results").innerHTML = "Results will display here...";
}

const setupDatePickers = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
    let yyyy = today.getFullYear();
    if(dd<10){
    dd='0'+dd
    } 
    if(mm<10){
    mm='0'+mm
    } 

    today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("start").setAttribute("max", today);
    document.getElementById("start").setAttribute("value", today);
    document.getElementById("end").setAttribute("max", today);
    document.getElementById("end").setAttribute("value", today);

}

const getQueryDates = () => {
    start = document.getElementById("start").getAttribute("value")
    end = document.getElementById("end").getAttribute("value")
    console.log([start, end])
    return [start, end]
}

const dateChange = (e) => {
    id = e.target.id
    newValue = e.target.value
    element = document.getElementById(id)
    element.setAttribute('value', newValue)
    //alert(document.getElementById(id).getAttribute('value'))
}

setupDatePickers()