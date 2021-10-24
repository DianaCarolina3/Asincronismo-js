let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const API = 'https://rickandmortyapi.com/api/character/'

function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest();
  //abre coneción con la ruta
  xhttp.open('GET', url_api, true);
  //valida la coneción del llamado
  xhttp.onreadystatechange = function(event) {
    //validación de estados 4: respuesta lista, 200: todo esta bien
    if(xhttp.readyState === 4) {
      if(xhttp.status === 200) {
        //pasan 2 valores, un error primero y luego el resultado
        callback(null, JSON.parse(xhttp.responseText))
      } else {
        const err = new Error('Error ' + url_api)
        return callback(err, null)
      }
    }
  }
  xhttp.send();
}

//solo hasta 3 llamadas para buenas practicas
fetchData(API, function(error1, data1) {
  if(error1) return console.error(error1);
  fetchData(API + data1.results[0].id, function(error2, data2) {
    if(error2) return console.error(error2)
    fetchData(data2.origin.url, function(error3, data3) {
      if(error3) return console.error(error3)
      console.log(`Number characters ${data1.info.count}`);
      console.log(data2.name);
      console.log(data3.name);
      console.log(data3.dimension);
    })
  })
})