const PAGE_LIST = document.getElementById('list');
const PAGE_ADD = document.getElementById('add');
const PAGE_LOGIN = document.getElementById('login');
const PAGE_SETTINGS = document.getElementById('settings');
const PAGE_JOAO = document.getElementById ('joao');

const PAGE_WESLEY = document.getElementById('wesley');
const PAGE_DAYANE = document.getElementById('dayane');

PAGE_WESLEY.innerHTML = wesley();
PAGE_LIST.innerHTML = listVehicles();
PAGE_ADD.innerHTML = addVehicle();
PAGE_LOGIN.innerHTML = login();
PAGE_SETTINGS.innerHTML = settings();
PAGE_JOAO.innerHTML = joao ();

PAGE_DAYANE.innerHTML = dayane();
