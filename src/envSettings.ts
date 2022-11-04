import {Environment, Vec3} from "https://deno.land/x/remapper@2.1.0/src/mod.ts" 




/**
 * @param disabled: true/false, disabled the ENTIRE environment.
 * @param scale: A vector 3 scale, scales the ENTIRE environment, set all to 1 for no effect i.e [3, 3, 3]
 * @param position: A vector 3 position, set the ENTIRE environment to a certain position, set all to 0 for no effect i.e [20, 60, 40] (MAKE SURE DISABLED IS SET TO FALSE!!!!)
*/


export function envSettings(disabled: boolean, scale: Vec3, position: Vec3){
    const envS = new Environment("Environment", "Contains")

    if(disabled === true){
        envS.position = [0, -999999, 0]
    }

    envS.scale = scale
    envS.position = position
    envS.push();



}



