import CallApi  from './api.js';

const addScoreForm = document.querySelector('#add-score-form');
const refereshButton = document.getElementById('referesh-button');

const submitScore = (ev) => {
  ev.preventDefault();
  const api = new CallApi();
  const formInputs = Object.fromEntries(new FormData(addScoreForm).entries());
  api.addScore(formInputs).then(data => {
    alert(data.result);
  })
  .catch(err => console.log(err))
  .finally(() => {
    addScoreForm.reset();
  });
}

const getScores = (ev) => {
  console.log(ev);
}

export default () => {
  addScoreForm.addEventListener('submit', submitScore);

  refereshButton.addEventListener('click', getScores)
}