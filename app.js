const readLine = require('readline');

class Task {
    constructor(...args) {
        this.array = [...args];
    }
}

class View {
    getArray (task){
        console.log(task.array)
    }
}

let test = new Task(1, 2, 3, 4, 5);
let view = new View();

view.getArray(test);