let todoele = document.getElementById("taskinfo")//task info element
let tasklist = document.getElementById("tasklist")

document.getElementById("add").onclick =function(){//we are adding eventlisner
    if(todoele.value.length==0){   //if thre is no contain we have to write 0
        alert("Enter a task details")
    }
    else{
        tasklist.innerHTML = tasklist.innerHTML+`    
        <div class="task"> 
            <span id="work">${todoele.value}</span>
            <button class="del"><i class="fa fa-trash"></i></button> 
        </div>`  
        let alltasks = document.querySelectorAll('.del')
        for(i=0;i<alltasks.length;i++){
                alltasks[i].onclick = function(){
                    console.log(this)
                    console.log(this.parentNode)
                this.parentNode.remove()
            }
        }
        todoele.value=""
    }
}
