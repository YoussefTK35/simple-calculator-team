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
const deleteBtn = document.getElementById('delete');
deleteBtn.addEventListener('click',()=>{
    input.value=input.value.slice(0,input.value.length-1);
})
const parenl = document.getElementById('parenl');
const parenr = document.getElementById('parenr');
parenl.addEventListener('click',()=>{
    input.value+="(";
});
parenr.addEventListener('click',()=>{
    input.value+=")";
});