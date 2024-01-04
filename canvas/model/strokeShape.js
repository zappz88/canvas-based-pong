import { Shape } from "./shape.js";

export class StrokeShape extends Shape {

    strokeStyle;

    constructor(ctx, x, y, height = 100, width = 200, strokeStyle = "#000000"){
        super(ctx, x, y, height, width);
        this.strokeStyle = strokeStyle;
    }

    setStrokestyle(val){
        this.strokeStyle = val;
        return this;
    }

    clear(){
        this.ctx.clearRect(this.x, this.y, this.width, this.height);
    }
}