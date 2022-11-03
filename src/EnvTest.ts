import {Environment} from "https://deno.land/x/remapper@2.1.0/src/mod.ts" // MAKE SURE TO USE THE LATEST REMAPPER VERSION HERE

export function envE(disabled: boolean){
    const enviTest = new Environment("Environment", "Contains")
    if(disabled == true){
        enviTest.position = [0, -999999, 0]
        enviTest.push();
    }
}

