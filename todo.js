
const inputBox = document.getElementById("inputbox");
const listcontainer=document.getElementById("listcontainer");


function addTask () {
    if(inputBox.value ===''){
        alert("you must write something !");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        li.onclick=function(){
            textChange("completed");
        }
    }
    inputBox.value="";
    saveData();
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName ==="li"){
        e.target.classList.toggle()
    //   e.target.classList.toggle("clicked");
    }else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }

    
},false);

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
