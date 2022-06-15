import Config from './config.js';

export default class {
  constructor() {
    this.gameId = 'BkcmLXzTh65nLmXl2EpV';
    this.config = new Config(this.gameId);
  }

  async addScore({ user, score }) {
    this.config.addScore.body = JSON.stringify({ user, score });
    const data = await fetch(this.config.url, this.config.addScore);
    return data.json();
  }

  async getScore() {
    const data = await fetch(this.config.url, this.config.getScore);
    return data.json();
  }
}
