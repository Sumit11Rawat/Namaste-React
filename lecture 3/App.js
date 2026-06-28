import React from "react";
import ReactDOM from "react-dom/client";
// React element
  const H_three=(
    <h3>This is Heading three</h3>
  )
// React functional component
const H_second = () => {
    return <h2>This is a Heading two</h2>
}
const FunctionalHeading = () => {

    return (
        <>
            <h1>This is the main heading</h1>
            <H_second />
            {H_three}
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FunctionalHeading />);
