import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "gen"
})
export class GenPipe {
    transform(...args: any) {
        // return args[0]+" / "+args[1];
        return args[1] == "male" ? "Mr " + args[0] : "Miss " + args[0];
    }
}
