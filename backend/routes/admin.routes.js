const { authJwt, verifySignUp } = require("../middleware");
const adminController = require('../controllers').main


module.exports = function (app) {

  /**
   * Users routes
   */
  app.get("/main/tickers", adminController.getTickers);
};
