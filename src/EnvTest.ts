import {Environment} from "https://deno.land/x/remapper@2.1.0/src/mod.ts" // MAKE SURE TO USE THE LATEST REMAPPER VERSION HERE

export function envT(scale: number){
    const enviTest = new Environment("Environment", "Contains")
    enviTest.scale = [scale, scale, scale]
    enviTest.push();
}