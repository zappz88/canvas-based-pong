import { FillShape } from "./fillShape.js";

export class FillRect extends FillShape {

    degree;
    
    constructor(ctx, x, y, height = 25, width = 50, fillStyle = "#000000"){
        super(ctx, x, y, height, width, fillStyle);
        this.degree = 0;
    }

    setDegree(val){
        this.degree = val;
        return this;
    }

    draw(){
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    rotate(degree){
        this.ctx.save();
        this.degree = (this.degree + degree) % 360;
        const rad = this.degree * (Math.PI / 180);
        this.ctx.translate(this.x, this.y);
        this.ctx.rotate(rad);
        this.ctx.fillRect((-this.width / 2), (-this.height / 2), this.width, this.height);
        this.ctx.resetTransform();
        this.ctx.restore();
    }
}