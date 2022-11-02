import { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {
	const [debounceValue, setDebounceValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebounceValue(value);
		}, delay);

		return () => {
			//뒷정리 함수
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debounceValue;
};
