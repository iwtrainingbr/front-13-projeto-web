const ADD_SCHADULE = 'http://localhost:3009/schedules';


function saveSchedule() {

    event.preventDefault();

    let newSchedule = {
        day: document.getElementById('schedule-day').value,
        begin_hour: document.getElementById('schedule-hours').value,
        end_hour: document.getElementById('schedule-hours').value,
        limit: document.getElementById('schedule-capacity').value
    }

    fetch (ADD_SCHADULE, {
        method:'POST',
        body: JSON.stringify(newSchedule),
        headers: {
            "Content-Type": "application/json"
          }

    })

    alert('Horário Reservado');
}


function addSchadule () {
    return `
        <section class="row card-group mt-2">
        <form action="" onsubmit="saveSchedule()">

            <div class="col">
            <label for="date" class="mt-3"> </label>
            <select id="schedule-day" class="form-select" aria-label="Default select example"  style="max-width: 18rem;">
                <option selected>Dia do treino</option>
                    <option data-content="day">Domingo</option>
                    <option data-content="day">Segunda-feira</option>
                    <option data-content="day">Terça-feira</option>
                    <option data-content="day">Quarta-feira</option>
                    <option data-content="day">Quinta-feira</option>
                    <option data-content="day">Sexta-feira</option>
                    <option data-content="day">Sábado</option>
            </select>
            </div>

            <div class="col">
            <label for="time" class="mt-3">Horário do treino</label>
            <select id="schedule-hours" class="form-select" aria-label="Default select example" style="max-width: 18rem;">  
                <option selected>Horário do treino</option>
                    <option data-content="hour">06:00/06:50</option>
                    <option data-content="hour">07:00/07:50</option>
                    <option data-content="hour">08:00/08:50</option>
                    <option data-content="hour">09:00/09:50</option>
                    <option data-content="hour">10:00/10:50</option>
                    <option data-content="hour">15:00/15:50</option>        
                    <option data-content="hour">16:00/16:50</option>        
                    <option data-content="hour">17:00/17:50</option>        
                    <option data-content="hour">18:00/18:50</option>        
                    <option data-content="hour">19:00/19:50</option>        
                    <option data-content="hour">20:00/20:50</option>        
                    <option data-content="hour">21:00/21:50</option>
            </select>
            </div>

            <div id="schedule-capacity" class="col mt-2"> 
            <label for=""> Capacidade de alunos </label>  
            <input type="number"  class="form-control" style="max-width: 18rem";>
            </div>
            
            <button class="btn btn-primary mt-5">ENVIAR</button>
        </form>
    </section>
        `;
}
