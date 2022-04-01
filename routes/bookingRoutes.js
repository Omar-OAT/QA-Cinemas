const router = require("express").Router();
const { Booking } = require("../config/db");

router.get("/getAll", async (req, res, next) => {
  try {
    const booking = await Booking.find();
    return res.json(booking);
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
});

router.get("/get/:id", async ({ params: { id } }, res, next) => {
  try {
    const found = await Booking.findById(id);
    if (!found)
      return next({ status: 404, message: `No booking found with id: ${id}` });
    return res.send(found);
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
});

router.post("/create", ({ body: booking }, res, next) => {
  new Booking(booking)
    .save()
    .then(() => res.status(201).send("Successfully created a booking"))
    .catch((err) => next({ status: 400, message: err.message }));
});

router.put(
  "/replace/:id",
  async ({ query: newbooking, params: { id } }, res, next) => {
    try {
      await Booking.findByIdAndUpdate(id, newbooking);
      const updatedbooking = await Booking.findById(id);
      return res.status(202).send(updatedbooking);
    } catch (error) {
      return next({ status: 400, message: error.message });
    }
  }
);

router.delete("/remove/:id", ({ params: { id } }, res, next) => {
  Booking.findByIdAndDelete(id, (err) => {
    if (err) return next({ status: 400, message: err.message });
    return res.sendStatus(204);
  });
});

module.exports = router;
