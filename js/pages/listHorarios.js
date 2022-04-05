const LIST_HORARIOS = 'http://localhost:3009/schedules';

function listHorarios () {
  fetch(LIST_HORARIOS, {method:'GET'})
  .then (response => response.json())
  .then (schedules => {
    schedules.map (col =>{
        document.getElementById('table-horarios').innerHTML +=`
        <tr>
          <td>${col.day}</td>
          <td>${col.begin_hour}</td>
          <td>${col.end_hour}</td>
          <td>${col.limit}</td>
          </tr>
        `
      });
  });

return `
    <table class="table table-hover table-striped mt-3">
      <thead class="table-dark">
        <tr>
          <th>Dia</th>
          <th>Horario de inicio</th>
          <th>Horário de fim</th>
          <th>Capacidade</th>

          
        </tr>
      </thead>
      <tbody id="table-horarios">

      </tbody>
    </table>
  `;
}
