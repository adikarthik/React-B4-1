const Cards = ({ title, iconPath, description, iconColor }) => {
  return (
    <div className="cardContainer">
      <div className="card">
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill={iconColor}
            class="bi bi-briefcase"
            viewBox="0 0 16 16"
          >
            <path d={iconPath} />
          </svg>
        </div>
        <div className="content">
          <h4 className="title">
            <a href="title">{title}</a>
          </h4>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  ); 
};

export default Cards;
