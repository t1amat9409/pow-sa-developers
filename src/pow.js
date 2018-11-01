/**
 * @author Aliziwe Mahono
 * @description The Math.pow() function returns the base to the exponent power, that is, base^exponent
 * @param base the base number, can be any inter value
 * @param base the exponent number, can be any inter value
 * @example pow({base:number, exponent: number, isDebug: bool})
 */
const pow = ({ base = 0, exponent = 0, isDebug = false }) => {
	let _base = base ? base : 0;
	let _exponent = exponent ? exponent : 0;
	const _baseArray = Array(_exponent)
		.fill(_base)
		.map(item => item);

	const expressionTemplate = `${_baseArray.join("*")}`;

	console.log(eval(expressionTemplate));
	//NOTE: Debug mode is used to compare this custom power method with the built-in method
	if (isDebug)
		console.log(
			"This is only triggered in debug mode",
			Math.pow(_base, _exponent)
		);
};

export default pow;
