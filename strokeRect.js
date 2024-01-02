import { StrokeShape } from "./strokeShape.js";

export class StrokeRect extends StrokeShape {

    constructor(ctx, x, y, height = 25, width = 50, strokeStyle = "#000000"){
        super(ctx, x, y, height, width, strokeStyle);
    }

    draw(){
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
}