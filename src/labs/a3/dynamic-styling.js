// React.js can generate content dynamically based on algorithms written in
// JavaScript. We can also dynamically style the content by programmatically

import Classes from "./classes";
import Styles from "./styles";

// controlling the classes and styles applied to the content
function DynamicStyling() {
    return (
        <div>
            <h1>Dynamic Styling</h1>
            <Classes />
            <Styles />
        </div>
    );
}

export default DynamicStyling;