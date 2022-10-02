import OfferItem from '../offer-item/offer-item.component';

import './chron.styles.scss';

const Chron = ({offers}) => {
    return (
        <div className="chron-section">
      {offers.map((offer) => (
        <OfferItem key={offer.id} offer={offer} />
      ))}
    </div>
    )
}

export default Chron;