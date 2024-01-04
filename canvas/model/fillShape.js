import { Shape } from "./shape.js";

export class FillShape extends Shape {

    fillStyle;

    constructor(ctx, x, y, height = 100, width = 200, fillStyle = "#000000"){
        super(ctx, x, y, height, width);
        this.fillStyle = fillStyle;
    }

    setFillstyle(val){
        this.fillStyle = val;
        return this;
    }

    clear(){
        this.ctx.clearRect(this.x, this.y, this.width, this.height);
    }
}