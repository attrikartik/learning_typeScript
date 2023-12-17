interface User{
  readonly db_id:number,
  email:string,
  userid:number,
  googleid?:string,
  //startTrial:()=>string // both are ways of declaring function
  startTrial():string,
  getCoupon(name:string, value:number):number
}

// also called as reopening of interface
interface User {
    githubId:string
}
const kartik:User = {
    db_id:122,email:"abce@gmail.com",
    userid:121,
    startTrial:()=>"trial started",
    getCoupon:(name:"discount",value:13)=>12,
    githubId:"121212"
}


interface Admin extends User{
    role:string
}
console.log(kartik)
export{}