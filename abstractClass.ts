abstract class TakePhoto{
    constructor(public cameraMode:string,public filter:string){}
    abstract createStory():void
    getPhoto():number{
        return 12
    }
}


// abstract classes cannot be instantiated
// const photo = new TakePhoto("abcd","asas") -- ERROR will come
class Instagram extends TakePhoto{

    constructor(public cameraMode:string,public filter:string,public burst:string){
        super(cameraMode,filter)
        this.burst = burst
    }
    createStory(): void {
        
    }
}


// this works as abstract class in inherited
const photo = new Instagram("abcd","asas","burst") 

photo.getPhoto()