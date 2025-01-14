const User = require("../models/user");
const handlePatchData = async (req, res) => {
  const { card, uid } = req.body;
  try {
    const response = await User.updateOne(
      { uid: uid },
      { $push: { addedCarts: card } }
    );
    res.status(200).json(response);
  } catch (e) {
    console.log("Error in posting(patch) cart : ", e);
  }
};
const handleRemoveCartData = async (req, res) => {
  const { item, uid } = req.body;

  try {
    const response = await User.updateOne(
      { uid: uid },
      { $pull: { addedCarts: item } }
    );
    res.status(200).json(response);
  } catch (e) {
    console.log("error on pulling cart : ", e);
  }
};
const handleRemoveAllCarts = async (req, res) => {
  const {uid}  = req.body;
  
  
  try {
    const response = await User.updateOne(
      { uid: uid }, // Filter condition
      { $set: { addedCarts: [] } } // `addedCarts` field ko empty array set karna
    );

    res.status(200).json(response);
  } catch (e) {
    console.log("error on removing all carts : ", e);
  }
};
module.exports = {
  handlePatchData,
  handleRemoveCartData,
  handleRemoveAllCarts,
};
