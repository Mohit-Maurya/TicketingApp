document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("return-date").disabled = true;
});
var today=new Date().toISOString().split("T")[0]
document.getElementById("doj").setAttribute("min", today)
document.getElementById("return-date").setAttribute("min",today )

var price;
var gst;
var totalPriceToPay;

function calcPrice(){
    var to=document.getElementById("to").value.toLowerCase();
    var from=document.getElementById("from").value.toLowerCase();
    var coach_types = document.getElementsByName("coach");
    var coach;
    var pricePerKm = 20;

    //routes
    var routeOneDistance = 1000; //Delhi - Pune
    var routeTwoDistance = 250; //Pune - Mumbai
    var routeThreeDistance = 1200; //Mumbai - Delhi

    
    var distancePrice = 0;
    var coachPrice = 0;
    var gstValue = 0.18; // 18%

    //coach prices
    var sleeperPrice = 100;
    var ccPrice = 250;
    var acPrice = 500;

    for (i = 0; i < coach_types.length; i++) {
        if(coach_types[i].checked) {
            coach = coach_types[i].value;
            break;
        }
    }

    if (coach == "ac") {
        coachPrice = acPrice;
    } else if (coach == "cc"){
        coachPrice = ccPrice;
    } else if (coach == "sleeper") {
        coachPrice = sleeperPrice;
    }



    if((to=="mumbai" && from=="delhi") || (to=="delhi" && from=="mumbai")) {
        distancePrice = pricePerKm*routeThreeDistance;
        // console.log(distancePrice);
    }
    else if((to=="pune" && from=="delhi") || (to=="delhi" && from=="pune")) {
        distancePrice = pricePerKm*routeOneDistance;

    } 
    else if((to=="mumbai" && from=="pune") || (to=="pune" && from=="mumbai")){
        distancePrice = pricePerKm*routeTwoDistance;
    };

    price = distancePrice + coachPrice;
    if (document.getElementById("return").checked) {
        price *= 2;
    }

    gst = price*gstValue;
    totalPriceToPay = price + gst;

    document.getElementById("price").innerHTML = "Price: " + price;
    document.getElementById("gst").innerHTML = "gst: " + gst;
    document.getElementById("totalPrice").innerHTML = "Total price to pay: " + totalPriceToPay;
    


}

module.export = {price, gst, totalPriceToPay}

function toFrom(){
    var to=document.getElementById("to").value;
    var from=document.getElementById("from").value;

         if((to.match(/mumbai/gi)=== null && to.match(/delhi/gi)=== null && to.match(/pune/gi)=== null && to!=="")){
            alert("Please enter only Delhi,Pune,Mumbai")
         }
           
          if((from.match(/mumbai/gi)=== null && from.match(/delhi/gi)=== null && from.match(/pune/gi)=== null && from!=="")){
            alert("Please enter only Delhi,Pune,Mumbai")
        }    
        if(to.toLowerCase()===from.toLowerCase()) {
            alert("Mumbai-Delhi,Pune-Mumbai,Delhi-Pune are the only available routes")
        }

}
document.getElementById("return").addEventListener("change",(e)=>{
    if(!document.getElementById("return").checked){
         document.getElementById("return-date").disabled = true; 
         document.getElementById("return-date").value ="";
    }      
   else
        document.getElementById("return-date").disabled = false;
})
