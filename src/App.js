

const App = () => {

  const offers = [
    {
      id: 1,
      title: 'move-in & deep cleaning',
    }
  ]
  return (
    <div className="offers-section">
      {offers.map((title) => (
        <div className="offer-section">
        <div className="offer-details-section">
          <h2>{title}</h2>
          <p>Book now</p>
        </div>
      </div>
      ))}

    </div>
  );
}

export default App;
