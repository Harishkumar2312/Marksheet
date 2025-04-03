var named = document.getElementById("name");
var su1 = document.getElementById("sub1");
var su2 = document.getElementById("sub2");
var su3 = document.getElementById("sub3");
var su4 = document.getElementById("sub4");
var su5 = document.getElementById("sub5");
var btn = document.getElementById("submit");
var out = document.getElementById("result");
var total;


btn.addEventListener("click",()=>{
  if(su1.value!=="" && su2.value!=="" && su3.value!=="" &&su4.value!=="" && su5.value!=="" ){
    var a = named.value;
    var b = Number(su1.value);
    var c = Number(su2.value);
    var d = Number(su3.value);
    var e = Number(su4.value);
    var f = Number(su5.value);
    total = (b+c+d+e+f);

    function grade(){
      if(total>250){
        return "P";
      } else{
        return "F";
      }
    }
    out.innerHTML +=
    `
      <tr>
                <td>${a}</td>
                <td>${b}</td>
                <td>${c}</td>
                <td>${d}</td>
                <td>${e}</td>
                <td>${f}</td>
                <td>${total}</td>
                <td>${grade()}</td>
                
                
      </tr>
    `
  }else{
    alert("Enter the value ");
  }
    
  

    named.value = "";
    su1.value = "";
    su2.value = "";
    su3.value = "";
    su4.value = "";
    su5.value = "";


});
