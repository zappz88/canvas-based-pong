import { FillRect } from "./fillRect.js";
import { EnvironmentCollisionDetection2D } from "./environmentCollisionDetection2D.js";

export class Pong extends FillRect {

    //property, ctor
    xVelocity;
    yVelocity;
    isFacingRight;
    incrementingXVelocity = 0.2;
    incrementingYVelocity = 0.1;
    rotationDegree = 0;

    constructor(ctx, x, y, xVelocity = 0, yVelocity = 0, height = 25, width = 25, fillStyle = "#000000", isFacingRight = true){
        super(ctx, x, y, height, width, fillStyle);
        this.xVelocity = xVelocity;
        this.yVelocity = yVelocity;
        this.isFacingRight = isFacingRight;
        this.rotationDegree = 0;
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

    setRotationDegree(val){
        this.rotationDegree = val;
        return this;
    }

    update() {
        this.draw();
        // this.rotate();

        if(!EnvironmentCollisionDetection2D.verticalCollisionDetected(this, this.ctx)){
            this.y += this.yVelocity;
        }
        else{
            // this.yVelocity = (this.yVelocity * -1);
            if(this.yVelocity < 0){
                this.yVelocity = ((this.yVelocity - this.incrementingYVelocity) * -1);
            }
            else{
                this.yVelocity = ((this.yVelocity + this.incrementingYVelocity) * -1);
            }
        }

        if(!EnvironmentCollisionDetection2D.horizontalCollisionDetected(this, this.ctx)){
            this.x += this.xVelocity;
        }
        else{
            // this.xVelocity = (this.xVelocity * -1);
            if(this.xVelocity < 0){
                this.xVelocity = ((this.xVelocity - this.incrementingXVelocity) * -1);
            }
            else{
                this.xVelocity = ((this.xVelocity + this.incrementingXVelocity) * -1);
            }
        }
    }

    //actions

    stop(){
        this.setXVelocity(0);
        this.setYVelocity(0);
    }

    rotate(){

        // Store the current context state (i.e. rotation, translation etc..)
        this.ctx.save()

        this.rotationDegree = (this.rotationDegree + 30) % 360;

        //Convert degrees to radian 
        const rad = this.rotationDegree * (Math.PI / 180);

        //Set the origin to the center of the image
        this.ctx.translate(this.x, this.y);

        //Rotate the canvas around the origin
        this.ctx.rotate(rad);

        this.ctx.fillRect((-this.width / 2), (-this.height / 2), this.width, this.height);
        
        this.ctx.resetTransform();

        // Restore canvas state as saved from above
        this.ctx.restore();
    }
}