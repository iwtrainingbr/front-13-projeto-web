document.querySelectorAll('[role="tabpanel"]').forEach(element => {
  let functionName = element.getAttribute('data-content');

  element.innerHTML = window[functionName]();
})


//antes era assim
/*
const PAGE_LIST = document.getElementById('list');
const PAGE_ADD = document.getElementById('add');

PAGE_LIST.innerHTML = listVehicles();
PAGE_ADD.innerHTML = addVehicle();
*/
