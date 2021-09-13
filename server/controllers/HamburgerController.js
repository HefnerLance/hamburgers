import { fakeDB } from '../db/FakeDB'
import BaseController from '../utils/BaseController'
export class HamburgerController extends BaseController {
  constructor() {
    super('api/Hamburgers')
    this.router
      .get('', this.getHamburgers)
  }

  async getHamburgers(req, res, next) {
    res.send(fakeDB.hamburgers)
  }
}
