const startsWith=(str, start)=>{
     const len= start.length
     let demarr =""
for (let index = 0; index < len; index++) {
   demarr += str[index];
}
   if (start==demarr) 
   return true
   else 
    return false
}
const str="Hello les gars !!!!"
const start="He"
console.log(startsWith(str,start));
