const getEle = (id) => document.getElementById(id);
let todo = [];
let completed = [];



// duyệt mảng todo rồi render
const renderToDo = (data) => {
    let content = '';
    data.forEach((ele) => {
        content += `
        <li>
            <span>${ele}</span>
            <div class = "buttons">
                <button onclick = "xoaToDo('${ele}')"><i class="fas fa-trash buttons remove"></i></button>
                <button onclick = "remove('${ele}')"><i class="far fa-check-circle buttons remove"></i></button>
            </div>
        </li>`
        getEle("todo").innerHTML = content;
   });
}

// duyệt mảng completed rồi render
const renderComplete = (data) => {
    let contentTHML = '';
    data.forEach((ele) => {
        contentTHML += `
        <li>
            <span>${ele}</span>
            <div class = "buttons">
                <button onclick = "xoaCompleted('${ele}')"><i class="fas fa-trash buttons complete"></i></button>
                <button><i class="far fa-check-circle buttons complete"></i></button>
            </div>
        </li>`
        getEle("completed").innerHTML = contentTHML;
   });
}

// khi nhấn add thì push vô mảng
getEle("addItem").onclick = () => {
    let task = getEle("newTask").value;
    todo.push(task);
    renderToDo(todo);
    setLocalStorage();
}

// nhấn nút xóa 
window.xoaToDo = (ele) => {
    for(let i = 0; i < todo.length; i++) {
        if(ele === todo[i]) {
            todo.splice(i, 1);
            renderToDo(todo);
            setLocalStorage();
        }
    }
    location.reload();
}

window.xoaCompleted = (ele) => {
    for(let i = 0; i < completed.length; i++) {
        if(ele === completed[i]) {
            completed.splice(i, 1);
            renderComplete(completed);
            setLocalStorage();
        }
    }
    location.reload();
}

// nhấn dấu check chuyển todo sang completed
window.remove = (ele) => {
    for(let i = 0; i < todo.length; i++) {
        if(ele === todo[i]) {
            completed.push(ele);
            renderComplete(completed);
            todo.splice(i, 1);
            renderToDo(todo);
            setLocalStorage();
        }
    }    
    location.reload();
}

getEle("two").onclick = () => {
    todo.sort((a, b) => {
        if(a > b) {
            return 1;
        }
        return -1;
    });  
    renderToDo(todo);

    completed.sort((a, b) => {
        if(a > b) {
            return 1;
        }
        return -1;
    }); 
    renderComplete(completed); 
    setLocalStorage();
}


getEle("three").onclick = () => {
    // sắp xếp từ z -> a
    todo.sort((a, b) => {
        if(b > a) {
            return 1;
        }
        return -1;
    });  
    renderToDo(todo);

    completed.sort((a, b) => {
        if(b > a) {
            return 1;
        }
        return -1;
    }); 
    renderComplete(completed); 
    setLocalStorage();
}

// lưu ở local
const setLocalStorage = () => {
    let stringToDo = JSON.stringify(todo);
    localStorage.setItem("Todo", stringToDo);

    let stringComplete = JSON.stringify(completed);
    localStorage.setItem("Completed", stringComplete);
  }
  
const getLocalStorage = () => {
    let dataTodo = localStorage.getItem("Todo");
    if(dataTodo) {
        todo = JSON.parse(dataTodo);
        renderToDo(todo);
    } else {
        todo = [];
        renderToDo(todo);
    }

    let dataCompleted = localStorage.getItem("Completed");
    if(dataCompleted) {
        completed = JSON.parse(dataCompleted);
        renderComplete(completed);
    } else {
        completed = [];
        renderComplete(completed);
    }
  }
  getLocalStorage();




 

 