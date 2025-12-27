const input=document.getElementById('input');
const numbers=document.getElementsByClassName('numbers');
for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click',()=>{
        input.value+=numbers[i].value;
    });
}
const operations = document.getElementsByClassName('operations');
for(let i = 0 ; i < operations.length;i++){
    operations[i].addEventListener('click',()=>{
        input.value+=operations[i].value;
    })
}
const clear = document.getElementById('clear');
clear.addEventListener('click',()=>{
    input.value="";
});
