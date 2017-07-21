function narcissistic( value ) {
  // Code me
  const digits = Array.from(value.toString()).map(Number);
  const digitsLen = digits.length;
  
  const total = digits.reduce((a, b) => a + Math.pow(b, digitsLen),0);
  
  return total === value;
  
}