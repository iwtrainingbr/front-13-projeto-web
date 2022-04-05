
function saveTime () {
    event.preventDefault();

    const SELECT_SCHEDULE_DAY = document.getElementById('schedule-day');
    const SELECT_SCHEDULE_TIME = document.getElementById('schedule-time');
    const SELECT_SCHEDULE_LIMIT = document.getElementById('schedule-limit');

    let errors = 0;

    if (SELECT_SCHEDULE_DAY.value === '') {
        SELECT_SCHEDULE_DAY.classList.add('is-invalid');
        errors++;
    }

    if (SELECT_SCHEDULE_TIME.value === '') {
        SELECT_SCHEDULE_TIME.classList.add('is-invalid');
        errors++;
    }

    if (SELECT_SCHEDULE_LIMIT.value === '') {
        SELECT_SCHEDULE_LIMIT.classList.add('is-invalid');
        errors++;
    }

    if (errors > 0) {
        return;
    }
}



function addSchadule() {

   
    return `
        <section class="row card-group mt-2">
        <form action="" onsubmit="saveTime()">

        <div class="col">
        <label for="date" class="mt-3"> </label>
        <select id="schedule-day" class="form-select" aria-label="Default select example"  style="max-width: 18rem;">
            <option selected value="">Dia do treino</option>
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
        <select id="schedule-time" class="form-select" aria-label="Default select example" style="max-width: 18rem;">  
            <option selected value="">Horário do treino</option>
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

        <div class="col mt-2"> 
        <label for=""> Capacidade de alunos </label>  
        <input id="schedule-limit" type="number"  class="form-control" style="max-width: 18rem";>
        </div>
        
        <button class="btn btn-primary mt-5">ENVIAR</button>

    </form>
    </section>
    `
}

