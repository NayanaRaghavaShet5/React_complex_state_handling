import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    first: "",
    last: ""
  });

  function handleName(e) {
    const { value, name } = e.target;
    console.log(value);
    setFullName(preValue => {
      if (name === "fName") {
        return { first: value, last: preValue.last };
      } else if (name === "lName") {
        return {
          first: preValue.first,
          last: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.first} {fullName.last}
      </h1>
      <form>
        <input
          onChange={handleName}
          name="fName"
          placeholder="First Name"
          value={fullName.first}
        />
        <input
          onChange={handleName}
          name="lName"
          placeholder="Last Name"
          value={fullName.last}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
