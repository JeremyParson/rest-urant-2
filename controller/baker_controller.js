const { Router } = require("express");
const router = Router();
const Baker = require("../models/baker");
const bakerSeedData = require("../seeds/baker");

router.get("/data/seed", async (req, res) => {
  await Baker.insertMany(bakerSeedData).then(res.redirect("/breads"));
});

// Index:
router.get("/", async (req, res) => {
  var bakers = await Baker.find().populate("breads");
  res.send(bakers);
});

// Show:
router.get("/:id", async (req, res) => {
  var baker = await Baker.findById(req.params.id).populate({
    path: "breads",
    options: { limit: 2 },
  });
  res.render("bakerShow", { baker });
});

// delete
router.delete("/:id", async (req, res) => {
  var deletedBaker = await Baker.findByIdAndDelete(req.params.id);
  res.status(303).redirect("/breads");
});

// in the new route
router.get("/new", async (req, res) => {
  var foundBakers = await Baker.find();
  res.render("new", {
    bakers: foundBakers,
  });
});

module.exports = router;
