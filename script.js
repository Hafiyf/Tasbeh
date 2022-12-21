const resetBtn = document.querySelector(".resetBtn");
const title = document.querySelector(".count-title");
const incBtn = document.querySelector(".incBtn");
const sound = document.querySelector(".audio");
const notafic = document.querySelector(".notafic");

let count = 0;

alarm = () => {
  notafic.play();
  return;
};

notafication = () => {
  if (count === 33) {
    alarm();
  } else if (count === 66) {
    alarm();
  } else if (count === 99) {
    alarm();
  }
};

incBtn.addEventListener("click", () => {
  count++;
  title.innerHTML = count;

  sound.pause();
  sound.play();

  notafication();

  return;
});

resetBtn.addEventListener("click", () => {
  const confirmAlert = confirm("RESET?");

  if (confirmAlert) {
    count = 0;
    title.innerHTML = count;
    alarm();
    console.log("yes");
  }
});
