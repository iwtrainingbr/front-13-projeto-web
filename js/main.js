const PAGE_LIST = document.getElementById('list');
const PAGE_ADD = document.getElementById('add');
const PAGE_LOGIN = document.getElementById('login');
const PAGE_SETTINGS = document.getElementById('settings');
const PAGE_GUI = document.getElementById('gui');

PAGE_LIST.innerHTML = listVehicles();
PAGE_ADD.innerHTML = addVehicle();
PAGE_LOGIN.innerHTML = login();
PAGE_SETTINGS.innerHTML = settings();
PAGE_GUI.innerHTML = gui();
