import React from "react";
import ReactDOM from "react-dom/client";

const parent=React.createElement(
        'div',
        { id:"parent"},
        React.createElement(
            'div',
            {id:'child'},
            [React.createElement('h1',{id:"h-1", key:"h-1"},"This is first heading"),
            React.createElement('h2',{id:'h-2', key:"h-2"},"This is second heading")]
        )
    )

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(parent);
