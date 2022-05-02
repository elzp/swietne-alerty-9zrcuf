// Import stylesheets
import './style.css';

class Alert {
  constructor(type, message) {
    this.type = type;
    this.message = message;
  }

  create(type = this.type, message = this.message) {
    this.type = type || this.type;
    this.message = message || this.message;

    const colors = {
      error: 'red',
      warning: 'yellow',
      success: 'green',
    };
    const color = colors[this.type];

    return `
          <div class="inline-flex items-center bg-white leading-none text-${color}-600 rounded-full p-2 shadow text-teal text-sm">
            <span class="inline-flex bg-${color}-600 text-white rounded-full h-6 px-3 justify-center items-center">${
      this.type.charAt(0).toUpperCase() + this.type.slice(1)
    }</span>
            <span class="inline-flex px-2">${this.message}.</span>
          </div>
        `;
  }
}

const data = [
  { type: 'error', message: 'error1' },
  { type: 'warning', message: 'warning1' },
  { type: 'warning', message: 'warning2' },
  { type: 'success', message: 'success1' },
  { type: 'success', message: 'success2' },
  { type: 'error', message: 'error2' },
];
const warningContainer = document.querySelector('.-m-2');
const alerts = document.querySelectorAll('.-m-2>.p-2');
alerts.forEach((item, index) => {
  item.innerHTML = new Alert(data[index].type, data[index].message).create();
  const oneAlert = item.querySelector('div');

  oneAlert.addEventListener('click', () => {
    oneAlert.className += ' disappear';
    setTimeout(() => {
      oneAlert.style.display = 'none';
    }, 2000);
    console.log('here'); //.backgroud-color = 'red'
    console.log('cos', oneAlert.classList);
  });

  setTimeout(() => {
    oneAlert.className += ' disappear';
  }, 10000);
  setTimeout(() => {
    oneAlert.style.display = 'none';
  }, 12000);
});
