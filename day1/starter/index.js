// API call
//card layout
//configurable fields

// function generateImage(contain){
// let img = document.createElement("img");
// img.setAttribute("class","user-image");
// img.setAttribute("id", "image");
// img.setAttribute("src","https://robohash.org/hicveldicta.png");
// cardContainer.appendChild(img);
// }

// function generateDetails(cardContainer){
//     let userName = document.createElement("div");
//     let userAge = document.createElement("div");
//     userName.setAttribute("class","userName");
//     userAge.setAttribute("class","userAge");
//     let uname = document.createTextNode("Name: Nitesh ");
//     let uage = document.createTextNode("Age: 23");
//     userName.appendChild(uname);
//     userAge.appendChild(uage);
//     cardContainer.appendChild(userName);
//     cardContainer.appendChild(userAge);
    
// }

// let cardContainer = document.getElementsByClassName("card")[0];
// generateImage(cardContainer);
// generateDetails(cardContainer);



async function fetchData() {
    try {
      let data = await fetch("https://dummyjson.com/users");
      let mainContainer = document.getElementsByClassName("main-conatiner")[0];
      let result = await data.json();
      result.users.forEach((ele) => {
        mainContainer.appendChild(maketemplate(ele));
      });
    } catch (ex) {
      console.log(ex);
    }
  }
  
  function maketemplate(user){
    // console.log(user.company);
    let conatiner = document.createElement("div");
    conatiner.setAttribute("class", "card");
    let image = document.createElement("img");
    image.setAttribute("class", "img");
    image.setAttribute("src", user.image);
    let details = document.createElement("table");
    details.setAttribute("class", "details-table");
  
    config.forEach((ele) => {
      let { key, formatter, label } = ele;
      // console.log(key, formatter, value);
      if (formatter) {
        // console.log(key);
        value = formatter(user);
      } else {
        // console.log(value,user);
        value = user[key];
      }
      details.appendChild(createDetails(label, value));
    });
    conatiner.appendChild(image);
    conatiner.appendChild(details);
    return conatiner;
  }

  
  function createDetails(label, value){
    let row = document.createElement("tr");
    row.setAttribute("class", "details");
    let lab = document.createElement("th");
    let val = document.createElement("td");
    lab.innerText = label;
    val.textContent = value;
    row.appendChild(lab);
    row.appendChild(val);
    // console.log(row);
    return row;
}


  let nameFormatter = (user)=> `${user.firstName} ${user.lastName}`;
  let companyNameFormatter = (user)=> `${user.company.name}`;
  let positionFormatter = (user)=> `${user.company.title}`;
  
  
  let config = [
      {key : "name", label : "Name", formatter: nameFormatter},
      {key : "age", label : "Age"},
      {key : "phone", label: "Phone no: "},
      {key: "bloodGroup",label: "Blood Group"},
      {key: "companyName", label: "Company", formatter: companyNameFormatter},
      {key: "position", label: "Position", formatter: positionFormatter},
      {key: "weight", label: "Weight"}
  ]
  
    fetchData();
