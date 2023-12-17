// declare differrent types for
const score:Array<number>=[]
const numbers:Array<string>=[]

// another way to handle multiple type is using PIPE '|'
function identityOne(val:number|boolean):number|boolean{
    return 1 // or boolean by checking type of val    
}

// 'Type' keyword for handling multiple type called as GENERIC 
function identityTwo<Type>(val:Type):Type{
    return val
}

console.log(identityTwo(2)) // treat type as number
console.log(identityTwo("2")) // treat type as string

// common way of writing type , we can also use differrent letter in place of 'T'
function identityThree<T>(val:T):T{return val}


interface bottle{
    name:string,
    brand:string
}

// using custom type
identityThree<bottle>({name:'as',brand:'brand'})

// -------------------------- GENERIC in arryas and ()=>{} 

// param type array and return type array
function getProducts<T>(prod: T[]):T[]{
    return  []
}

// arrow func
const getProductsArrow =<T>(val:T[]):T[] =>{
    return val
}
// arrow func - ',' defines that it's generic type 
const getProductsArrow2 =<T,>(val:T[]):T[] =>{
    return val
}

// 2 param
function anotherFun<T,U extends number>(val1:T,val2:U):object{
    return {
        val1,
        val2
    }
}

// console.log(anotherFun(3,"2"))// error
console.log(anotherFun(3,2))


//------------------- GENERIC classes ----------------
interface Quiz{
    name:string,
    type:string
}
interface Course{
    name:string,
    author:string,
    subject:string,
}

class MainCourse<T>{
    public cart: T[] = []
    addToCart(p:T){
        this.cart.push(p)
    }
}











