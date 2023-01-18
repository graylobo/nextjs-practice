function test(texts, ...val) {
  console.log(texts);
}

function some() {
  console.log("zz");
}
test(some)`zz`;
