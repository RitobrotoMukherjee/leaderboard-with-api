import CallApi from './api.js';
import ui from './ui.js';

const addScoreForm = document.querySelector('#add-score-form');
const refereshButton = document.getElementById('referesh-button');
const snackBar = document.getElementById('snackbar');

const submitScore = (ev) => {
  ev.preventDefault();
  const api = new CallApi();
  const formInputs = Object.fromEntries(new FormData(addScoreForm).entries());
  const snackBarClasses = snackBar.classList;
  api.addScore(formInputs)
    .then((data) => {
      snackBar.innerText = data.result;
      snackBarClasses.add('show');
      setTimeout(() => {
        snackBarClasses.remove('show');
      }, 3000);
    })
    .catch((err) => err)
    .finally(() => {
      addScoreForm.reset();
    });
};

const getScores = () => {
  const api = new CallApi();
  const loadingDiv = document.getElementById('loading-div');
  loadingDiv.style = 'display:block;';
  api.getScore()
    .then((data) => ui(data.result))
    .catch((err) => err)
    .finally(() => {
      loadingDiv.style = 'display:none;';
    });
};

export default () => {
  addScoreForm.addEventListener('submit', submitScore);

  refereshButton.addEventListener('click', getScores);
};