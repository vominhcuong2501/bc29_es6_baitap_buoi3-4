export class TaskList {
    toDo = [];
    completed = [];
  
    addToDo(task) {
      this.toDo = [...this.toDo, task];
    }
  
    removeToDo(id) {
      this.toDo = this.toDo.filter((ele) => ele.id !== +id);
    }
  
    addCompleted(task) {
      this.completed = [...this.completed, task];
    }
  
    removeCompleted(id) {
      this.completed = this.completed.filter((ele) => ele.id !== +id);
    }
   
    sortAZ() {
        this.toDo.sort((a, b) => {
            return a > b ? 1 : -1;
        })
        this.completed.sort((a, b) => {
            return a > b ? 1 : -1;
        })
    }
    sortZA() {
        this.toDo.sort((a, b) => {
            return a < b ? 1 : -1;
        })
        this.completed.sort((a, b) => {
            return a < b ? 1 : -1;
        })
    }
  }



  