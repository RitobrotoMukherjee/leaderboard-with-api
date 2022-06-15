const leaderList = document.getElementById('score-list');
export default (leaderBoardList) => {
    leaderList.innerHTML = leaderBoardList.map(({ user, score }) =>
        `<li class="score">
        <p>${user}: ${+score > 0 ? +score : 0}</p>
    </li>`
    ).join(' ');
    return;
}