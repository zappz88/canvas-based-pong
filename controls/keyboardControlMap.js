import { KeyCode } from "./keyCode.js";

export class KeyboardControlMap {

    up;
    down;
    left;
    right;
    bump;

    constructor(up, down, left, right, bump){
        this.up = up;
        this.down = down;
        this.left = left;
        this.right = right;
        this.bump = bump;
    }

}