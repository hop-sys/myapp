const Thirdcomponent=() =>{
    // variables enables us to create dynamic websites.(meaning the contents of the website will be changing automatically over time)
    // below we declare some variables.Note: Variables are usually declared just before the return statement in Reactjs.

    let name = "Hope";
    let age = 18;
    let message = "I love programming"
    return(
        <div className="Thirdcomponent">
            <h1>Welcome to my third component</h1>
            {/* below we bind our variables. We use the variable names that we had declared before. */}
            <h5>My name is {name}</h5>
            <h5>My age is {age}</h5>
            <h5>And {message}</h5>
        </div>
    )
}

export default Thirdcomponent;