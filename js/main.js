var Name=document.querySelector("#SiteName")
var url=document.querySelector("#SiteUrl")
var btns=document.querySelector(".btns")
btns.addEventListener("click",function(){
    loction()
})

var loctionarr=[]
if(localStorage.getItem("loctions")!=null){

loctionarr= JSON.parse(localStorage.getItem("loctions"))
showdata(loctionarr)
}

function loction(){
  var loction={
    name:Name.value,
    url:url.value
  }
  loctionarr.push(loction)
  localStorage.setItem("loctions",JSON.stringify(loctionarr))
  displaylastindex()
  console.log(loctionarr);
}
function displaylastindex(){
var lastindex=loctionarr.length-1;
    container=`
    <tr class="">
    <td scope="row">${lastindex+1}</td>
    <td>${loctionarr[lastindex].name}</td>
    <td><button class="btn btn-success"><a class="text-decoration-none text-white" href="${loctionarr[lastindex].url}"><i class="fa-solid fa-eye pe-2"></i>Visit</a></button></td>
    <td><button onclick="Delet(${lastindex})" class="btn btn-danger"><i class="fa-solid fa-trash-can pe-2"></i>Delet</button></td>
  </tr>
    `
    document.querySelector("tbody").innerHTML+=container;
   
}
function showdata(y){
   var container=""
   for(var i=0;i<y.length;i++){
    container+=`
    <tr class="">
    <td scope="row">${i+1}</td>
    <td>${y[i].name}</td>
    <td><button class="btn btn-success"><a class="text-decoration-none text-white" href="${y[i].url}"><i class="fa-solid fa-eye pe-2"></i>Visit</a></button></td>
    <td><button onclick="Delet(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can pe-2"></i>Delet</button></td>
  </tr>
    `
    document.querySelector("tbody").innerHTML=container;
   }
}
function Delet(index){
loctionarr.splice(index,1)
localStorage.setItem("loctions",JSON.stringify(loctionarr))
showdata(loctionarr)
}