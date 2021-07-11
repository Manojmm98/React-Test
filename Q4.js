// Q4) Understand the code below:
// function Banner() {
//  const [count, setCount] = useState(0);
//  const [name, setName] = useState("");
//  useEffect(() => {
//  console.log("Count is updated");
//  });
//  return (
//  <div>
//  <button onClick={() => setCount(count + 1)}>State: {count}</button>
//  <input
//  type="text"
//  value={name}
//  onChange={(e) => setName(e.target.value)}
//  />
//  </div>
//  );
// }
// It logs "Count is updated" message even when updating the value in textbox. How can we show the 
// log message only when the count state is updated?




// here we just have to pass count in dependency array because we want message when count is updated
//useEffect(() => {
    //  console.log("Count is updated");
    //  },[count])