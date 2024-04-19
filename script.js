
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');


btn1.addEventListener('click', function() {
  fetch('primero.html') 
  .then(response => response.text())
  .then(html => {
    document.write(html);
    const backButton = document.createElement('button');
    backButton.textContent = 'Regresar';
    backButton.addEventListener('click', function() {
      window.location.href = '/index.html';
    });
    document.body.appendChild(backButton);
  })
  .catch(error => console.error('Error al obtener el contenido:', error));

});

btn2.addEventListener('click', function() {
  fetch('segundo.html') 
  .then(response => response.text())
  .then(html => {
    document.write(html);
    const backButton = document.createElement('button');
    backButton.textContent = 'Regresar';
    backButton.addEventListener('click', function() {
      window.location.href = '/index.html';
    });
    document.body.appendChild(backButton);
  })
  .catch(error => console.error('Error al obtener el contenido:', error));

});

btn3.addEventListener('click', function() {
  fetch('tercero.html') 
  .then(response => response.text())
  .then(html => {
    document.write(html);
    const backButton = document.createElement('button');
    backButton.textContent = 'Regresar';
    backButton.addEventListener('click', function() {
      window.location.href = '/index.html';
    });
    document.body.appendChild(backButton);
  })
  .catch(error => console.error('Error al obtener el contenido:', error));

});

btn4.addEventListener('click', function() {
  fetch('cuarto.html') 
  .then(response => response.text())
  .then(html => {
    document.write(html);
    const backButton = document.createElement('button');
    backButton.textContent = 'Regresar';
    backButton.addEventListener('click', function() {
      window.location.href = '/index.html';
    });
    document.body.appendChild(backButton);
  })
  .catch(error => console.error('Error al obtener el contenido:', error));

});

btn5.addEventListener('click', function() {
  fetch('quinto.html') 
  .then(response => response.text())
  .then(html => {
    document.write(html);
    const backButton = document.createElement('button');
    backButton.textContent = 'Regresar';
    backButton.addEventListener('click', function() {
      window.location.href = '/index.html';
    });
    document.body.appendChild(backButton);
  })
  .catch(error => console.error('Error al obtener el contenido:', error));

});


