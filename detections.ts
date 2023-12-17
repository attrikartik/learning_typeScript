function detectType(val:number | string){
    // return val.toLowerCase() ----error for number
    if(typeof val==='string'){
        return val.toLowerCase() 
    }else if(typeof val==='number'){
        return val+3 
    }
}
/// problem comes when number[] type also comes or null type
function detectType1(id:string | null){
   if(!id){
    console.log('error')
    return 
   }
   id.toLowerCase()
}

function printAll(strs: string | string[] | null) {

    if (strs && typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }

  // instance narrowing

function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
    } else {
      console.log(x.toUpperCase());
    }
  }