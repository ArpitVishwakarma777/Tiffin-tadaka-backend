const {
  TiffinOneDay,
  TiffinWeekly,
  TiffinMonthly,
} = require("../models/tiffinCategory");
const User = require("../models/user");
async function handleGetCardData(req, res) {
  try {
    const data = await TiffinOneDay.find({});
    res.status(200).json(data);
  } catch (e) {
    console.log("Error on fetching card data: ", e);
    res.status(500).send({ error: "Failed to fetch data" });
  }
}
async function handleGetWeeklyData(req, res) {
  try {
    const data = await TiffinWeekly.find({});
    // console.log(data);

    res.status(200).json(data);
  } catch (e) {
    console.log("Error on fetching card data: ", e);
    res.status(500).send({ error: "Failed to fetch data" });
  }
}
async function handleGetMonthlyData(req, res) {
  try {
    const data = await TiffinMonthly.find({});
    // console.log(data);

    res.status(200).json(data);
  } catch (e) {
    console.log("Error on fetching card data: ", e);
    res.status(500).send({ error: "Failed to fetch data" });
  }
}

async function handlePetchOrderdata(req, res) {
  const {
    uid,
    orderid,
    userAddress,
    startDate,
    endDate,
    orderSummary,
    paymentMethod,
  } = req.body;
console.log("hello order: ",orderid);

  if (uid) {
    const response = await User.updateOne(
      { uid: uid },
      {
        $push: {
          subscription: {
            orderid: orderid,
            userAddress: userAddress,
            startDate: startDate,
            endDate: endDate,
            orderSummary: orderSummary,
            paymentMethod: paymentMethod,
          },
        },
      }
    )
      .then(() => {
        res.status(200).send("Your order has been placed successfully. 🎉");
      })
      .catch((e) => {
        console.log("Error on patching order data on server: ", e);
      });
  }
}
async function handlePost(req, res) {
  try {
    await TiffinOneDay.create({
      id: "8",
      src: "https://res.cloudinary.com/drzc94rvk/image/upload/v1735837797/Chili_Paneer_Fried_Rice_-_NISH_KITCHEN_ki5sjg.jpg",
      title: "Paneer Butter Masala",
      text: [
        {
          title: "Home-Style Meals  Special Day – Just ₹99 for a meal",
          body: "Tired of cooking? Let us take care of your meals with our home-style tiffin service!",
          menu: ["Rich and creamy paneer curry served", "With basmati rice"],
        },
      ],
      price: 99,
    });
  } catch (e) {
    console.log("post error: ", e);
  }
  return res.status(201).send("short Url is created");
}
module.exports = {
  handlePost,
  handleGetCardData,
  handlePetchOrderdata,
  handleGetWeeklyData,
  handleGetMonthlyData,
};
