let score : number | string = 123
score = 23
score ="23"

type User={
   name:string,
   id:number
}
type Admin={
   userName:string,
   id:number
}

let kartik: User | Admin = {
    name:"attri",
    id:123
}

kartik = {userName:"att",id:123}



//----------------funtions

function getDbId(id:number |string){
  console.log(`db id ${id}`)
  // this will give error as number type doesn't have toLowerCase()
  //id.toLowerCase()

  if(typeof id ==='string'){
    id.toLowerCase()
  }else if(typeof id ==='number'){

  }
}

// --------------- arrays

const data:number[] = [1,2,3,2,1]

// this syntax means- array can have all string or number values but not mix
const data1: string[] | number[] = [1,2,3,2,1]

// this syntax means- array can have mix values of number and string
const data2: (string | number)[] = [1,2,3,2,"1"]

// this means pi variable cannot be overridden with other values, it is very strict
let pi:3.14 =  3.14

getDbId(3)
getDbId("3")
export {}