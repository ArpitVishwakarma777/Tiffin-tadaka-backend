const { handleGetTestimonialUserData } = require("../controllers/testimonial");
const  handlePatchProfileData = require("../controllers/profile.js");
const  {handleGetContactData,handlePostContactData} = require("../controllers/contactdata.js");

const {
  handlePost,
  handleGetMonthlyData,
  handleGetWeeklyData,
  handleGetCardData,
  handlePetchOrderdata
} = require("../controllers/menu");
const{ handlePostUserData,handleGetUserData }= require("../controllers/signup.js");
const express = require("express");
const { createOrder, verifyPayment } = require("../controllers/payment.js");
const router = express.Router();
router.get("/testimonial/customer", handleGetTestimonialUserData);
router.get("/card", handleGetCardData);
router.patch('/profile',handlePatchProfileData)

const menuDataRouter = express.Router();
menuDataRouter.patch('/order',handlePetchOrderdata)
menuDataRouter.post("/card", handlePost);
menuDataRouter.get("/oneDayCard", handleGetCardData);
menuDataRouter.get("/weeklyCard", handleGetWeeklyData);
menuDataRouter.get("/monthlyCard", handleGetMonthlyData);

//order  payment 
menuDataRouter.post('/createOrder',createOrder)
menuDataRouter.post('/verifyPayment',verifyPayment)

const signUpRouter = express.Router()
signUpRouter.post("/signUp", handlePostUserData);
signUpRouter.get('/login',handleGetUserData)

const contactRouter = express.Router()
contactRouter.get('/data',handleGetContactData)
// contactRouter.post('/create',handlePostContactData)
module.exports = { router, menuDataRouter,contactRouter,signUpRouter };


