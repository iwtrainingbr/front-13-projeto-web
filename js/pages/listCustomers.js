
function listCustomers() {
  //buscando todos os veiculos, na API

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
