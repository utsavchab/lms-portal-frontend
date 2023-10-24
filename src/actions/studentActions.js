import { 
	STUDENT_LOGIN_REQUEST,
	STUDENT_LOGIN_SUCCESS,
	STUDENT_LOGIN_FAIL,
	STUDENT_LOGOUT,
	STUDENT_REGISTER_REQUEST,
	STUDENT_REGISTER_SUCCESS,
	STUDENT_REGISTER_FAIL } from '../constants/studentConstants.js'

import axios from 'axios'

export const login = (stud_email, password) => async (dispatch) => {
	try {
		dispatch({
			type: STUDENT_LOGIN_REQUEST
		})

		const config = {
			headers: {
				'Content-type': 'application/json'
			}
		}
		console.log(stud_email)
		const { data } = await axios.post(`${process.env.REACT_APP_BASE}/api/student/login`, 
			{ stud_email, password, config })

		dispatch({
			type: STUDENT_LOGIN_SUCCESS,
			payload: data
		})

		localStorage.setItem('studentInfo', JSON.stringify(data))

	}

	catch (error) {
        if(error.status == 401){
			alert("Invalid Credentials")
            dispatch ({
                type: STUDENT_LOGIN_FAIL,
                payload: error.response && error.response.data.message ? 
                error.response.data.message : "Invalid Credentials",
            })

        }else if(error.status == 404){
			alert("Student Not Registered. Pleasse check Email id or Register Yourself")
            dispatch ({
                type: STUDENT_LOGIN_FAIL,
                payload: error.response && error.response.data.message ? 
                error.response.data.message : "Student Not Registered",
            })

        }else{
			alert("Server Down. We will be live Soon.")
			dispatch ({
                type: STUDENT_LOGIN_FAIL,
                payload: error.response && error.response.data.message ? 
                error.response.data.message : "Server Down",
            })
		}
		
	}
}

export const studentLogout = () => (dispatch) => {
	localStorage.removeItem('studentInfo')
	dispatch({
		type: STUDENT_LOGOUT
	})
}

export const register = (name, email, password, mobile, address) => async (dispatch) => {
	
	try {
		dispatch({
			type: STUDENT_REGISTER_REQUEST
		})

		const config = {
			headers: {
				'Content-type': 'application/json'
			}
		}

		const { data } = await axios.post(`${process.env.REACT_APP_BASE}/api/student/register`, 
			{ name, email, password, mobile, address }, config)

	        dispatch({
			type: STUDENT_REGISTER_SUCCESS,
			payload: data
		})

		dispatch({
			type: STUDENT_LOGIN_SUCCESS,
			payload: data
		})

		localStorage.setItem('studentInfo', JSON.stringify(data))

	}

	catch (error) {
		dispatch ({
			type: STUDENT_REGISTER_FAIL,
			payload: error.response && error.response.data.message ? 
			error.response.data.message :
			"Student Already Exists,\n Please use login tab below to LOGIN.",
		})
	}
}

export const profileUpdate =async (newData)=>{

	const { data } = await axios.post(`${process.env.REACT_APP_BASE}/api/student/profileupdate`, 
		{ newData })
	// console.log("newData ",newData)
	localStorage.setItem('studentInfo',JSON.stringify(newData));
	
}