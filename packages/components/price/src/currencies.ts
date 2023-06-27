import currency from 'currency.js';

// https://currency.js.org/#options

export const EURO = (value: string | number) =>
	currency(value, {
		symbol: '€',
		decimal: ',',
		separator: '.',
		pattern: '!#',
		precision: 2,
	});
