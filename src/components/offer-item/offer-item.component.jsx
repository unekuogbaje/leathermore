import './offer-item.styles.scss'

const OfferItem = ({ offer }) => {
    const { imageUrl, title } = offer;
    return (
        <div className="offer-section">
         <div className="background-image" style={{
          backgroundImage: `url(${imageUrl})`,
        }} />
         <div className="offer-details-section">
          <h2>{title}</h2>
          <p>Order now</p>
        </div>
      </div>
    );
};

export default OfferItem