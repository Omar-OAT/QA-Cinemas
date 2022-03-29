"use strict";
const router = require("express").Router();
const { Discussion } = require("../config/db");

router.get("/getAll", async (req, res, next) => {
  try {
    const discussion = await Discussion.find();
    return res.json(discussion);
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
});

router.get("/get/:id", async ({ params: { id } }, res, next) => {
  try {
    const found = await Discussion.findById(id);
    if (!found)
      return next({
        status: 404,
        message: `No discussion found with id: ${id}`,
      });
    return res.send(found);
  } catch (err) {
    return next({ status: 400, message: err.message });
  }
});

router.post("/create", ({ body: discussion }, res, next) => {
  new Discussion(discussion)
    .save()
    .then(() => res.status(201).send("Successfully created a discussion"))
    .catch((err) => next({ status: 400, message: err.message }));
});

router.put(
  "/replace/:id",
  async ({ query: newDiscussion, params: { id } }, res, next) => {
    try {
      await Discussion.findByIdAndUpdate(id, newDiscussion);
      const updatedDiscussion = await Discussion.findById(id);
      return res.status(202).send(updatedDiscussion);
    } catch (error) {
      return next({ status: 400, message: error.message });
    }
  }
);

router.delete("/remove/:id", ({ params: { id } }, res, next) => {
  Discussion.findByIdAndDelete(id, (err) => {
    if (err) return next({ status: 400, message: err.message });
    return res.sendStatus(204);
  });
});

module.exports = router;
