const User = require("../models/user");
async function handleManageOrders(req, res) {
  try {
    const { uid } = req.body;
   const response =  await User.updateOne(
      { uid },
      {
        $set: {
          subscription: [],
        },
      }
    );
    res.status(200).json({ message: "Order managed successfully" })
 
  } catch (e) {
    console.log(e);
  }
}
module.exports = {handleManageOrders}
