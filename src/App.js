const App = () => {

  const offers = [
    {
      id: 1,
      title: "Move-in or deep Cleaning",
    },
    {
      id: 2,
      title: "Regular home Cleaning",
    },
    {
      id: 3,
      title: "Funiture or upholestery Cleaning",
    },
    {
      id: 4,
      title: "Laundry",
    },
    {
      id: 5,
      title: "Fumigation",
    },
  ]
  return (
    <div className="offers-section">
      {offers.map(({title}) => (
        <div className="offer-section">
        <div className="background-image" />
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
