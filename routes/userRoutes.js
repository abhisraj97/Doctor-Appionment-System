const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDocotrsController,
  bookeAppointmnetController,
  bookingAvailabilityController,
  userAppointmentsController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

//router onject
const router = express.Router();

//routes
//routes
router.route('/login').post(loginController)


router.route('/register').post(registerController)

//auth post
router.route('/getUserData').post(authMiddleware,authController);

//APply Doctor || POST
router.route('/apply-doctor').post(authMiddleware,applyDoctorController);


//Notifiaction  Doctor || POST
router.route(
  "/get-all-notification").post
  (authMiddleware,getAllNotificationController
);
//Notifiaction  Doctor || POST
router.route(
  "/delete-all-notification",
  ).post(authMiddleware,
  deleteAllNotificationController
);

//GET ALL DOC
router.route("/getAllDoctors").get(authMiddleware,getAllDocotrsController);

//BOOK APPOINTMENT
router.route("/book-appointment").post(authMiddleware,bookeAppointmnetController);

//Booking Avliability
router.route(
  "/booking-availbility",
  ).post
  (authMiddleware,bookingAvailabilityController
);

//Appointments List
router.route("/user-appointments").get(authMiddleware,userAppointmentsController);

module.exports = router;
