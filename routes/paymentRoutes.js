"use strict";
const router = require("express").Router();
const { Payment } = require("../config/db");

router.get("/getAll", async (req, res, next) => {
  try {
    const payment = await Payment.find();
    return res.json(payment);
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
});

router.get("/get/:id", async ({ params: { id } }, res, next) => {
  try {
    const found = await Payment.findById(id);
    if (!found)
      return next({
        status: 404,
        message: `No payment found with id: ${id}`,
      });
    return res.send(found);
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
});

router.post("/create", ({ body: payment }, res, next) => {
  new Payment(payment)
    .save()
    .then(() => res.status(201).send("Successfully created a payment"))
    .catch((err) => next({ status: 400, message: err.message }));
});

router.put(
  "/replace/:id",
  async ({ query: newpayment, params: { id } }, res, next) => {
    try {
      await Payment.findByIdAndUpdate(id, newpayment);
      const updatedpayment = await Payment.findById(id);
      return res.status(202).send(updatedpayment);
    } catch (error) {
      return next({ status: 400, message: error.message });
    }
  }
);

router.delete("/remove/:id", ({ params: { id } }, res, next) => {
  Payment.findByIdAndDelete(id, (err) => {
    if (err) return next({ status: 400, message: err.message });
    return res.sendStatus(204);
  });
});

module.exports = router;
