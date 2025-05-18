import { useNavigate } from "react-router-dom";

const cards = ["🦄 Unicorn", "🔮 Crystal Ball", "🧙 Wizard", "🐉 Dragon", "🌈 Rainbow"];

function Page2() {
  const navigate = useNavigate();

  const pickCard = (card) => {
    localStorage.setItem("card", card);
    navigate("/page3");
  };

  return (
    <div>
      <h2>Pick a card 🃏</h2>
      {cards.map((card, i) => (
        <button key={i} onClick={() => pickCard(card)} style={{ fontSize: "2rem", margin: "10px" }}>
          {card}
        </button>
      ))}
    </div>
  );
}

export default Page2;
