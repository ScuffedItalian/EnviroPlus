import {Environment, Vec3} from "https://deno.land/x/remapper@2.1.0/src/mod.ts"

export function SceneItem(object: string, lookup: any){
    const si = new Environment(object, lookup)
    si.position = [999, 999, 999]
    si.push();
}