const username="rishabh2917";
const url=`https://api.github.com/users/${username}`;
const pr=fetch(url);
pr.then(function(res){
 return res.json();
})
.then((data)=>{
    console.log("Data:" ,data);
})
.catch((err)=>{
    console.log("Error=",err);

})
.finally(()=>{
    console.log("insider finally");
})