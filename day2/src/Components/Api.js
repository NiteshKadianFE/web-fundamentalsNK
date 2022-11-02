import axios from "axios";

 const postUserData = async(userObj) => {
	try {
		let response =  await axios.post("/users" ,userObj);
	}
	catch (error) {
		console.log(error);
	}
}

 const getUserData = async() => {
	try {
		let response =  await axios.get("/users" );
    console.log("....got user data")
    console.log(response)
		return response;
	}

	catch (error) {
		console.log(error);
	}
}

 const deleteUserData = async(userObj) => {
	try {
		// let response = await axios.delete(`/user?id=${userObj.id}`);
		// let response = await axios.delete("/users",userObj.id);
		let response = await axios.delete(`/users/${userObj.id}`);

		console.log(response);
		
	}
	catch (error) {
		console.log(error);
	}
}

 const putUserData = async(userObj) => {
	try {
    let response = await axios.put("/users" ,userObj);
		console.log(response);
		
	}
	catch (error) {
		console.log(error);
	}
}

export {postUserData, getUserData ,deleteUserData ,putUserData} ;