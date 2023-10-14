    const form=document.getElementById("todo-form");
    form.addEventListener('submit',(handle-click)=>{
        handle-click.preventDefault();

        const list=input.value;
        if(!list){
            alert("Kindly enter task");
            return;
        }

    });

    function listItem() {
        const taskOne=document.createElement("div");
        taskOne.classList.add("todoList");
        const span =document.createElement("span")
        span.innerText('text')
        const del_btn =document.createElement("button");
        del_btn.innerText("Delete");
        const edit_btn =document.createElement("button");
        edit_btn.innerText("Edit");
        taskOne.append(span,del_btn,edit_btn);

    }
    function addTodo(
        const Todo_item = document.getElementById("todo-item").value;


    )
    function deleteTodo(){

    }
    function
   
    

   



        
 