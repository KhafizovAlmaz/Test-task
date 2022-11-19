const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
 
  return (seconds) => {
    setInterval(() => {
      let ss = seconds%60;
      let mm = Math.floor(seconds/60%60);
      let hh = Math.floor(seconds/60/60%60);

      if (seconds == 0) {
        alert("Время закончилось");
        location.reload()
      }

      seconds--;
      
      timerEl.innerHTML = `${hh}:${mm}:${ss}`;
    },1000)
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/[^0-9]/g, '');
  // Очистите input так, чтобы в значении
  // оставались только числа
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});