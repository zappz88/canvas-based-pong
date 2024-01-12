import { KeyCode } from "./keyCode.js";

export class KeyboardControlMap {

    up;
    down;
    left;
    right;
    action;

    constructor(up, down, left, right, action){
        this.up = up;
        this.down = down;
        this.left = left;
        this.right = right;
        this.action = action;
    }

}