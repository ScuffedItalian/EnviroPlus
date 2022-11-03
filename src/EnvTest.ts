import {Environment} from "https://deno.land/x/remapper@2.1.0/src/mod.ts" 


//Environments



export function envSetting(scale: number){
    const envSet = new Environment("Environment", "Contains")
    envSet.scale = [scale, scale, scale];
    envSet.push();

}