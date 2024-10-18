function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0]; // t h i s - s retured first and then i - as the callstack works
}

console.log(reverse("this"));
