class User{
    private readonly db_id:number =12
    // private courseCount:number=0
     protected courseCount:number=0
    // public email:string
    // public name:string
    // constructor(email:string,name:string){
    //     this.email = email
    //     this.name = name
    //     //
    // }

    // some professional write code in this manner with modifiers
    constructor(public email:string,private name:string){
        this.email = email
        this.name = name
        //
    }
   
    // private function
    private abFunction(ab:number) {
        
    }
    //------- setters and getters
    set setEmail(email:string){
         this.email = email
    }
    set setName(name:string){
        this.name = name
    }
    set CourseCount(val:number){
        this.courseCount += val
    }
    get getEmail():string{
        return this.email
    }
    get getName():string{
        return this.name
    }
    get CourseCount():number{
        return this.courseCount
    }
    startTrial = ():string=>""
  }
  

  let user = new User("abcd@gmail.com","attri")

  //user.db_id =24 error as its readonly but we have access to it so to avoid this access make it private

  class Member extends User{
    //child class cannot access private variables of parent class

    isFamily:boolean = true
    changeCourseCount(){
        //this.courseCount ---- error but as type changed to protected we have access but cannot be used outside parent or child class
        this.courseCount =10
    }
  }