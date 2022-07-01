import axios from 'axios';
import Cookies from 'js-cookie';

const axiosConfig = axios.create({
	baseURL: "https://test-bigmom-api.herokuapp.com/",
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Headers': '*',
	},
	proxy: {
		host: "http://localhost",
		port: 420,
	},
});

export const withAuthorization = () => {
	const token = Cookies.get('FREEZE_JWT');
	if (token !== undefined) {
		axiosConfig.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	}
};

export const initializeJwtHeader = (token: string) => {
	Cookies.set('FREEZE_JWT', token, {
		expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 3),
	});

	axiosConfig.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const eraseJwtHeader = (token: string) => {
	Cookies.remove(token);
};

export default axiosConfig;