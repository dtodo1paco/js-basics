function foo1()
{
  return {
    bar: "hello"
  };
}

function foo2()
{
  return
  {
    bar: "hello"
  };
}

console.log("foo1: " + foo1());
console.log("foo2: " + foo2());