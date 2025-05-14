// Using interface in Classes
// Rules
// 1. Classes Should follow the Type rules
// 2. Classes can have more values than interface but not less and the annotations from the interface should followed inside the class
// 3. Classes Can implements more than 1 interface as long as it follows the rules of Type

// By implementing what I mean is that 
// Implementation is only done with interface
// ex: class Instagram implements TakePhoto

interface TakePhoto {
    filter: boolean
    burst: number
    cameraMode: string
}

class Instagram implements TakePhoto {
    constructor(
        public filter: true,
        public burst: 4,
        public cameraMode: "Seinic",
        public generated: number = this.burst // Extra varible added as we have explained above
    ){}
}


interface story{
    createStory(): {time: number, msg: string}
}


class Youtube implements TakePhoto, story{
    constructor(
        public filter: false,
        public burst: 2,
        public cameraMode: "normal"
    ){}

    createStory(){
        let vid = {
            time: 4,
            msg : "succesfull"
        }
        console.log(vid)
        return vid
    }
}