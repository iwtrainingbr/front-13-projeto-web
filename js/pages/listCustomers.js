
function listCustomers() {
  //buscando todos os veiculos, na API

  return `
    <table class="table table-hover table-striped mt-3">
      <thead class="table-dark">
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Endereço</th>
          <th>Data de Nascimento</th>
          <th>Sexo</th>
          

        </tr>
        
      </thead>
      <tbody id="listCustomers">
        ${[0, 1, 2, 3, 5, 6].map(id => `
          <tr>
            <td>Nome ${id}</td>
            <td>Email ${id}</td>
            <td>Telefone ${id}</td>
            <td>Endereço ${id}</td>
            <td>Data de Nascimento ${id}</td>
            <td>Sexo ${id}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;

}
