 
var flag = true;

 function one(){
    return  new Promise( (resolve,reject)=>{
            if(flag){
                setTimeout(() => {
                    console.log("=== resolve===");
                    resolve('resolved');
                }, 2000);
                
            }
            else{
                reject();
            }
        }
    );

}
//calling part
one().
then(
    ()=>{
        console.log("Two");
    }
).then(
    ()=>{
        console.log("Three");
    }
).
catch(
    ()=>{
        console.log("catch");
    }
    
).
finally(
    ()=>{
        console.log("finally");
    }
    
);



//Async await


async function testAsync(){

    try {
        await one();    
        console.log("=== this is testAsync");
    } catch (error) {
        console.log("catch");
    }
    finally{
        console.log("finally");
    }
    

}

testAsync();