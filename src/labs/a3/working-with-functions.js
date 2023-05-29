import ArrowFunctions from "./arrow-functions";
import ES5Functions from "./es5-functions";
import FunctionParenthesisAndParameters from "./function-parenthesis-and-parameters";
import ImpliedReturn from "./implied-returns";

function WorkingWithFunctions() {
    return (
      <>
        <ES5Functions />
        <ArrowFunctions />
        <ImpliedReturn />
        <FunctionParenthesisAndParameters />
      </>
    );
}

export default WorkingWithFunctions;