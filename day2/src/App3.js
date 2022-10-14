function fetchDataFromServer() {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((json) => printData(json));
  }
  
  function printData(data) {
    console.log(data);
  
   let {limit, skip, total, users} = data;

   let res = users
   .filter((ele) => ele.age >25)
   .map((ele) =>{
    return {name: `$(ele.firstName) $(ele.lastName)`, age: ele.age};
   })
}

fetchDataFromServer();