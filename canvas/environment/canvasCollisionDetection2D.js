import { Point2D } from "../../geometry/point2D.js";
import { CanvasCollisionDetection } from "./canvasCollisionDetection.js";

export class CanvasCollisionDetection2D extends CanvasCollisionDetection {

    constructor(){
        super();
    }

    static leftCollisionDetected(source, ctx){
        const x = (source.x + source.xVelocity) + 0.1;
        return super.leftCollisionDetected(x, ctx);
    }

    static rightCollisionDetected(source, ctx){
        const x = ((source.x + source.width) + source.xVelocity) - 1;
        return super.rightCollisionDetected(x, ctx);
    }

    static horizontalCollisionDetected(source, ctx){
        return this.leftCollisionDetected(source, ctx) || this.rightCollisionDetected(source, ctx);
    }

    static topCollisionDetected(source, ctx){
        const y = (source.y + source.yVelocity) + 0.1;
        return super.topCollisionDetected(y, ctx);
    }

    static bottomCollisionDetected(source, ctx){
        const y = ((source.y + source.height) + source.yVelocity) - 1;
        return super.bottomCollisionDetected(y, ctx);
    }

    static verticalCollisionDetected(source, ctx){
        return this.topCollisionDetected(source, ctx) || this.bottomCollisionDetected(source, ctx);
    }
    
    static collisionDetected(source, ctx){
        return this.horizontalCollisionDetected(source, ctx) || this.verticalCollisionDetected(source, ctx);
    }
}