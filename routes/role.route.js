const express = require("express")
const router = express.Router()

const RoleController = require("../controller/role.controller")

router.post("/", RoleController.roleAdd)

module.exports = router;