function Config(gameId) {
  this.url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;
  this.addScore = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  this.getScore = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
}

export default Config;