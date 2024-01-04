import { Coordinates2D } from "./coordinates2D.js";

export class Coordinates3D extends Coordinates2D {

    z;

    constructor(x, y, z){
        super(x, y);
        this.z = z;
    }
}