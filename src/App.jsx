import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data/data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.key} item={item} />;
  });

  return (
    <>
      <Navbar />
      {cards}
    </>
  );
}

export default App;
