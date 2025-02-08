import React from "react";
function App() {
    return <h1>Hello, React from CDN!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);