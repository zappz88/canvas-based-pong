export class CollisionDetection {

    constructor(){}

    static xAxisCollisionDetected(sourceX, targetX){
        return sourceX === targetX;
    }

    static yAxisCollisionDetected(sourceY, targetY){
        return sourceY === targetY;
    }
}