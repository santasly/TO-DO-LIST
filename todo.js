const form = document.querySelector(".new_form");
const input=document.querySelector(".new-input");
const list_list=document.querySelector(".tasks");
    console.log(form)
form.addEventListener('submit',function(event){
    event.preventDefault()
   

    const do_item=input.value;


    if(!do_item){
        addTodo();
    }
});
function addTodo(){
    const todoItem=document.getElementById("todoItem").value;
    if (todoItem ===''){
        return;
    }
    const tasks_list = document.getElementById("tasks")
    const taskItem=document.createElement("div");
    taskItem.classList.add("task");

    const do_item =document.createElement("span");
    do_item.innerText= todoItem;
    
    const del_btn =document.createElement("button");
    del_btn.innerText("Delete");
    edit_btn.onclick=function(){
        deleteTodo(span)
    }
    

    const edit_btn =document.createElement("button");
    edit_btn.innerText("Edit");
    edit_btn.onclick=function(){
        editTodo(span)
    }
    taskItem.appendChild(edit_btn); 
    taskItem.appendChild(do_item);
    taskItem.appendChild(del_btn);
    tasks_list.appendChild(taskItem);


    document.getElementById("todoItem").value="";

}
function editTodo(do_item){
   var old_task=do_item.firstChild.nodeValue;
   var new_task = prompt( "Edit Task",);
//    if (new_task=null || new_task =""){
//     return;
//    } 
   do_item.firstChild.nodeValue =new_task;
    
}
function deleteTodo(do_item){
    tasks_list.removeChild(taskItem);
}






















































// window.addEventListener('load',()=>{
//     const form=document.querySelector(".new-form");
//     const input=document.querySelector(".new-input");
//     const list_item=document.querySelector(".tasks");

//     console.log(form);

//     form.addEventListener("submit" ,(handler);{

//     function handler(event){
//         event.preventDefault();

//         const new_entry=input.value;
//         let newtask =createItem(new_entry);
//         addTask(newtask)


//     }
//     function createItem(text) {
        // const taskItem=document.createElement("div");
        // taskItem.classList.add("task");
    
        // const span =document.createElement("span");
        // span.innerText= text
        // taskItem.appendChild(span);
    
        // const del_btn =document.createElement("button");
        // del_btn.innerText("Delete");
        // taskItem.appendChild(del_btn);
    
        // const edit_btn =document.createElement("button");
        // edit_btn.innerText("Edit");
        // taskItem.appendChild(edit_btn);
    
//         return taskItem;
    
//     }
//     // const newtask=createItem("cook");
    
//     function addTask(task_node){
//         task_container.append(task_node)
        
//     }
//     addTask(newtask);
    
// })
// })
 



    






// document.getElementById



// //     const form=document.getElementById("todo-form");
// //     form.addEventListener('submit',(handle-click)=>{
// //         handle-click.preventDefault();

// //         const list=input.value;
// //         if(!list){
// //             alert("Kindly enter task");
// //             return;
// //         }

// //     });

    

// //     }
// //     function addTodo(
// //         const Todo_item = document.getElementById("todo-item").value;


// //     )
// //     function deleteTodo(){

// //     }
// //     function
   
    

   
// // `wa`


        
 