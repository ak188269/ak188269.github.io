var role=["c.s student"," web developer","coder"]
let role_text=document.getElementById("role");
let i=0,j=0;
let interval2;
const myfun=()=>{
let curr_role=role[i];
role_text.innerHTML=curr_role;
            i++;
            if(i==role.length)
            i=0;
     
}
setInterval(()=>{myfun();},1000);
