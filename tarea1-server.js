

const http = require('http');

const fsPromises = require('fs/promises');

const nombre = "Martin M";
 

let ahora =new Date();
let horaActual = ahora.toLocaleTimeString();


// let hora =ahora.getHours();
// let minuto = ahora.getMinutes();
// let segundo = ahora.getSeconds();

// let horaActual= `${hora}:${minuto}:${segundo} `;

const server = http.createServer(async (request, response) => {


if (request.url === "/") {
  response.write("Hola!, escribi localhost:3000/tarea-1 en tu barra de navegacion para mas info!");
  response.end();
}

if (request.url === "/tarea-1"){

  try {
    await fsPromises.appendFile('./tarea1.txt', `Hola, soy ${nombre} y visitaste mi servidor a 
    las ${horaActual}.\n` );
    response.write('Revisa el archivo tarea1.txt en VS Code')
    response.end();
    
  } catch (error) {
    console.log(error);
    
  }
}
})

server.listen(3000)

console.log('servidor levantado!')
