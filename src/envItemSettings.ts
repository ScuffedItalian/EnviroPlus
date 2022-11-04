import {Environment, Vec3} from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

/**
 * 
 * @param object Set the env object you want to change, use Chroma logs.
 * @param lookup Lookup method, Regex, Contains, Exact, etc. 
 * @param position Change env object to a vector 3 position. (Effect happens when disabled is set to false)
 * @param scale Changes the env objects scale using a vector 3 position. (Effect happens when disabled is set to false)
 * @param disabled true/false, self explanitory, will disable the environment 
 */


export function SceneObject(object: string, lookup: any, position: Vec3, scale: Vec3, disabled: boolean){
    const si = new Environment(object, lookup)

    if(disabled === true){
        si.position = [0, -9999, 0]
    }
    else{
        si.position = position
        si.scale = scale
    }
    
}