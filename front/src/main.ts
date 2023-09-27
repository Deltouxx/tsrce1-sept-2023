import { Board } from "./Board";
import "./style.css";

const board = new Board();
board.setConfig({
  samples: 10,
  multiplicationFactor: 2,
});
board.draw();
