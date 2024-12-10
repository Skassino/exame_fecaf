import { Router } from "express";
import { BoardController } from "../controllers/boardController";

const router = Router();
const boardController = new BoardController();

router.post("/boards", boardController.addBoard.bind(boardController));
router.get("/boards", boardController.getAllBoards.bind(boardController));

export default router;
