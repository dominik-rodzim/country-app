export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const DELETE_COUNTRY = 'DELETE_COUNTRY';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const SET_CONTINENT = 'SET_CONTINENT';

export function getCountries() {
	return {
		type: GET_COUNTRIES,
	}
}

export function getCountry() {
	return {
		type: GET_COUNTRY,
	}
}

export function deleteCountry() {
	return {
		type: DELETE_COUNTRY,
	}
}

export function searchCountries() {
	return {
		type: SEARCH_COUNTRIES,
	}
}

export function setContinent() {
	return {
		type: SET_CONTINENT,
	}
}