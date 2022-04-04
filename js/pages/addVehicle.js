// const URL_ADDCUSTOMERS = 'http://localhost:3009/customers'

// function saveCustomer() {
//   event.preventDefault();

//   let newCustomer = {
//     nome: document.getElementById('customer_name').value,
//     email: document.getElementById('customer_email').value,
//     telefone: document.getElementById('customer_phone').value,
//     endereco: document.getElementById('customer_address').value,
//     data_de_nascimento: document.getElementById('customer_birth').value,
//     genero: document.getElementById('customer_sex').value
//   }

//   fetch(URL_ADDCUSTOMERS, {
//     method: 'POST',
//     body: stringify(newCustomer),
//     headers: {
//         "Content-Type": "application/json"
//       }
//   })
// }


// function addCustomer() {
//   return `
//     <form action="" onsubmit="saveCustomer()">
//       <label for="customer_name" class="mt-3">Nome</label>
//       <input type="text" id="customer_name" placeholder="Nome" class="form-control mb-3">

//       <label class="mt-3 for="customer_email">Email</label>
//       <input type="email" id="customer_email" placeholder="email@email.com" class="form-control mb-3">

//       <label class="mt-3 for="customer_phone">Telefone</label>
//       <input type="text" id="customer_phone" placeholder="85 99999-9999" class="form-control mb-3">

//       <label class="mt-3 for="customer_adress">Endereço</label>
//       <input type="text" id="customer_adress" placeholder="Ex: Rua / Travessa / Avenida " class="form-control mb-3">

//       <label class="mt-3 for="customer_birth">Data de Nascimento</label>
//       <input type="text" id="customer_birth" placeholder="dd/mm/aaaa" class="form-control mb-3">

//       <label class="mt-3 for="customer_sex">Sexo</label>
//       <input type="text" id="customer_sex" placeholder="Digite seu gênero" class="form-control mb-3">
//       <div class="d-grid mt-5">
//         <button class="btn btn-primary">ENVIAR</button>
//       </div>
//     </form>
//   `;
// }


// function saveVehicle() {
//   event.preventDefault();

//   let newVehicle = {
//     placa: document.getElementById('plate').value,
//     marca: document.getElementById('make').value,
//     modelo: document.getElementById('model').value,
//     ano_modelo: document.getElementById('year').value,
//     ano_fabricacao: document.getElementById('year').value,
//     cor: document.getElementById('color').value,
//   };

//   fetch(URL_VEHICLES, {
//     method: 'POST',
//     body: JSON.stringify(newVehicle),
//     headers: {
//       "Content-Type": "application/json"
//     }
//   });

//   alert('Veiculo inserido');
//   location.href = "index.html";
// }