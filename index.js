let countEle = document.getElementById("count-ele");
let previousEle = document.getElementById("previous-ele");
let count = 0;
let countStr = "Previous: ";

function increment() {
    countEle.innerText = (++count);
} 

function decrement() {
    count = Math.max(0, --count);
    countEle.innerText = count;
} 

function save() {
    countStr += count + " - ";
    previousEle.innerText = countStr;

    count = 0;
    countEle.innerText = count; 
}