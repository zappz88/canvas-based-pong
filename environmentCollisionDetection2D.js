export class EnvironmentCollisionDetection2D {

    constructor(){}

    static leftCollisionDetected(source, ctx){
        return (source.x + source.xVelocity) <= -0.1;
    }

    static rightCollisionDetected(source, ctx){
        return ((source.x + source.width) + source.xVelocity) >= (ctx.canvas.width + 1);
    }

    static horizontalCollisionDetected(source, ctx){
        return this.leftCollisionDetected(source, ctx) || this.rightCollisionDetected(source, ctx);
    }

    static topCollisionDetected(source, ctx){
        return (source.y + source.yVelocity) <= -0.1;
    }

    static bottomCollisionDetected(source, ctx){
        return ((source.y + source.height) + source.yVelocity) >= (ctx.canvas.height + 1);
    }

    static verticalCollisionDetected(source, ctx){
        return this.topCollisionDetected(source, ctx) || this.bottomCollisionDetected(source, ctx);
    }
    
    static collisionDetected(source, ctx){
        return this.horizontalCollisionDetected(source, ctx) || this.verticalCollisionDetected(source, ctx);
    }
}