/*
    Manages everything about user authentication
*/

const session_name = "user";

const login = (user) => {
	sessionStorage.setItem(session_name, JSON.stringify(user));
};

const logout = () => {
	sessionStorage.removeItem(session_name);
};

const get_user = () => {
	return JSON.parse(sessionStorage.getItem(session_name));
};

const is_logged = () => {
	const user = get_user();
	return user != null && typeof user === "object" ? true : false;
};

export { login };
export { logout };
export { get_user };
export { is_logged };
export default {
	login,
	logout,
	get_user,
	is_logged,
};
