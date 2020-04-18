class Task {
    constructor(args) {
        this.array = args;
        this.lenght = args.length;
        this.sequence = [];
    }
    getArray(){
        return this.array;
    }
    right(){
        this.sequence.push('right');

        for(let i = 0; i < this.lenght; i++){
            if(i+1 > this.lenght - 1){
                return;
            }
            if (this.array[i].toString() === this.array[i+1].toString()){
                this.array[i+1] *= 2;
                this.array.splice(i, 1);
            }
        }

        this.lenght = this.array.length;
    }
    left(){
        this.sequence.push('left');

        for(let i = this.lenght - 1; i > 0; i--){
            if(i-1 < 0){
                return;
            }
            if (this.array[i].toString() === this.array[i-1].toString()){
                this.array[i-1] *= 2;
                this.array.splice(i, 1);
            }
        }

        this.lenght = this.array.length;
    }
}

class View {
    printArray (array){
        console.log(array)
    }
}

module.exports = {
  Task,
  View
};