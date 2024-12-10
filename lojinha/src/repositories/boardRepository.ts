import { Board } from "../models/board";

export class BoardRepository {
  private boards: Board[] = [];
  private nextId = 1;

  public addBoard(board: Omit<Board, "id">): Board {
    const newBoard = { id: this.nextId++, ...board };
    this.boards.push(newBoard);
    return newBoard;
  }

  public getAllBoards(): Board[] {
    return this.boards;
  }
}
