import express from "express"
import ControllerUser from "../controller/user.js"

const router = express.Router()

router.get("/buscar", ControllerUser.Buscar)
router.get("/detalhe", ControllerUser.Detalhe)
router.post("/criar", ControllerUser.Criar)
router.put("/alterar", ControllerUser.Alterar)
router.delete("/deletar", ControllerUser.Deletar)
router.post("/login", ControllerUser.Login)

export default router