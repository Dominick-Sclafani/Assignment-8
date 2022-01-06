//question 1
console.log(document.getElementById("container"))


//question 2 

console.log(document.querySelector("#container"))

//question 3 

console.log(document.getElementsByClassName("second"))

//question 4

console.log(document.querySelector("ol li.third"))

// question 5 

var pDoc = document.createElement("p")
pDoc.innerHTML = "Hello!"
console.log(document.getElementById("container").append(pDoc))

//question 6 

console.log(document.getElementsByClassName("footer").classname = "main")                                                                                 
//question 7

console.log(document.querySelector(".footer").classList.remove("main"))




//question 8 

var li = document.createElement("li");
console.log(li);
//question 9 

console.log(li.innerText = "four");


//question 10
console.log(document.getElementsByTagName("ul")[0].appendChild(li));



//question 12
let x=document.getElementById("container"); 
let nodelist = x.getElementsByTagName("ul");
for(let i=0; i < nodelist.length; i++){
    nodelist[i].style.backgroundColor = "green";
}


//question 13

console.log(document.getElementsByClassName("footer").remove);


