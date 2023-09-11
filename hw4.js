//part-1
function conter() {
    let memory = [0];
    return function inner_sum(num) {
        memory[0] += num;
        return memory[0];
    }
};

let count = conter();
count(3);
count(5);
count(228);

//part-2
function getUpdateArray1() {
    let memory = [];
    return function inner_item(x) {
       if(x == null)
       { memory = []
        return memory;
       }
       else
       {
        memory.push(x)
        return memory;
       }
    }
};
let getUpdateArray = getUpdateArray1();
getUpdateArray(5);
getUpdateArray(5);
getUpdateArray('asa');
getUpdateArray();
getUpdateArray(35);

