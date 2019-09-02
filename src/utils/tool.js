export function getLyric(lyric) {
	const result = new Array();
	const tempLyric = lyric.split('\n');
	tempLyric.forEach(element => {
		const time = element.substring(element.indexOf("[") + 1, element.indexOf("]")).split(':');
		result.push({
			time: parseFloat(time[0] * 60) + parseFloat(time[1]),
			lyr: element.substring(element.indexOf("]") + 1, element.length)
		})
	});
	return result;
}
export function s_2_hs(s) {
	let s_m = parseInt(s / 60);
	let s_s = parseInt(s % 60);
	return `${PrefixInteger(s_m, 2)}:${PrefixInteger(
		s_s,
		2
	)}`;
}

function PrefixInteger(num, length) {
	return (Array(length).join("0") + num).slice(-length);
}