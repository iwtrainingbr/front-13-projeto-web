
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


function addVehicle() {
  return `
    <form action="" onsubmit="saveVehicle()">
      <label for="plate">Placa</label>
      <input type="text" id="plate" placeholder="Placa" class="form-control mb-3">

      <label for="make">Marca</label>
      <input type="text" id="make" placeholder="Marca" class="form-control mb-3">

      <label for="model">Modelo</label>
      <input type="text" id="model" placeholder="Modelo" class="form-control mb-3">

      <label for="year">Ano</label>
      <input type="text" id="year" placeholder="Ano" class="form-control mb-3">

      <label for="color">Cor</label>
      <input type="text" id="color" placeholder="Cor" class="form-control mb-3">

      <button class="btn btn-primary">ENVIAR</button>
    </form>
  `;
}
