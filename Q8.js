//Q9) We have a code snippet from a class component which registers and remove an event listener.
// componentDidMount() {
//  window.addEventListener("mousemove", this.handleMousePosition);
// }
// componentWillUnmount() {
//  window.removeEventListener("mousemove", this.handleMousePosition);
// }
//Convert this code to React hooks format.



///-----------------Answer------------------//

// we know the useeffects is mix of componentdidmount and componentdidupdate and componentwill unmount
// we always write the component will unmount inside return function so here use useeffect and inside return write componentWillUnmount partial
// and return will work as componentWillUnmount when we pass indepency array as empty


useEffect(() => {
    window.addEventListener("mousemove", handleMousePosition);
    return () => {
        window.removeEventListener("mousemove", handleMousePosition);
    }
}, [])
