// Endereço do db
const URL_ADD_CUSTOMERS = 'http://localhost:3009/customers'

function saveCustomer() {
  event.preventDefault();

  // Pegando os valores digitados
  let newCustomer = {
    name: document.getElementById('customer_name').value,
    email: document.getElementById('customer_email').value,
    phone: document.getElementById('customer_phone').value,
    address: document.getElementById('customer_address').value,
    birth: document.getElementById('customer_birth').value,
    gender: document.getElementById('customer_sex').value
  }

  // Consumindo a api do db e inserindo os dados
  fetch(URL_ADD_CUSTOMERS, {
    method: 'POST',
    body: JSON.stringify(newCustomer), // Transformando os dados em string
    headers: {
        "Content-Type": "application/json"
      }
  })

  alert('Cliente inserido');
}


function addCustomer() {
  return `
    <form action="" onsubmit="saveCustomer()">
      <label for="customer_name" class="mt-3">Nome</label>
      <input type="text" id="customer_name" placeholder="Nome" class="form-control mb-3">

      <label class="mt-3 for="customer_email">Email</label>
      <input type="email" id="customer_email" placeholder="email@email.com" class="form-control mb-3">

      <label class="mt-3 for="customer_phone">Telefone</label>
      <input type="text" id="customer_phone" placeholder="85 99999-9999" class="form-control mb-3">

      <label class="mt-3 for="customer_adress">Endereço</label>
      <input type="text" id="customer_address" placeholder="Ex: Rua / Travessa / Avenida " class="form-control mb-3">

      <label class="mt-3 for="customer_birth">Data de Nascimento</label>
      <input type="text" id="customer_birth" placeholder="dd/mm/aaaa" class="form-control mb-3">

      <label class="mt-3 for="customer_sex">Sexo</label>
      <input type="text" id="customer_sex" placeholder="Digite seu gênero" class="form-control mb-3">
      <div class="d-grid mt-5">
        <button class="btn btn-primary">ENVIAR</button>
      </div>
    </form>
  `;
}


