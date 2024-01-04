import { CollisionDetection } from "./collisionDetection.js";
import { Coordinates2D } from "./coordinates2D.js";

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

    static getLeftCollisionDetected(source, target){
        if(this.leftCollisionDetected(source, target)){
            return {
                source: new Coordinates2D(source.x, source.y),
                target: new Coordinates2D(target.x, target.y)
            }
        }
    }

    static getRightCollisionDetected(source, target){
        if(this.rightCollisionDetected(source, target)){
            return {
                source: new Coordinates2D(source.x, source.y),
                target: new Coordinates2D(target.x, target.y)
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

    static getTopCollisionDetected(source, target){
        if(this.topCollisionDetected(source, target)){
            return {
                source: new Coordinates2D(source.x, source.y),
                target: new Coordinates2D(target.x, target.y)
            }
        }
    }

    static getBottomCollisionDetected(source, target){
        if(this.bottomCollisionDetected(source, target)){
            return {
                source: new Coordinates2D(source.x, source.y),
                target: new Coordinates2D(target.x, target.y)
            }
        }
    }

    static #isWithinXRange(source, target){
        return ((source.x + source.width) >= target.x) && 
               ((source.x <= target.x) || ((source.x >= target.x) && (source.x <= (target.x + target.width)))); 
    }

    static #isWithinYRange(source, target){
        return ((source.y + source.height) >= target.y) && 
               ((source.y <= target.y) || ((source.y >= target.y) && (source.y <= (target.y + target.height))));
    }

}