const express = require("express");
const {getAll,addNew,getOne, updateOne, deleteOne} = require("../controller/controllera"); 
const router = express.Router();
router.route("/").get(getAll);
router.route("/").post(addNew);
router.route("/:id").get(getOne);
router.route("/:id").put(updateOne);
router.route("/:id").delete(deleteOne);
module.exports = router