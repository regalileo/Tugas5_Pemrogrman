let {hitungVolumeKubus} = require("./package/volumekubus.js") //module volume kubus
let sisi = 5;
console.log(`Volume kubus dengan sisi ${sisi} adalah ${hitungVolumeKubus(sisi)}`);

let  {fahrenheitFromCelsius,kelvinFromCelsius,celsiusFromFahrenheit,
    kelvinFromFahrenheit,celsiusFromKelvin,
    fahrenheitFromKelvin} =require("./package/kalkulatorsuhu.js") // module kalkulator suhu

console.log('Berikutdibawah ini konversi suhu dari beberepa kondisi dan nilai suhu tertentu')
let suhuCelsius = 25;
console.log(`${suhuCelsius}°C = ${fahrenheitFromCelsius(suhuCelsius)}°F`);
console.log(`${suhuCelsius}°C = ${kelvinFromCelsius(suhuCelsius)}K`);

let suhuFahrenheit = 77;
console.log(`${suhuFahrenheit}°F = ${celsiusFromFahrenheit(suhuFahrenheit)}°C`);
console.log(`${suhuFahrenheit}°F = ${kelvinFromFahrenheit(suhuFahrenheit)}K`);

let suhuKelvin = 300;
console.log(`${suhuKelvin}K = ${celsiusFromKelvin(suhuKelvin)}°C`);
console.log(`${suhuKelvin}K = ${fahrenheitFromKelvin(suhuKelvin)}°F`);

let {hitungEnergiKinetik} = require("./package/energi_kinetik.js") //module energi kinetik
let massa = 10;
let kecepatan = 20;
console.log(`besar energi kinetik dengan nilai massa ${massa} dan kecepatan ${kecepatan} 
    adalah ${hitungEnergiKinetik(massa, kecepatan)}`);

let {hitungEnergiPotensial} = require("./package/energi_potensial.js")// nodule energi potensial
let massa_benda = 10;
let percepatan_gravitasi = 20;
let tinggi_benda = 8;
console.log(`besar energi potensial dengan nilai massa benda ${massa_benda}, 
    percepatan gravitasi ${percepatan_gravitasi} dan 
    tinggi benda dari permukaan tanah ${tinggi_benda} adalah ${hitungEnergiPotensial(massa_benda, percepatan_gravitasi, tinggi_benda)}`);