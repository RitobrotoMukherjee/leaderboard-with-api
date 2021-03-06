const leaderList = document.getElementById('score-list');
export default (leaderBoardList) => {
  leaderList.innerHTML = leaderBoardList.map(({ user, score }, i) => `<li class="score score-items">
        <div class="serial"><p>${i + 1}</p></div>
        <div class="details"><p>${user}</p> <p>${+score}</p></div>
    </li>`).join(' ');
};