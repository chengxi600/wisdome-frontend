import { styled } from '@mui/system';

export const StyledBox = styled('Box')(() => ({
    display: 'flex',
    flex: '1 1 0%',
    padding: '1.25rem',
    borderRadius: '20px',
    backgroundColor: 'rgb(246 248 248)',
    boxShadow: '0px 0px 4px 0px #856fc2',
}));

/**
 * Cumulative density function for a normal random variable val
 * https://www.math.ucla.edu/~tom/distributions/normal.html?
 *
 * 
 * @param {number} val - value
 * @param {number} mean - mean 
 * @param {number} std - standard deviation
 * @returns cumulative probability following a normal curve  
 */
export default function cdf(val, mean, std) {
    var x = (val - mean) / std
    var t = 1 / (1 + .2315419 * Math.abs(x))
    var d =.3989423 * Math.exp( -x * x / 2)
    var prob = d * t * (.3193815 + t * ( -.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))))
    if( x > 0 ) prob = 1 - prob

    return prob
}