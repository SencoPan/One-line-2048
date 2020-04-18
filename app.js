const { Task, View } = require('./Task');
const readLine = require('readline');

const runtime = async () => {

    const readline = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question(`Введите значения \n`, input => {
        let args = input.split(' ');
        let flag = false;

        args.forEach( nmbr => {
           if(isNaN(nmbr) && !flag) {
               console.log("Ведено неверное число, попробуйте еще раз. \n");
               flag = true;
               readline.close();
               runtime();
               return;
           };
        });

        if (flag)
            return;
        else if(args.length === 1 && !args[0]){
            console.log("Не введено значение, попробуйте еще раз.")
            readline.close();
            runtime();
            return;
        }

        let task = new Task(args);
        let view = new View();

        view.printArray(task.getArray());

        task.getMinimum();

        view.printArray(task.getArray());
        view.printSequence(task.getSequence());

        readline.close()
    });

};

runtime().then();