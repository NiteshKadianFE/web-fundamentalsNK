// How to fetch Data from server.

function fetchDataFromServer() {
  fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then((json) => printData(json));
}

function printData(data) {
  console.log(data);

 let {limit, skip, total, users} = data;
//  console.log(users);

//  let age = users.reduce((a,b)=>{
// a+=b.age;
// return a;
//  },0)
// console.log(age/users.length);

// let names = users.map((ele) => `${ele.firstName} ${ele.lastName}`);
// console.log(names);

// let tempData = data.filter((a) => a.age>50);
// console.log(tempData);
// }

let res = users
.map((ele) =>{
  return {name: `${ele.firstName} ${ele.lastName}`, age: ele.age, weight: ele.weight};
})
.filter((ele) => ele.age < 50)
.reduce(
  (a,b) =>{
    a.weight += b.weight;
    a.index++;
    return a;
  },
  {weight:0, index:0}
);
console.log(res.weight);
console.log(res.index);

}

fetchDataFromServer();
