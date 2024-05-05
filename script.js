function add(){
console.log("sahik");
let newNode = document.createElement("textarea");
newNode.classList.add("form-control","weField","mt-2");
newNode.setAttribute("rows",3);
newNode.setAttribute("placeholder","Enter here");

let weOb = document.getElementById("we");
    
weOb.appendChild(newNode);

}

function addNewAQField(){


 let newNode = document.createElement("textarea");
 newNode.classList.add("form-control","eqField","mt-2");
 newNode.setAttribute("rows",3);
 newNode.setAttribute("placeholder","Enter here");
    
 let aqOb = document.getElementById("aq");
        
 aqOb.appendChild(newNode);

}

function generateCV(){

    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1");

    document.getElementById("nameT2").innerHTML= nameField;
    nameT1.innerHTML = nameField;

     let contactField = document.getElementById("contactField").value;
     let contactT = document.getElementById("contactT");
     contactT.innerHTML = contactField;

    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;

    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;

    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    // document.getElementById("weT").innerHTML = document.getElementById("weField").value;

     let wes = document.getElementsByClassName("weField");
     let str = "";

     for(let e of wes){
        str = str + `<li> ${e.value}</li>`;
     }

     document.getElementById("weT").innerHTML = str;

     let aqs = document.getElementsByClassName("eqField");
     let str1 = "";

     for(let e of aqs){
        str1 = str1 + `<li> ${e.value}</li>`;
     }

     document.getElementById("aqT").innerHTML = str1;

     let file = document.getElementById("imgField").files[0];
     console.log(file);

     let reader = new FileReader();
     reader.readAsDataURL(file);
     console.log(reader.result);

     reader.onloadend = function(){
      document.getElementById("imgTemplate").src = reader.result;
     }

     document.getElementById("cv-form").style.display= 'none'
     document.getElementById("cv-template").style.display= 'block'
     


}

function printCV(){
   window.print();
}
