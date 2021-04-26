// console.log(document);

// //html selector
// const app = document.getElementById("app");
// console.log(app);

// const name = document.getElementsByClassName("name");
// console.log(name);
// for(let i = 0;i<name.length;i++){
//     console.log(name[i]);
// }


// //lay theo tagName

// const tagName = document.getElementsByTagName("div");
// console.log(tagName);

// //lay theo query Selector vaf querySelectorAll

// const query = document.querySelector(".name");
// console.log(query);

// const queryAll = document.querySelectorAll("div");
// console.log(queryAll);


// //!IMportant-------------------------------
// //property and method----------------------
// console.dir(app);

// //bo text and conte.nt----------------------
// app.innerHTML = "<b>chao buoi chuieu</b>";// thay doi duoc
// // noi dung va the
// //html
// console.log(app.innerHTML);

// //-------------------------------------
// //innerText va textContent chi thay doi duoc noi dung

// console.log(app.innerText);
// app.innerText ="xin chao buoi sang"
// //======================================
// console.log(app.textContent);
// app.textContent = "<p>xin chao toannnnn</p>"
// //=================================================
// //============================style================
// //=================================================
// app.style.fontSize = "20px";
// app.style.color="pink";
// console.log(app.style);

// //==================//===========//===============
// // children, parentElement

// const list = document.getElementById("list");
// console.log(list.children[0]);
// console.log(list.children[0].parentElement);


// //classlist, id

// console.log(list.id);
// console.log(list.classList);


// //======================    add class & remove class trong DOM
// list.classList.add("ul4");
// list.classList.remove("ul1");

// //======================  createElement(),appenChild(), remove()
// const li = document.createElement("li");
// li.innerText="xon chao hang xom";
// list.appendChild(li);
// list.children[0].remove();//truy cap vao phan tu cua mang.

// function myFunction(){
// var btn = document.createElement("BUTTON");
// btn.innerText ="new button";
// document.body.appendChild(btn);
// }

//////////////////================/////////////////////////
//event and click event
// const list = document.getElementById("list")

// const btn = document.getElementById("btn");
// function myFunction(){
//     const li = document.createElement("li");
//     li.innerHTML = "play more games";   
//     list.appendChild(li);    
// }

// btn.onclick = function(){
//     list.children[0].remove();
// }
// const noiDung = document.getElementById("noiDung");
//  btn1.onclick = function(){
   
//     noiDung.classList.add("add");
// }
///cho 1 the div vaf 1 button,
// clic thay doi the div, mau nem, co chu, noi dung

//bai tap ve nha
const task1 = document.getElementById("task1");
const btn = document.getElementById("btn");

btn.onclick = function(){
    if(task1.style.display ==="none"){
        task1.style.display ="block";
    }
    else
    task1.style.display ="none"

}


const task2 = document.getElementById("task2");
const btn2 = document.getElementById("btn2");
btn2.onclick = function(){
    const randomColor = (Math.random().toString(16)).substring(2,8);
    task2.style.background = "#"+randomColor;
    console.log(randomColor);
}


const task3 = document.getElementById("task3");
const task3_reverse = document.getElementById("task3-reverse");
const btn3 = document.getElementById("btn3");
btn3.onclick = function(){
    const tam = task3.innerText;
    task3.innerText = task3_reverse.innerText;
    task3_reverse.innerText = tam;
}

const task4 = document.getElementById("task4");
const btn4 = document.getElementById("btn4");

let a = 14 ;
btn4.onclick = function(){
    task4.style.fontSize = `${++a}px`;
}