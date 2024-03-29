import { FillRect } from "./canvas/model/fillRect.js";
import { CanvasCollisionDetection2D } from "./canvas/environment/canvasCollisionDetection2D.js";
import { CollisionDetection2D } from "./canvas/model/collisionDetection/collisionDetection2D.js";

export class Pong extends FillRect {

    //property, ctor
    xVelocity;
    yVelocity;
    incrementingXVelocity = 0.2;
    incrementingYVelocity = 0.1;
    isFacingRight;

    constructor(ctx, x, y, xVelocity = 0, yVelocity = 0, height = 25, width = 25, fillStyle = "#000000", isFacingRight = true){
        super(ctx, x, y, height, width, fillStyle);
        this.xVelocity = xVelocity;
        this.yVelocity = yVelocity;
        this.isFacingRight = isFacingRight;
    }
    setXVelocity(val){
        this.xVelocity = val;
        return this;
    }

    setYVelocity(val){
        this.yVelocity = val;
        return this;
    }

    setIncrementingXVelocity(val){
        this.incrementingXVelocity = val;
        return this;
    }

    setIncrementingYVelocity(val){
        this.incrementingYVelocity = val;
        return this;
    }

    setSize(val){
        this.width = val;
        this.height = val;
        return this;
    }

    update() {
        this.draw();

        if(!CanvasCollisionDetection2D.verticalCollisionDetected(this, this.ctx)){
            this.y += this.yVelocity;
        }
        else{
            this.reverseYVelocity();
            this.incrementYVelocity();
        }

        if(!CanvasCollisionDetection2D.horizontalCollisionDetected(this, this.ctx)){
            this.x += this.xVelocity;
        }
        else{
            this.reverseXVelocity();
            this.incrementXVelocity();
        }
    }

    reverseXVelocity(){
        this.xVelocity = (this.xVelocity * -1);
    }

    reverseYVelocity(){
        this.yVelocity = (this.yVelocity * -1);
    }

    incrementXVelocity(){
        if(this.xVelocity < 0){
            this.xVelocity = (this.xVelocity - (this.incrementingXVelocity * -1));
        }
        else{
            this.xVelocity = (this.xVelocity + this.incrementingXVelocity);
        }
    }

    incrementYVelocity(){
        if(this.yVelocity < 0){
            this.yVelocity = (this.yVelocity - (this.incrementingYVelocity * -1));
        }
        else{
            this.yVelocity = (this.yVelocity + this.incrementingYVelocity);
        }
    }
}