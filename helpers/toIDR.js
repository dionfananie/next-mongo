/**
 * This function will help handle response with generic pattern by using
 * success validations function map to determine different case of valid response
 *
 * @param  {number} idr:
 *   Formatted number of currency
 *
 * @param  {boolean} withIDR:
 *   Radix value if you want add RP after conversion
 *
 * @return {string}
 *   Return value will be parsed to string with thousand separator
 *
 * @example
 *   const string = toIDR('12000'); // string = Rp12.000
 */
export default function toIDR(idr, withIDR = true) {
    if (!idr) return 'Rp 0';
    const parsed = idr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return `${withIDR ? 'Rp ' : ''}${parsed}`;
}
