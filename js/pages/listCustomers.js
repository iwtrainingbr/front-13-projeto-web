const URL_CUSTOMERS = 'http://localhost:3009/customers'


function listCustomers() {
  //buscando todos os veiculos, na API
  fetch(URL_CUSTOMERS, {method: 'GET'})
    .then(response => response.json())
    .then(costumers => {
      costumers.map(col =>{
        document.getElementById('table-listCustomers').innerHTML += `
        <td>${col.name}</td>
        <td>${col.email}</td>
        <td>${col.phone}</td>
        <td>${col.adress}</td>
        <td>${col.birth}</td>
        <td>${col.gender}</td>
        `;
      });
    });



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
      <tbody id="table-listCustomers">
        
      </tbody>
    </table>
  `;

}
