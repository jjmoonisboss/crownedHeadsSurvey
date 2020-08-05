function kinkyResults(){
  var form = document.getElementById("kinkyhair");
  // finding id curly hair from curly.html and storing it in the var form

// its grabbing curltype and extracting its value which stores it into form
  var hairType = form.elements['4-hair'].value; // 4a, 4b, 4c
  var porosity = form.elements['pore'].value; //high, low, normal
  var frizz = form.elements['frizz'].value; //none,regular,crazy
  var damage = form.elements['damage'].value; //nodamage,somedamage, highdamage
  var growth = form.elements['growth'].value; //growth, nogrowth
  //var result = "https://sites.google.com/csedge.org/curlyhairresults/home";  

//wrapped if statement checking if hairType = value + porosity hits another statement, etc

//coach donna's src code:
// if (hairType=="3a" && frizz=="none" && damage=="nodamage" && porosity=="low"){}
// else if(hairType=="3b" && frizz=="none" && damage=="somedamage" && porosity=="high"){result = "";
// }


//   if (hairType == "3a"){
//     result="https://sites.google.com/csedge.org/results-3a/home";
//     // if (porosity == "high"){
//     //     if (damage == "highdamage"){
//     //       result="https://sites.google.com/csedge.org/curlyhairresults/home";
//     //     }
//     // }
//   }
//   else if (hairType == "3b"){
//     result="https://sites.google.com/csedge.org/results-3b/home";
//     //   if (porosity == "high"){
//     //   if (frizz == "crazy"){
//     //     result="https://sites.google.com/csedge.org/curlyhairresults/home";
//     //   }
//     // }
//   }
  
//   else if (hairType == "3c"){
//     result="https://sites.google.com/csedge.org/results-3c/home ";
//       // if (porosity == "high"){
//       // if (frizz == "crazy"){
//       //   result="";
//       //}
//     //}
//   }


// window.open(result);
}

function displayResults(event) {
  console.log("e");
  var results = [
    {url: "https://cdn.shopify.com/s/files/1/0075/0639/5203/products/Untitled-1_904c9223-4ffc-4b87-a57d-693893a49df2_600x.jpg?v=1576759264", name: "cream of nature mango shampoo+ condish set", type: "4" ,frizz: false , damage:false , growth:false, dry:true}, 
    {url: "https://lesalonimperial.com/wp-content/uploads/2017/06/71N3f8VPGVL._SL1159_.jpg", name: "ArtNaturals Moroccan Argan Oil Hair Loss Shampoo & Conditioner Set", name: "argan oil hair loss shampoo", type: "4" ,frizz:false, damage:false , growth:true, dry:false}, 
    {url: "https://cdn.shopify.com/s/files/1/1241/7084/products/smoothing-shampoo_9d5adcfe-5735-46cd-9f7f-b263c72fd96f_grande.jpg?v=1528689570", name: " Palmer’s Olive Oil Formula Smoothing Shampoo", type: "4" , frizz:true , damage:false , growth:false, dry:false},
    {url: "https://images-na.ssl-images-amazon.com/images/I/61om0w0yi6L._SL1500_.jpg", name: "Hydratherma Naturals Amino Plus Protein Deep Conditioning Treatment, 8 Oz", type: "4" , frizz:false , damage:true , growth:false, dry:false}];

  // represents one product ^^ , everything inside {} i an object
  

  for (var product of results){
    // console.log(element);
    if(shouldShowProduct(product)){
    renderProduct(product);
    }
  }
}
function renderProduct(product) {
  var node = document.createElement("img");
  node.setAttribute("src",product.url);
  var textnode = document.createTextNode(product.name);
  node.appendChild(textnode);
  document.getElementById("element").appendChild(node);
  }
  

  function shouldShowProduct(product) {
      var form = document.getElementById("kinkyhair");

      var hairType = form.elements['4-hair'].value; // 3a, 3b, 3c
      var porosity = form.elements['pore'].value; //high, low, normal
      var frizz = form.elements['frizz'].value; //none,regular,crazy
      var damage = form.elements['damage'].value; //nodamage,somedamage, highdamage
      var growth = form.elements['growth'].value; //growth, nogrowth

       if (product.type == hairType){
            return true;} 
       if (product.damage == true && damage == "somedamage"){
          return true;}
        else if (product.damage == true && damage == "highdamage"){
          return true;}        
       if (product.growth == true && growth == "growth"){
          return true;} 
      if (product.dry== true && porosity == "low"){
            return true;
          }
      else if (product.dry== true && porosity == "high"){
              return true;
            }     
      if (product.frizz == true && frizz == "crazy"){
        return true;
      } 
      else if (product.frizz == true && frizz == "regular"){
        return true;
      }
    return false;

    
    // checks if this is a match 
  }


//  console.log(displayResults());

// return();
// var Dataform = new Dataform(form[0]);

// alert('Your hair has' + ' ' + Dataform.get('curltype') + ' ' + Dataform.get('pore') + ' ' + Dataform.get('frizz') + ' ' + Dataform.get('damage') );

// if 'curltype' 





