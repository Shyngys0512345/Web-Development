//using operator '?'
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}

//using operator OR ||
function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
} 