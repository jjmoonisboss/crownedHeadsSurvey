function kinkyResults(){
  var form = document.getElementById("kinkyhair");
  // finding id curly hair from curly.html and storing it in the var form

// its grabbing curltype and extracting its value which stores it into form
  var hairType = form.elements['curltype'].value; // 4a, 4b, 4c
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


  if (hairType == "3a"){
    result="https://sites.google.com/csedge.org/results-3a/home";
    // if (porosity == "high"){
    //     if (damage == "highdamage"){
    //       result="https://sites.google.com/csedge.org/curlyhairresults/home";
    //     }
    // }
  }
  else if (hairType == "3b"){
    result="https://sites.google.com/csedge.org/results-3b/home";
    //   if (porosity == "high"){
    //   if (frizz == "crazy"){
    //     result="https://sites.google.com/csedge.org/curlyhairresults/home";
    //   }
    // }
  }
  
  else if (hairType == "3c"){
    result="https://sites.google.com/csedge.org/results-3c/home ";
      // if (porosity == "high"){
      // if (frizz == "crazy"){
      //   result="";
      //}
    //}
  }


window.open(result);
}

function displayResults(event) {
  console.log("e");
  var results = [
    {url: "https://i01.hsncdn.com/is/image/HomeShoppingNetwork/carols-daughter-almond-milk-ultra-nourishing-hair-mask~553557.jpg", name: "Carol’s Daughter Almond Milk Ultra-Nourishing Hair Mask", type: "3" ,frizz: false , damage:false , growth:false, dry:true}, 
    {url: "https://image.influenster.com/eyJrZXkiOiAibWVkaWEvcHJvZHVjdC9pbWFnZS9wcm9kdWN0L2ltYWdlL2ZlNDRmYzEzYjJjYTMwYjg4MDdmZjhkZWZlYTQ5YzU5MC5qcGciLCAiZWRpdHMiOiB7InJlc2l6ZSI6IHsiaGVpZ2h0IjogNzUwLCAid2lkdGgiOiA3NTAsICJiYWNrZ3JvdW5kIjogeyJyIjogMSwgImIiOiAxLCAiYWxwaGEiOiAwLCAiZyI6IDF9LCAid2l0aG91dEVubGFyZ2VtZW50IjogdHJ1ZSwgImZpdCI6ICJpbnNpZGUifX0sICJidWNrZXQiOiAiaW5mbHVlbnN0ZXJfcHJvZHVjdGlvbiIsICJleHRlbmQiOiB7fX0=", name: "ArtNaturals Moroccan Argan Oil Hair Loss Shampoo & Conditioner Set",name: "argan oil hair loss shampoo", type: "3" ,frizz:false, damage:false , growth:true, dry:false}, 
    {url: "https://lh3.googleusercontent.com/proxy/ovZLAP0YS8NK8Re3GB8jgHXWicrDfYZf65xomH3imzrAj16PMhNK29H2qDzUXMkOp7QXSBkS3CdRUnv7f67ZZTgreFLv3l4hCJhK9L_NhJj0jgg-9wk8HFly-ZFH7et0r3lblTWIjGejpv5ySarsamcf1Q", name: "mop top anti frizz gel", type: "3" , frizz:true , damage:false , growth:false, dry:false},
    {url: "https://cdn.shopify.com/s/files/1/1006/4028/products/moist_shampoo_website2_1024x.png?v=1594676151", name: "Bounce Curl Pure Silk Moisturizing Shampoo", type: "3" , frizz:false , damage:true , growth:false, dry:false}];

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
      var form = document.getElementById("curlyhair");

      var hairType = form.elements['curltype'].value; // 3a, 3b, 3c
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





