import { StrokeRect } from "./canvas/model/strokeRect.js";
import { CanvasCollisionDetection2D } from "./canvas/environment/canvasCollisionDetection2D.js";
import { CollisionDetection2D } from "./canvas/model/collisionDetection/collisionDetection2D.js";

export class Paddle extends StrokeRect {

    //property, ctor
    xVelocity;
    yVelocity;
    keyboardControlMap;

    constructor(ctx, x, y, xVelocity = 0, yVelocity = 0, height = 50, width = 25, strokeStyle = "#000000", keyboardControlMap){
        super(ctx, x, y, height, width, strokeStyle);
        this.xVelocity = xVelocity;
        this.yVelocity = yVelocity;
        this.keyboardControlMap = keyboardControlMap;
    }

    setXVelocity(val){
        this.xVelocity = val;
        return this;
    }

    setYVelocity(val){
        this.yVelocity = val;
        return this;
    }

    update() {
        this.draw();

        if(!CanvasCollisionDetection2D.verticalCollisionDetected(this, this.ctx)){
            this.y += this.yVelocity;
        }
        else{
            this.yVelocity = 0;
        }

        if(!CanvasCollisionDetection2D.horizontalCollisionDetected(this, this.ctx)){
            this.x += this.xVelocity;
        }
        else{
            this.xVelocity = 0;
        }
    }

    //actions

    move(event, velocity){
        switch(event.code){
            case this.keyboardControlMap.up:
                // console.log("ArrowUp");
                this.setYVelocity((-1 * velocity));
                break;
            case this.keyboardControlMap.down:
                // console.log("ArrowDown");
                this.setYVelocity(velocity);
                break;
        }
    }

    stop(event){
        switch(event.code){
            case this.keyboardControlMap.up:
                // console.log("ArrowUp");
                this.setYVelocity(0);
                break;
            case this.keyboardControlMap.down:
                // console.log("ArrowDown");
                this.setYVelocity(0);
                break;
        }
    }
}