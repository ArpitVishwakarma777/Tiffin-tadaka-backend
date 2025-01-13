const Contact = require("../models/contact");
async function handleGetContactData(req, res) {
  const response = await Contact.find({});
  res.status(200).json(response);
}
async function handlePostContactData(req, res) {
  const { address, mobile } = req.body;
  const data = Contact.create({
    address: "Pratap Colony, Harda, Madhya Pradesh - 461331",
    phone: 8103137309,
  });
}

module.exports = { handleGetContactData, handlePostContactData };
