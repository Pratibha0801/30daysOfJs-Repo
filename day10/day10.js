//Activity1:Basic event handling

//<--Task1:
const para=document.getElementById("#para");
const button=document.querySelector("#button");
button.addEventListener('click',()=>{
    para.innerText="hello there"
});

//<--Task2:
let image=document.querySelector("#img");
image.addEventListener('double click', ()=>{
    image.style.visibility=img.style.visibility === "hidden" ? "visible" : "hidden";
});
 

//Activity2:Mouse events
//Task3:
const div=document.querySelector("#div");
div.addEventListener("mouseover",()=>{
    div.style.background="blue";
    });

 //task4:
 div.addEventListener("mouseout",()=>{
    div.style.background = "white";
});  


//Activity3:keyboard event
//task5:
document.getElementById('input').addEventListener('keydown', (event) => {
    console.log(event.key);
});

//task6:
document.getElementById('input').addEventListener("keyup", function() {
    document.getElementById('display').textContent = document.getElementById('input').value;
});

//activity4:form event

//task7:
let form = document.getElementById('myForm');
form.addEventListener('submit', (event) => {
    event.preventDefault()});
 let newform   =new FormData(form);
  newform.forEach((value,key) => {
    console.log(`${key}: ${value}`);
  });

  //Task8:
  const select = document.querySelector("select");
  const selectpara = document.querySelector("#select");
  select.addEventListener("change",()=>{
      selectpara.innerText = `selected value = ${select.value}`;
  });

  //Activity5:Event delegation
  //Task9:
  const list = document.getElementById('list');
  const p=document.querySelector(".item")
list.addEventListener('click', (event) => {
    if (event.target && event.target.nodeName === 'li.list') {
        console.log(`Clicked item: ${event.target.textContent}`);
    }
});

//task10:
const added = document.querySelector("#items");
added.addEventListener("click",()=>{
    const newitem = document.createElement("li");
    newitem.classList.add("list");
    newitem.textContent = "new item";
    itemList.appendChild(newitem);
});




