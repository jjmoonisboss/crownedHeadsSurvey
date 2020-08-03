function displayResults() {
  var results = [{url: "https://lh3.googleusercontent.com/ujQxCmVYW909JTbmpMP1sYTbEHlHMf1-FUh7JPcIv3w3f3RHuQi0uGasuvCcs1oW-u6z6AhPyA=w1280", name: "macha shampoo", type: "2a" ,frizz: false}, {url: "https://lh4.googleusercontent.com/Z0p8mPvBB8S_Py2rjZQdu5TaW8Lf9v4eh5_Z-lRp6uS6gRP-AduBkiLeJGKb7QcP6q0W0b1i=w1280", name: "shea shampoo", type: "3b" ,frizz:false}, {url: "https://lh5.googleusercontent.com/gXW-0Epfd080hwpJtO0_nYXejhE4Idd8K88vKCgwE6mgeGeCu4na6BlomV0ehCot28qpgb9sLDvk6YrOqYWBXPdYaYZKTfu18t3X7rqb1IsSVPiqEsdI=w1280", name: "mango shea shampoo", type: "4a" , frizz:true}];

  // represents one product ^^ , everything inside {} i an object
  

  for (var element of results){
    console.log(element);
  }
}
function addOn() {
  var node = document.createElement("LI");
  var textnode = document.createTextNode("dry product");
  node.appendChild(textnode);
  document.getElementById("element").appendChild(node);
  }
}

 console.log(displayResults());