"use strict";
// Using interface in Classes
// Rules
// 1. Classes Should follow the Type rules
// 2. Classes can have more values than interface but not less and the annotations from the interface should followed inside the class
// 3. Classes Can implements more than 1 interface as long as it follows the rules of Type
class Instagram {
    constructor(filter, burst, cameraMode, generated = this.burst // Extra varible added as we have explained above
    ) {
        this.filter = filter;
        this.burst = burst;
        this.cameraMode = cameraMode;
        this.generated = generated;
    }
}
class Youtube {
    constructor(filter, burst, cameraMode) {
        this.filter = filter;
        this.burst = burst;
        this.cameraMode = cameraMode;
    }
    createStory() {
        let vid = {
            time: 4,
            msg: "succesfull"
        };
        console.log(vid);
        return vid;
    }
}
