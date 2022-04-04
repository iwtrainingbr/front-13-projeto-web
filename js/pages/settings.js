function settings() {
  //para o botao continuar habilitado ou desabilitado quando der F5 na pagina
  let checked = localStorage.getItem('darkmode') === 'true' ? 'checked' : '';
  
  return `
    <h2>Configurações</h2>
    
    <div class="form-check form-switch">
    
    <input onclick="changeDarkmode()" class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" ${checked}>
    <label class="form-check-label" for="flexSwitchCheckChecked">Dark mode</label>
    </div>
  `;
}

const DARKMODE_STYLE = 'background-color: #222;';
const LIGHTMODE_STYLE = 'background-color: #DEDEDE; color:#000';

if (localStorage.getItem('darkmode') === 'true'){
  document.body.setAttribute('style', DARKMODE_STYLE);
} else {
  localStorage.setItem('darkmode', false);
}

function changeDarkmode (){
  if (localStorage.getItem('darkmode') === 'false'){
    localStorage.setItem('darkmode', true);
    document.body.setAttribute('style', DARKMODE_STYLE);
  } else{
    localStorage.setItem('darkmode', false);
    document.body.setAttribute('style', LIGHTMODE_STYLE);
  }
}
