var button = document.getElementById("enter");

var input = document.getElementById("userinput");

var ul = document.querySelector("ul");

function inputLength(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li); 
    input.value="";
}

function addElementAfterClick(){
    if(inputLength() > 0){
        createListElement();
    }
};

function addElementAfterEnter(event){
    if(inputLength() > 0 && event.keyCode===13){
        createListElement();
    }    
};

button.addEventListener("click", addElementAfterClick);

input.addEventListener("keypress", addElementAfterEnter);
//
//var button2 = document.querySelectorAll("button")[1]; 
//var input2 = document.getElementsByTagName("input")[1];
//var ul2 = document.getElementsByTagName("ul")[1];
//
//function deleteItemFromList(){
//    var item = input2.value;
////    console.log(item);
//    console.log(ul.length);
//    for(var i=0;i<ul.length;i++)
//    {
//        if(item == ul.li[i])
//            console.log("Helli");
//    }
//};
//
//button2.addEventListener("click",function(){
////    console.log("saf");
//    var li = document.createElement("li");
//    li.appendChild(document.createTextNode(input2.value));
//    ul.removeChild(li);
//     deleteItemFromList();
//});
//
//input2.addEventListener("keypress",function(){
////    console.log("jekmsd");
//     deleteItemFromList();
//});
