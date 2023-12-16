const user = {
    name:'kartik',
    isActive:true,
}

function createUser({name:string,isActive:boolean}){
}


createUser(user)

let newUser = {
    name:'kartik',
    isActive:true,
    email:'attri@gmail.com'
}
// passing extra param
createUser(newUser)

// syntax to return object from func
function createCourse():{name:string,price:number}{
  return {name:'react',price:1200}
}

//---------------------------------------------

type User = {
    name:string,
    email:string,
    isActive:boolean
}

// defining type of param by using type{}
function makeUser(param:User):User{
    return {name:'',email:'',isActive:true} 
}
makeUser({name:'',email:'',isActive:true})

//---------------------------------------------

type NewUser = {
    readonly _id:string, // we will not be able to change it
    name:string,
    email:string,
    isActive:boolean,
    creditCardDetails?:number // '?' means option property for this object
}
export {}