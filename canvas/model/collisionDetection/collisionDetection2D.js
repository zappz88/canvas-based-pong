import { CollisionDetection } from "./collisionDetection.js";
import { Point2D } from "../../../geometry/point2D.js";

export class CollisionDetection2D extends CollisionDetection {

    constructor(){
        super();
    }

    static leftCollisionDetected(source, target){
        return (source.x >= target.x) && 
               (source.x <= (target.x + target.width)) && 
               this.#isWithinYRange(source, target);
    }

    static rightCollisionDetected(source, target){
        return ((source.x + source.width) >= target.x) && 
               ((source.x + source.width) <= (target.x + target.width)) &&
               this.#isWithinYRange(source, target); 
    }

    static horizontalCollisionDetected(source, target){
        return this.leftCollisionDetected(source, target) || this.rightCollisionDetected(source, target);
    }

    static getLeftCollisionDetected(source, target){
        if(this.leftCollisionDetected(source, target)){
            return {
                source: new Point2D(source.x, source.y),
                target: new Point2D(target.x, target.y)
            }
        }
    }

    static getRightCollisionDetected(source, target){
        if(this.rightCollisionDetected(source, target)){
            return {
                source: new Point2D(source.x, source.y),
                target: new Point2D(target.x, target.y)
            }
        }
    }

    static getHorizontalCollisionDetected(source, target){
        if(this.horizontalCollisionDetected(source, target)){
            return {
                source: new Point2D(source.x, source.y),
                target: new Point2D(target.x, target.y)
            }
        }
    }

    static topCollisionDetected(source, target){
        return (source.y >= target.y) && 
               (source.y <= (target.y + target.height)) &&
               this.#isWithinXRange(source, target);
    }

    static bottomCollisionDetected(source, target){
        return ((source.y + source.height) >= target.y) && 
               ((source.y + source.height) <= (target.y + target.height)) &&
               this.#isWithinXRange(source, target);
    }

    static verticalCollisionDetected(source, target){
        return this.topCollisionDetected(source, target) || this.bottomCollisionDetected(source, target);
    }

    static getTopCollisionDetected(source, target){
        if(this.topCollisionDetected(source, target)){
            return {
                source: new Point2D(source.x, source.y),
                target: new Point2D(target.x, target.y)
            }
        }
    }

    static getBottomCollisionDetected(source, target){
        if(this.bottomCollisionDetected(source, target)){
            return {
                source: new Point2D(source.x, source.y),
                target: new Point2D(target.x, target.y)
            }
        }
    }

    static getVerticalCollisionDetected(source, target){
        if(this.verticalCollisionDetected(source, target)){
            return {
                source: new Point2D(source.x, source.y),
                target: new Point2D(target.x, target.y)
            }
        }
    }

    static collisionDetected(source, target){
        return this.horizontalCollisionDetected(source, target) || this.verticalCollisionDetected(source, target);
    }

    static getCollisionDetected(source, target){
        if(this.collisionDetected(source, target)){
            return {
                source: new Point2D(source.x, source.y),
                target: new Point2D(target.x, target.y)
            }
        }
    }

    static #isWithinXRange(source, target){
        return (((source.x + source.width) >= target.x) && (source.x <= target.x)) || 
               ((source.x <= (target.x + target.width)) && (source.x >= target.x)); 
    }

    static #isWithinYRange(source, target){
        return (((source.y + source.height) >= target.y) && (source.y <= target.y)) || 
               ((source.y <= (target.y + target.height)) && (source.y >= target.y));
    }
}