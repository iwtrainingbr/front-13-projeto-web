
const URL_VEHICLES = 'http://localhost:8000/veiculos';

function listVehicles() {
  //buscando todos os veiculos, na API
  fetch(URL_VEHICLES, {method: 'GET'} )
    .then(response => response.json())
    .then(vehicles => {
      vehicles.map(vec => {
        document.getElementById('table-vehicles').innerHTML += `
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

  return `
    <table class="table table-hover table-striped mt-3">
      <thead class="table-dark">
        <tr>
          <th>#ID</th>
          <th>Placa</th>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Ano</th>
          <th>Cor</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody id="table-vehicles">

      </tbody>
    </table>
  `;
}
