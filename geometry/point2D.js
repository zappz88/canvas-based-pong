export class Point2D {

    x;
    y;

    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    setX(val){
        this.x = val;
        return this;
    }

    setY(val){
        this.y = val;
        return this;
    }
}