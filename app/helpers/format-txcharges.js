import { helper as buildHelper } from '@ember/component/helper';


export function formatTxCharges(value) {
	value = value * 0.000000001 * 0.000000001;
	return value.toFixed(8);
}

export default buildHelper(formatTxCharges);
