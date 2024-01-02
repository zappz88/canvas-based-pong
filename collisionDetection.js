export class CollisionDetection {

    constructor(){}

    static xAxisCollisionDetected(source, target){
        return source.x === target.x;
    }

    static yAxisCollisionDetected(source, target){
        return source.y === target.y;
    }
}