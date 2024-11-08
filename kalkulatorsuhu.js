let fahrenheitFromCelsius = (suhuCelsius) =>{
    return suhuCelsius * 9/5 + 32;
}
let kelvinFromCelsius = (suhuCelsius) =>{
    return suhuCelsius + 273.15;
}

let celsiusFromFahrenheit = (suhuFahrenheit) => {
    return (suhuFahrenheit - 32) * 5/9;
}
let kelvinFromFahrenheit = (celsiusFromFahrenheit) =>{
    return celsiusFromFahrenheit + 273.15;
}

let celsiusFromKelvin = (suhuKelvin)=>{
    return suhuKelvin - 273.15;
}
let fahrenheitFromKelvin = (celsiusFRomKelvin)=>{
    return celsiusFRomKelvin * 9/5 + 32;
}

module.exports ={fahrenheitFromCelsius,kelvinFromCelsius, celsiusFromFahrenheit,kelvinFromFahrenheit, celsiusFromKelvin,fahrenheitFromKelvin}
