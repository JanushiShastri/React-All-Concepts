function Button(){
    // const handleClick= () => console.log("ouch!"); 
    // const handleClick2 = () => console.log('${name} stop clicking me');
    const handleClick = (event) => event.target.textContent = "OUCH!";
    return (<button onClick={() => handleClick(event)}>Click Me!</button>);
}
export default Button