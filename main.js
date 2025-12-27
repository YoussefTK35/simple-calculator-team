
const input=document.getElementById('input');
const numbers=document.getElementsByClassName('numbers');
const operations = document.getElementsByClassName('operations');
const clear = document.getElementById('clear');
const deleteBtn = document.getElementById('delete');
const parenl = document.getElementById('parenl');
const parenr = document.getElementById('parenr');
const equal = document.getElementById('equals');


function Clear(){
    input.value="";
}


for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click',()=>{
        input.value=="Error" || input.value=="Infinity"? Clear() : null;
        input.value+=numbers[i].value;
    });
}
for(let i = 0 ; i < operations.length;i++){
    operations[i].addEventListener('click',()=>{
        input.value=="Error" || input.value=="Infinity"? Clear() : null;
        input.value+=operations[i].value;
    })
}
clear.addEventListener('click',Clear);

deleteBtn.addEventListener('click',()=>{
    input.value=="Error" || input.value=="Infinity"? Clear() : null;
    input.value=input.value.slice(0,input.value.length-1);
})

parenl.addEventListener('click',()=>{
    input.value=="Error" || input.value=="Infinity"? Clear() : null;
    input.value+="(";
});
parenr.addEventListener('click',()=>{
    input.value=="Error" || input.value=="Infinity"? Clear() : null;
    input.value+=")";
});


equal.addEventListener('click',()=>{
    try{
        input.value=eval(input.value);
    }
    catch{
        input.value="Error";
    }
})