import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const delayInput = document.querySelector('#delay');
const startBtn = document.querySelector('.create');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const delayValue = Number(delayInput.value);
  const selectedStateEl = document.querySelector('input[name="state"]:checked');

  if (!selectedStateEl) {
    alert('Please select a state!');
    return;
  }

  const selectedState = selectedStateEl.value;
  startBtn.disabled = true;

  setTimeout(() => {
    if (selectedState === 'fulfilled') {
      iziToast.success({
        title: 'Fulfilled',
        message: `✅ Fulfilled promise in ${delayValue}ms`,
        position: 'topRight',
      });
    } else {
      iziToast.error({
        title: 'Rejected',
        message: `❌ Rejected promise in ${delayValue}ms`,
        position: 'topRight',
      });
    }
    startBtn.disabled = false;
  }, delayValue);
});
