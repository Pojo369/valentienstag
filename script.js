const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const actions = document.getElementById("actions");
const result = document.getElementById("result");

const moveNoButton = () => {
  const containerRect = actions.getBoundingClientRect();
  const buttonRect = noButton.getBoundingClientRect();

  const maxX = containerRect.width - buttonRect.width;
  const maxY = containerRect.height - buttonRect.height;

  const randomX = Math.max(0, Math.random() * maxX);
  const randomY = Math.max(0, Math.random() * maxY);

  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
};

noButton.addEventListener("mouseenter", moveNoButton);
noButton.addEventListener("touchstart", moveNoButton);

yesButton.addEventListener("click", () => {
  result.hidden = false;
  yesButton.disabled = true;
  noButton.disabled = true;
  yesButton.textContent = "Danke! 💞";
});
