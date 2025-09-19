import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const delayInput = document.querySelector('#delay');
const startBtn = document.querySelector('.create');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const selectedStateEl = document.querySelector('input[name="state"]:checked');
  if (!selectedStateEl) {
    alert('Please select a state!');
    return;
  }

  const selectedState = selectedStateEl.value;
  const delayValue = Number(delayInput.value);
  startBtn.disabled = true;

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (selectedState === 'fulfilled') {
        resolve(delayValue);  
      } else {
        reject(delayValue); 
      }
    }, delayValue);
  });

  myPromise
    .then((result) => {
      iziToast.success({
        title: 'Fulfilled',
        message: `✅ Fulfilled promise in ${delayValue}ms`,
        position: 'topRight',
      });
      startBtn.disabled = false;
    })
    .catch((error) => {
      iziToast.error({
        title: 'Rejected',
        message: `❌ Rejected promise in ${delayValue}ms`,
        position: 'topRight',
      });
      startBtn.disabled = false;
    });
});
