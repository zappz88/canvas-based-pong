import { FillShape } from "./fillShape.js";

export class FillRect extends FillShape {

    constructor(ctx, x, y, height = 25, width = 50, fillStyle = "#000000"){
        super(ctx, x, y, height, width, fillStyle);
    }

    draw(){
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}