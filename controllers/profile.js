const User = require("../models/user");
async function handlePatchProfileData(req, res) {
  const { mobile, address, uid, profileImage } = req.body;
  
 if(uid) {await User.updateOne(
    { uid: uid },
    {
      $set: {
        mobile: mobile,
        address: address,
        img: profileImage,
      },
    }
  );}
}

module.exports = handlePatchProfileData;
