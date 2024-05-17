import Cards from "./Cards";
import { cardData } from "../utils/Constants";


const CardsContainer = () => {
  return (
    <div className="card-container">
      {cardData.map((card, i) => (
        <Cards
          key={i}
          title={card.title}
          iconPath={card.iconPath}
          description={card.description}
          iconColor={card.iconColor}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
