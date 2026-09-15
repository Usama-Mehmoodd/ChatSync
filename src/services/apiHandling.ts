import axios from 'axios';
import type { SignupData, LoginData } from "../../types/index";


export async function signup(formData: SignupData) {
    try {
        const res = await axios.post('http://localhost:5000/signup', formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log("Response from server:", res.data);
        return res.data;
    } catch (error) {
        console.error("Error signing up:", error);
        throw error;
    }
}

export async function login(formData: LoginData) {
    try {
        const res = await axios.post('http://localhost:5000/login', formData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log("Response from server:", res.data);
        return res.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
}
