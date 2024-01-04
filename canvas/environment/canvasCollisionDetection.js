export class CanvasCollisionDetection {

    constructor(){}

    static leftCollisionDetected(x, ctx){
        return x <= 0;
    }

    static rightCollisionDetected(x, ctx){
        return x >= ctx.canvas.width;
    }

    static horizontalCollisionDetected(x, ctx){
        return this.leftCollisionDetected(x, ctx) || this.rightCollisionDetected(x, ctx);
    }

    static topCollisionDetected(y, ctx){
        return y <= 0;
    }

    static bottomCollisionDetected(y, ctx){
        return y >= ctx.canvas.height;
    }

    static verticalCollisionDetected(y, ctx){
        return this.topCollisionDetected(y, ctx) || this.bottomCollisionDetected(y, ctx);
    }
    
    static collisionDetected(x, y, ctx){
        return this.horizontalCollisionDetected(x, ctx) || this.verticalCollisionDetected(y, ctx);
    }
}