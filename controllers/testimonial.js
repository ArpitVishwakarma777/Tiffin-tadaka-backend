const TESTIMONIAL = require("../models/testimonial");

async function handleGetTestimonialUserData(req, res) {
  try {
    const data = await TESTIMONIAL.find({});
    // console.log(data);

    res.status(200).json(data);
  } catch (e) {
    console.log("Error on fetching testimonial data: ", e);
    res.status(500).send({ error: "Failed to fetch data" });
  }
}


module.exports = { handleGetTestimonialUserData };
