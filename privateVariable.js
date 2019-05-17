function privateVariable() {
  const secret = "Private Variable";
  return function() {
    return secret;
  };
}

const getPrivateVariable = privateVariable();

console.log(getPrivateVariable());
