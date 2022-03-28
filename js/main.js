const TABLE_VEHICLES = document.getElementById('table-vehicles');

const URL_VEHICLES = 'http://localhost:3000/veiculos';

//buscando todos os veiculos, na API
fetch(URL_VEHICLES, {method: 'GET'} )
  .then(response => response.json())
  .then(vehicles => {
    vehicles.map(vec => {
      TABLE_VEHICLES.innerHTML += `
        <tr>
          <td>${vec.id}</td>
          <td>${vec.placa}</td>
          <td>${vec.marca}</td>
          <td>${vec.modelo}</td>
          <td>${vec.ano_fabricacao}/${vec.ano_modelo}</td>
          <td>${vec.cor}</td>
        </tr>
      `;
    });
  });


function saveVehicle() {
  event.preventDefault();

  let newVehicle = {
    placa: document.getElementById('plate').value,
    marca: document.getElementById('make').value,
    modelo: document.getElementById('model').value,
    ano_modelo: document.getElementById('year').value,
    ano_fabricacao: document.getElementById('year').value,
    cor: document.getElementById('color').value,
  };

  fetch(URL_VEHICLES, {
    method: 'POST',
    body: JSON.stringify(newVehicle),
    headers: {
      "Content-Type": "application/json"
    }
  });

  alert('Veiculo inserido');
  location.href = "index.html";
}
