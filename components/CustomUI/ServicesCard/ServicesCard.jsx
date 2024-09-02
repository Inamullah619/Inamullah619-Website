const ServicesCard = ({ cardTitle, cardPara, className }) => {
  return (
    <div className={`servicesCard ${className}`}>
      <h2>{cardTitle}</h2>
      <p>{cardPara}</p>
    </div>
  );
};

export default ServicesCard;
