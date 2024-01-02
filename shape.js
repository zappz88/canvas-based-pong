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

    getXRightBound(){
        return this.x + this.width;
    }

    getXLeftBound(){
        return this.x;
    }

    getYTopBound(){
        return this.y;
    }

    getYBottomBound(){
        return this.y + this.height;
    }
}