import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Page1() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("number", number);
    navigate("/page2");
  };

  return (
    <div>
      <h2>Welcome! ✨</h2>
      <input placeholder="Enter your name" onChange={e => setName(e.target.value)} />
      <input placeholder="Favorite number" onChange={e => setNumber(e.target.value)} />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Page1;
