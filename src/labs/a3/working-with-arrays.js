import AddingAndRemovingDataToFromArrays from "./adding-and-removing-data-to-from-arrays";
import ArrayIndexAndLength from "./array-index-and-length";
import ForLoops from "./for-loops";
import Map from "./map-function";
import JSONStringify from "./json-stringify";
import FindFunction from "./find-function";
import FindIndex from "./find-index";
import FilterFunction from "./filter-function";

function WorkingWithArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ["string1", "string2"];

    let variableArray1 = [
      functionScoped,
      blockScoped,
      constant1,
      numberArray1,
      stringArray1,
    ];

    return (
      <>
        <h3>Working with Arrays</h3>
        numberArray1 = {numberArray1}
        <br />
        stringArray1 = {stringArray1}
        <br />
        variableArray1 = {variableArray1}
        <ArrayIndexAndLength />
        <AddingAndRemovingDataToFromArrays />
        <ForLoops />
        <Map />
        <JSONStringify />
        <FindFunction />
        <FindIndex />
        <FilterFunction />
      </>
    );
}

export default WorkingWithArrays;