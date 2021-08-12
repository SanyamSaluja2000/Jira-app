let addbtn = document.querySelector(".add");
let body = document.querySelector("body");
let grid = document.querySelector(".grid");
let dbtn = document.querySelector(".delete");


let colors = ["pink","maroon","lightblue","lightgreen"];
let deletemode = false;

dbtn.addEventListener("click",function(e){
   if(e.currentTarget.classList.contains("delete-select")==true){
    e.currentTarget.classList.remove("delete-select");
    deletemode = false;
   }
   else{
    e.currentTarget.classList.add("delete-select");
    deletemode = true;
   }
})

addbtn.addEventListener("click", function (e) {
    if(deletemode){
        dbtn.classList.remove("delete-select");
        deletemode = false;

}
    let preModal = document.querySelector(".modal");


    if (preModal != null) 
    return;
    let div = document.createElement("div");
    div.classList.add("modal");
    div.innerHTML = `<div class="task-sec">
            <div class = "task-inner" contenteditable = "true"> </div>
             </div >
           <div class="modal-priority-section">
            <div class="modal-priority-inner">

                <div class="modal-priority lightblue"> </div>
                <div class="modal-priority pink"> </div>
                <div class="modal-priority lightgreen"> </div>
                <div class="modal-priority maroon "> </div>
                <div class = "tick"><i class="fas fa-check"> </i></div>
            </div>
        </div>`
let ticketcolor = "pink";
    let allModalpriority = div.querySelectorAll(".modal-priority");
    
    for (let i = 0; i < allModalpriority.length; i++) {
        allModalpriority[i].addEventListener("click", function (e) {
    
            for (let j = 0; j < allModalpriority.length; j++) {
                allModalpriority[j].classList.remove("selected");
            }
            e.currentTarget.classList.add("selected");
          ticketcolor = e.currentTarget.classList[1];
        //    console.log(ticketcolor);
            
        });
    }
//    let check = document.querySelector(".tick");
//   console.log(ticketcolor);
let taskInnercontainer = div.querySelector(".task-inner");

  taskInnercontainer.addEventListener("keydown",function (e){
      if(e.key=="Enter"){
        let id = uid();
     let ticketcontainer = document.createElement("div");
     ticketcontainer.classList.add("ticket");
     ticketcontainer.innerHTML= `<div class="ticket-color  ${ticketcolor}"> </div>
     <div class="ticket-id">${id}</div>
     <div class="actual-task">${e.currentTarget.innerText}</div>
 `;
 let ticketcolordiv = ticketcontainer.querySelector(".ticket-color");
 
 
 ticketcolordiv.addEventListener("click",function(e){
 let currcolor = e.currentTarget.classList[1];
 let index = -1;
 for(let i = 0 ; i<colors.length; i++){
     if(colors[i]==currcolor){
         index = i+1;
        index = index%4;
        
     }

 }
 let ncolor = colors[index];
 ticketcolordiv.classList.remove(currcolor);
 ticketcolordiv.classList.add(ncolor);

 })
 ticketcontainer.addEventListener("click",function(e){
    if(deletemode){
        e.currentTarget.remove();
    }
})
 grid.append(ticketcontainer);
  //ticket div = ticketcontianer
  div.remove();
 }
 else if (e.key == "Escape") {
    div.remove();

 }

 
      
    });
body.append(div);
  });
   


 


