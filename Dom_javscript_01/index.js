for(let i=1;i<100;i++){
    let newElement=document.createElement('p');
    newElement.textContent='This is para';
    document.body.appendChild(newElement);
}

//Optimising a bit
let myDiv=document.createElement('div');
for(let i=1;i<100;i++){
    let element=document.createElement('p');
    element.textContent='this is para' +i;
    myDiv.appendChild(element);
}
document.body.appendChild(myDiv);