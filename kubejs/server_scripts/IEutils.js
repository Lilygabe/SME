function customRecipes(event){
    this.event = event;

    this.ieCrusher = function(output, input, secondaries){
        secondaries = secondaries || [];

        let inputtype;
        if (input.startsWith('#')) {
            inputtype = "tag";
            input = input.substring(1);
        } else {
            inputtype = "item";
        }

        let inputObject = {};
        inputObject[inputtype] = input;

        event.custom({"type":"immersiveengineering:crusher",
            "energy":1600,
            "input": inputObject,
            "result": {
                "count": 1,
                "item": output
            },
            "secondaries": secondaries
        })
    }

    this.ieCloche = function(input, results, soil, time, rendertype, renderblock){
        event.custom({
            "type":"immersiveengineering:cloche",
            "input":{
                "item":input
            },
            "render":{
                "type":rendertype,
                "block":renderblock
            },
            "results":results,
            "soil":{
                "item":soil
            },
            "time":time
        })
    }

    this.itemListOf = function(str){
        return str
        .split(/\s*,\s*/) // split on commas, trimming surrounding spaces
        .map(part => {
            const m = part.match(/^(\d+)x (.+)$/); // gets a number, then the x, then a space, and then the name of the item
            if (m) {
                return { item: m[2], count: Number(m[1]) };
            }
            return { item: part.trim(), count: 1 };
        });
    }
}
