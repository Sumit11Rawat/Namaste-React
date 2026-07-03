    
    // const heading= React.createElement("h1",{class:"heading"},"Hello from JaVaScript");
    // const root=ReactDOM.createRoot(document.getElementById('root'));
    // root.render(heading);

    // creating this schema using js with react
    // <div id='parent'>
    //     <div id='child'>
    //         <h1 id='heading'>

    //         </h1>
    //     </div>
    // </div>

    const parent=React.createElement(
        'div',
        { id:"parent"},
        React.createElement(
            'div',
            {id:'child'},
            [React.createElement('h1',{id:"h-1"},"This is first heading"),
            React.createElement('h2',{id:'h-2'},"This is second heading")]
        )
    )

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(parent);

    

   
