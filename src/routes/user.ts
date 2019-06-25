import { Route } from '@nostjs/core';

export default class User extends Route {
  handle() {
    this.middleware(['authenticated'], () => {
      this.get(':id', (req, res) => {
        res.sendStatus(200);
      });
      
      this.post('/', (req, res) => {
        res.sendStatus(200);
      });
    });
  }
}