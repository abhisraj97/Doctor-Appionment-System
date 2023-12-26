const express = require("express");
const {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController,
} = require("../controllers/adminCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//GET METHOD || USERS
router.route("/getAllUsers", ).get( authMiddleware, getAllUsersController);

//GET METHOD || DOCTORS
router.route("/getAllDoctors", ).get(authMiddleware,getAllDoctorsController);

//POST ACCOUNT STATUS
router.route(
  "/changeAccountStatus").post(authMiddleware,
  changeAccountStatusController
);

module.exports = router;
