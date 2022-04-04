function saveColaborador() {
    event.preventDefault();

    let newColaborador = {
        nome: document.getElementById('name').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('tel').value,
        endereco: document.getElementById('adress').value,
        data_nascimento: document.getElementById('date_born').value,
        sexo: document.getElementById('sexo').value,
        especialidades: document.getElementById('specialties').value,
    };

    fetch(URL_CADASTRO, {
        method: 'POST',
        body: JSON.stringify(newColaborador),
        headers: {
            "Content-Type": "application/json"
        }
    });

    alert('Colaborador inserido');
    location.href = "index.html";
}


function addCollaborator() {
    return `
    <form action="" onsubmit="saveColaborador()">
      <label for="plate">Nome</label>
      <input type="text" id="name" placeholder="Colaborador" class="form-control mb-3">

      <label for="email">Email</label>
      <input type="text" id="email" placeholder="Email" class="form-control mb-3">

      <label for="telefone">Telefone</label>
      <input type="text" id="tel" placeholder="Telefone" class="form-control mb-3">

      <label for="model">Endereço</label>
      <input type="text" id="adress" placeholder="Endereço" class="form-control mb-3">

      <label for="year">Data de Nascimento</label>
      <input type="text" id="date_born" placeholder="Data de Nascimento" class="form-control mb-3">

      <label for="sexo">Sexo</label>
      <input type="text" id="sexo" placeholder="Sexo" class="form-control mb-3">
      
      <label for="especialidades">Especialidades</label>
      <input type="text" id="specialties" placeholder="especialidades" class="form-control mb-3">

      <button class="btn btn-primary">Cadastrar</button>
    </form>
  `;
}