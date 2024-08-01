//Activity1:DOM modulation

//<--Task1:
let a=document.querySelector("#1");
a.innertext="Changed text";

//<--Task2:
let b=(".2");
b.style.backgroundColor="red";

//Activity2:Creating and appending Elements

//<--Task3:
let newbody=document.createElement('div');
    newbody.textContent="hello world";
    console.log(newbody);
let body=document.querySelector("newbody");
body.append(newbody);

//<--Task4:

let oldlist=document.getElementById("4")
let li=createElement(li);
li.innertext="strawberry";
oldlist.append(li);

//Activity3:Removing Elements

//<--Task5:
let c=document.getElementById("5");
c.remove();

//<--Task6:
body.lastChild.remove();


//Activity4:

//<--Task7:
let url=document.getElementsByTagName("a");
for(let i of url)
    i.href="https://www.facebook.com";

//<--Task8:
function addClass(){
    let element=document.getElementById("4");
    element.classList.add("hey");
}

function remove(){
    let element=document.getElementById("4");
    element.classList.remove("highlight");
}

//Activity 5:

//<--Task9:
function changeparagrapghtext() {
    var paragraph = document.getElementById("1");
    paragraph.textContent = "changed!";
  }
document.addEventListener("new",function() {
    var button=document.getElementById("6");
    button.addEventListener("click",changeparagrapghtext);
});

//<--Task 10:
function changeBorderColor() {
    var element = document.getElementById("4");
    element.style.borderColor = "red";
  }
  document.addEventListener("new", function() {
    var element = document.getElementById("4");
    element.addEventListener("mouseover", changeBorderColor);
  });
  
