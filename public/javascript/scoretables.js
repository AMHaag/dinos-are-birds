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

//example data
let userData = [
  {
    id: 32,
    score: 959175,
    user_id: 1,
  },
  {
    id: 22,
    score: 946065,
    user_id: 1,
  },
  {
    id: 39,
    score: 935826,
    user_id: 1,
  },
  {
    id: 101,
    score: 896093,
    user_id: 1,
  },
  {
    id: 25,
    score: 873274,
    user_id: 1,
  },
  {
    id: 2,
    score: 829525,
    user_id: 1,
  },
  {
    id: 99,
    score: 796608,
    user_id: 1,
  },
  {
    id: 55,
    score: 743632,
    user_id: 1,
  },
];
let topData = [
  {
    id: 32,
    score: 959175,
    user_id: 1,
    user: {
      id: 1,
      avatar_id: 2,
      username: 'littlefoot',
    },
  },
  {
    id: 22,
    score: 946065,
    user_id: 1,
    user: {
      id: 1,
      avatar_id: 2,
      username: 'littlefoot',
    },
  },
  {
    id: 39,
    score: 935826,
    user_id: 1,
    user: {
      id: 1,
      avatar_id: 2,
      username: 'littlefoot',
    },
  },
  {
    id: 101,
    score: 896093,
    user_id: 1,
    user: {
      id: 1,
      avatar_id: 2,
      username: 'littlefoot',
    },
  },
];

// writeTopScores(topData);
writeHighScoreTable(userData, topData);
