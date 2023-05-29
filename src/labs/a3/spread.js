function Spread() {
  const arr1 = [1, 2, 3];
  const arr2 = [...arr1, 4, 5, 6];
  const obj1 = { a: 1, b: 2, c: 3 };
  const obj2 = { ...obj1, d: 4, e: 5, f: 6 };
  // Since obj1 also has a property called b with a value of 2,
  // there is potential collision of properties in obj3. The collision is
  // resolved by keeping the last declaration overriding any previous values,
  // so obj3.b ends up being 4
  const obj3 = { ...obj1, b: 4 };
  return (
    <div>
      <h2>Spread Operator</h2>
      <h3>Array Spread</h3>
      arr1 = {JSON.stringify(arr1)} <br />
      arr2 = {JSON.stringify(arr2)} <br />
      <h3>Object Spread</h3>
      {JSON.stringify(obj1)} <br />
      {JSON.stringify(obj2)} <br />
      {JSON.stringify(obj3)} <br />
    </div>
  );
}
export default Spread;
