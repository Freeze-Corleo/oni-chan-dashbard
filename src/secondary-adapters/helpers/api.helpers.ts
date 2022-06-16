import axios from 'axios';
import Cookies from 'js-cookie';

const axiosConfig = axios.create({
	baseURL: "http://localhost:8080",
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Headers': '*',
	},
	withCredentials: true,
	proxy: {
		host: "http://localhost",
		port: 420,
	},
});

export const withAuthorization = () => {
	const token = Cookies.get('tokenart_jwt');
	if (token !== undefined) {
		axiosConfig.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	}
};

export const initializeJwtHeader = (token: string) => {
	Cookies.set('tokenart_jwt', token, {
		expires: 3600000000,
	});

	axiosConfig.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export default axiosConfig;