function add(num:number):number{
    return num+2
}

console.log(add(2))

function getUpper(str:string){
    return str.toUpperCase
}

console.log(getUpper("kartik"))

function signUp(name:string,email:string): string{
    return name + " "+email
}

console.log(signUp("kartik","kartik@123.gmail.com"))

let login = (email:string,password:string = ""):string=>{
    return email + password
}

login("kartik","abcd@gmail")
export{} 