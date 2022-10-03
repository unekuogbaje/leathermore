import Chron from '../../components/chron/chron.component';

import { Outlet } from 'react-router-dom';

const Home = () => {

  const offers = [
    {
      id: 1,
      title: "Move-in or deep cleaning",
      imageUrl: "https://thumbs.dreamstime.com/b/janitor-cleaning-carpet-s-hand-vacuum-cleaner-126282708.jpg",
    },
    {
      id: 2,
      title: "Regular home cleaning",
      imageUrl: "https://imgb.srgcdn.com/8jeyrAnPyW8tv6FN4XaF.jpg",
    },
    {
      id: 3,
      title: "Funiture/upholestery",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf4rYYWeRPW9yHmkLCRMA-0kOSsvWcaI6nPA&usqp=CAU",
    },
    {
      id: 4,
      title: "Laundry",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwEnSeUR23uRlNmjpN94atkJHO5ZoQntsZUGUUjowKI6Ot9mte-i2mB9GKIgsPrG6iEA4&usqp=CAU",
    },
    {
      id: 5,
      title: "Fumigation",
      imageUrl: "https://cleaneat.ng/wp-content/uploads/2017/10/pest-terminator-lagos.jpg",
    },
  ]
  return (
    <Chron offers={offers} />
  );
}

export default Home;