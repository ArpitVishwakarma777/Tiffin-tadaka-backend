const Overview = require("../models/overviewModule");
async function handlePostOverview(req, res) {
  const { overviewType, overviewText, imgsrc } = req.body;
  const response = await Overview.create({
    overviewType,
    overviewText,
    imgsrc,
  })
    .then(() => {
      res.status(201).json({ message: "Overview created successfully" });
    })
    .catch((e) => {
      res.status(404).json({
        message: "Error creating overview",
      });
    });
}
async function handleGetOverview(req, res) {
    try {
        const data = await Overview.find({});
       ;
    
        res.status(200).json(data);
      } catch (e) {
        console.log("Error on fetching testimonial data: ", e);
        res.status(500).send({ error: "Failed to fetch data" });
      }
}
module.exports = { handlePostOverview, handleGetOverview };
