const getIndexOfLowestValue = 
module.exports.getIndexOfLowestValue = (list) => {
	return list.reduce(
		(acc, val, i) => {
			return (val < acc.value)
				? { index: i, value: val }
				: acc;
		},
		{ index: 0, value: Infinity }
	).index;
};