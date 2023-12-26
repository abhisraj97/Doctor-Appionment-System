const express = require("express");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorAppointmentsController,
  updateStatusController,
} = require("../controllers/doctorCtrl");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

//POST SINGLE DOC INFO
router.route("/getDoctorInfo").post(authMiddleware,getDoctorInfoController);

//POST UPDATE PROFILE
router.route("/updateProfile").post(authMiddleware, updateProfileController);

//POST  GET SINGLE DOC INFO
router.route("/getDoctorById").post(authMiddleware,  getDoctorByIdController);

//GET Appointments
router.route(
  "/doctor-appointments").get( authMiddleware,
  doctorAppointmentsController
);

//POST Update Status
router.route("/update-status").post( authMiddleware, updateStatusController);

module.exports = router;
