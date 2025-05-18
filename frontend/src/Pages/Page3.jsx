import { useEffect, useState } from "react";
import axios from "axios";

function Page3() {
  const [fortune, setFortune] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("name");
    const number = localStorage.getItem("number");
    const card = localStorage.getItem("card");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("number", number);
    formData.append("card", card);

    axios.post("http://localhost:8000/fortune", formData)
      .then(res => setFortune(res.data.fortune))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Your Fortune 🔮</h2>
      <p>{fortune}</p>
    </div>
  );
}

export default Page3;
