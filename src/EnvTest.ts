import {Environment, Vec3} from "https://deno.land/x/remapper@2.1.0/src/mod.ts" 


//Environments



export function envSetting(scale: Vec3){
    const envSet = new Environment("Environment", "Contains")
    envSet.scale = scale
    envSet.push();

}