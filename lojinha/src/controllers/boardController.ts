import { Request, Response } from "express";
import { BoardRepository } from "../repositories/boardRepository";

const boardRepo = new BoardRepository();

export class BoardController {
  public addBoard(req: Request, res: Response): void {
    const { quantity, sizeFeet, color } = req.body;
    const newBoard = boardRepo.addBoard({ quantity, sizeFeet, color });
    res.status(201).json(newBoard);
  }

  public getAllBoards(req: Request, res: Response): void {
    const boards = boardRepo.getAllBoards();
    res.status(200).json(boards);
  }
}
