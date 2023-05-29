import React from "react";
import ConditionalOutputIfElse from "./conditional-output-if-else";
import ConditionalOutputInline from "./conditional-output-inline";
const ConditionalOutput = () => {
  return (
    <>
        <h1>Conditional Output</h1>
      <ConditionalOutputIfElse />
      <ConditionalOutputInline />
    </>
  );
};
export default ConditionalOutput;
