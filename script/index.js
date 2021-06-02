const tableRows = document.querySelectorAll('tr');

function addEvents() {
  for (let i of tableRows) {
    i.addEventListener('keyup', getData);
    i.addEventListener('keypress', checkNum);
  }
};

addEvents();

function checkNum(e) {
  if (isNaN(parseFloat(e.key))) {
    e.preventDefault();
  }
}

function getData() {
  for (let i = 0; i < tableRows.length; i++) {
    let result = 1;
    let cells = tableRows[i].children;
    for (let j = 0; j < cells.length - 1; j++) {
      result = result * cells[j].firstElementChild.value;
      result === 0 ? cells[cells.length - 1].firstElementChild.value = '' :
        cells[cells.length - 1].firstElementChild.value = result;
    }
  }
}