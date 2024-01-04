import { Point2D } from "../../geometry/point2D.js";

export class Shape {

    ctx;
    x;
    y;
    height;
    width;
    

    constructor(ctx, x, y, height = 100, width = 200){
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }

    setCTX(val){
        this.ctx = val;
        return this;
    }

    setX(val){
        this.x = val;
        return this;
    }

    setY(val){
        this.y = val;
        return this;
    }

    setHeight(val){
        this.height = val;
        return this;
    }

    setWidth(val){
        this.width = val;
        return this;
    }

    getTopLeftCoord(){
        const x = this.x;
        const y = this.y;
        return new Point2D(x, y);
    }

    getTopRightCoord(){
        const x = (this.x + this.width);
        const y = this.y;
        return new Point2D(x, y);
    }

    getBottomRightCoord(){
        const x = (this.x + this.width);
        const y = (this.y + this.height);
        return new Point2D(x, y);
    }

    getBottomLeftCoord(){
        const x = this.x;
        const y = (this.y + this.height);
        return new Point2D(x, y);
    }

    getCenterCoord(){
        const x = (this.x + (this.width / 2));
        const y = (this.y + (this.height / 2));
        return new Point2D(x, y);
    }

    getCoordinates(){
        //clockwise from canvas origin x,y ie topleft
        //[topleft, topright, bottomright, bottomleft, center]
        return [this.getTopLeftCoord(), this.getTopRightCoord(), this.getBottomRightCoord(), this.getBottomLeftCoord(), this.getCenterCoord()];
    }
}