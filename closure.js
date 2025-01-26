function outerfunction(outername){
    return function innerfunction(innername){
        console.log(`this is the ${outername} and this is the innername ${innername}`);
        
    }
}
var close=outerfunction("madhav");
close("vemula"); ///this is the madhav and this is the innername as vemula
// for (var i=0; i<4; i++) {

//     setTimeout( () => console.log(i), 2000 )

// }
const prom=new Promise((req,res)=>{
    setTimeout(()=>{
        req("resolved for 2 sec")
    },2000)
});
prom.then(res=>{
    console.log(res);
    
})