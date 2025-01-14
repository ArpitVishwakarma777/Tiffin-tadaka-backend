const User = require("../models/user");
async function handlePostUserData(req, res) {
  const name = req.body.name;
  const uid = req.body.userId;
  const email = req.body.email;
  try {
    await User.create({
      uid: uid,
      name: name,
      email: email,
      address: "Harda , Madhya Pradesh",
      mobile: null,
      img: "https://res.cloudinary.com/drzc94rvk/image/upload/v1735234416/client_l1mfj3.jpg",
      subscription: [],
      cart: [],
    });
  } catch (e) {
    console.log("error on create user: ", e);
  }
}
async function handleGetUserData(req, res) {
  const { uid } = req.query;
  console.log("backend uid :", uid);

  const user = await User.findOne({ uid: uid });
  console.log("user : ",user);
  
  res.status(200).json(user);
}

module.exports = { handlePostUserData, handleGetUserData };
