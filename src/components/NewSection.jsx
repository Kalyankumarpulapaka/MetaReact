import "../styles/newsection.css"

const NewSection = ({ sectionContent }) => {
  const { title, description, items } = sectionContent;

  return (
    <div className="section">
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="items-container">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className="item-card">
              <img src={item.image} alt={item.title} className="item-image" />
              <h2 className="item-title">{item.title}</h2>
              <p className="item-description">{item.description}</p>
            </div>
          ))
        ) : (
          <p>No items available.</p>
        )}
      </div>
    </div>
  );
};
export default NewSection;
