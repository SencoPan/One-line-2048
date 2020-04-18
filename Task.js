class Task {
    constructor(args) {
        this.array = args;
        this.sequence = [];
    }
    getArray(){
        return this.array;
    }
    getSequence(){
        return this.sequence;
    }
    right(array, sequence){
        sequence.push('right');

        for(let i = 0; i < array.length; i++){
            if(i+1 > array.length - 1){
                return;
            }
            if (array[i].toString() === array[i+1].toString()){
                array[i] *= 2;
                array.splice(i+1, 1);
            }
        }
    }
    left(array, sequence){
        sequence.push('left');

        for(let i = array.length - 1; i > 0; i--){
            if(i-1 < 0){
                return;
            }
            if (array[i].toString() === array[i-1].toString()){
                array[i] *= 2;
                array.splice(i-1, 1);
            }
        }
    }
    testSide(side, sideObj){
        this[side](sideObj.array, []);
        sideObj.act = this.array.length - sideObj.array.length;

        let length = sideObj.array.length;

        this[side](sideObj.array, []);
        sideObj.pot = length - sideObj.array.length;
    }
    benefit(){
        let forLeft = {
            array: [...this.array],
            pot: 0,
            act: 0,
        };

        let forRight = {
            array: [...this.array],
            pot: 0,
            act: 0,
        };

        this.testSide('left', forLeft);
        this.testSide('right', forRight);

        return forRight.pot + forRight.act > forLeft.act + forLeft.pot ? 'right' : 'left';
    }
    anEnd(){
        let array = [...this.array];

        this.right(array, []);

        return array.length === this.array.length;

    }
    getMinimum(){
        while(true){
            this[this.benefit()](this.array, this.sequence);
            if (this.anEnd())
                return;
        }
    }
}

class View {
    printArray (array){
        console.log(array)
    }
    printSequence (sequence){
        console.log(sequence)
    }
}

module.exports = {
  Task,
  View
};