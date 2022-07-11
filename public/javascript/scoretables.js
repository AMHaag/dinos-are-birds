let userTable = document.getElementById('userTable');
let highTable = document.getElementById('highTable');
let user_id = document.getElementById('user-id').innerText;

function writeUserScores(data) {
  data.forEach((cv) => {
    let userTr = document.createElement('tr');
    userTr.innerHTML = `<td>${cv.score}</td>`;
    userTable.append(userTr);
  });
}

function writeTopScores(data) {
  data.forEach((cv) => {
    let topTr = document.createElement('tr');
    topTr.innerHTML = `<td><img id="avatar" src="/images/GAMER${cv.user.avatar_id}.png" alt="avatar"></td>
      <td>${cv.user.username}</td>
      <td>${cv.score}</td>`;
    highTable.append(topTr);
  });
}

fetch(`/api/scores/${user_id}`)
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    writeUserScores(res);
  });

fetch('/api/scores/top/50', {})
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
    writeTopScores(res);
  });

if (!user_id) {
  userTable.style.display = 'none';
}
