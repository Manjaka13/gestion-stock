import { useState, useEffect } from "react";
import axios from "axios";
import endpoints from "./endpoints";

export default function useGet(path) {
	const [response, set_response] = useState([]);
	const [error, set_error] = useState(null);
	const [is_loading, set_is_loading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			axios
				.get(endpoints.base_url + path)
				.then((res) => set_response(res.data))
				.finally(() => set_is_loading(false))
				.catch((e) => set_error(e));
		};
		fetchData();
	}, [path]);

	return [response, error, is_loading];
}
