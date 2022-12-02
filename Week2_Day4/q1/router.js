const express = require("express");
const handlers = require("./routeHandlers");
const router = express.Router();

router.post("/:filename", handlers.postHandler);
router.get("/:filename", handlers.getHandler);
router.put("/:filename", handlers.putHandler);
router.delete("/:filename", handlers.deleteHandler);

module.exports = router;
