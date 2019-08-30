

const container = document.querySelector("#container")

document.querySelector("#saveEntry").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const thing = document.querySelector("#thing").value;
    const location = document.querySelector("#location").value;
    console.log(document.querySelector("#thing").value);

    // Once you have collected all the values, update the DOM
    // with some HTML
    container.innerHTML += `
        <section>
            <h3>I can purchase ${thing} at ${location}</h3>
            
        </section>
    `

})