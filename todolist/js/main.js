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
}
window.xoaCompleted = (ele) => {
    for(let i = 0; i < completed.length; i++) {
        if(ele === completed[i]) {
            completed.splice(i, 1);
            renderComplete(completed);
            setLocalStorage();
        }
    }
}

// nhấn dấu check chuyển todo sang completed
window.remove = (ele) => {
    for(let i = 0; i < todo.length; i++) {
        if(ele === todo[i]) {
            todo.splice(i, 1);
            renderToDo(todo);
            setLocalStorage();
        }
    }
            completed.push(ele)
            renderComplete(completed);
            setLocalStorage()
}


// sắp xếp từ a -> z
const az = (value) => {
    value.sort((a, b) => {
        return a - b;
    }) 
    renderToDo(value);
    renderComplete(value);
}

// sắp xếp từ z -> a
const za = (value) => {
    value.sort((a, b) => {
        return b - a;
    }) 
    renderToDo(value);
    renderComplete(value);
}


getEle("two").onclick = () => {
    az(todo); 
    az(completed);   
}

getEle("three").onclick = () => {
    za(todo); 
    za(completed);  
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




 

 