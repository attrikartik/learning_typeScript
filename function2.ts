const names = ["kartik","attri","Amar"]

// return type string
names.map((name):string=>`hello ${name}`)

// void tells - no return type
function logError(msg:string):void{
    console.log(msg)
}
logError("Error")


// void tells - no return type as some func never returns a value
// never means no return value from this func()
function handleError(msg:string):never{
  throw new Error(msg)
}
export {}