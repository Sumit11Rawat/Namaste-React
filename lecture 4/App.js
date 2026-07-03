import React from "react"
import ReactDOM from "react-dom/client"

const Header = () => {
  return (
    <div className="header" >
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVfKx4DZrRelce5JvVqlUtFeW3b-Zc_vWyCwnZAjYWsmkcfcYVyi_eo3Q&s=10"
        />
      </div>

      {/* this is navbar */}
      <div className="navbar">
        <ul>
          <li> Home </li>
          <li> About Us </li>
          <li> Contact Us </li>
          <li> Cart </li>
        </ul>
      </div>
    </div>
  )
}


{/*. this is restaurant card.  */ }
//   it can have 
//   1 name of Restaurant
//   2 rating
//   3 type of cuisine
//   4 cost of two




// data object
// array of json data 


const dataItem = [
  {
    id: "res_001",
    resName: "Spice Garden",
    cuisine: "North Indian",
    rating: 4.5,
    img: "https://loremflickr.com/600/400/northindian,food",
    costForTwo: 800
  },
  {
    id: "res_002",
    resName: "Sushi Haven",
    cuisine: "Japanese",
    rating: 4.7,
    img: "https://loremflickr.com/600/400/sushi",
    costForTwo: 1800
  },
  {
    id: "res_003",
    resName: "Pizza Junction",
    cuisine: "Italian",
    rating: 4.3,
    img: "https://loremflickr.com/600/400/pizza",
    costForTwo: 1200
  },
  {
    id: "res_004",
    resName: "Dragon Wok",
    cuisine: "Chinese",
    rating: 4.2,
    img: "https://loremflickr.com/600/400/chinesefood",
    costForTwo: 950
  },
  {
    id: "res_005",
    resName: "Burger Republic",
    cuisine: "Fast Food",
    rating: 4.1,
    img: "https://loremflickr.com/600/400/burger",
    costForTwo: 700
  },
  {
    id: "res_006",
    resName: "Tandoori Tales",
    cuisine: "Mughlai",
    rating: 4.6,
    img: "https://loremflickr.com/600/400/tandoori,chicken",
    costForTwo: 1400
  },
  {
    id: "res_007",
    resName: "Green Bowl",
    cuisine: "Healthy",
    rating: 4.4,
    img: "https://loremflickr.com/600/400/salad,healthy",
    costForTwo: 850
  },
  {
    id: "res_008",
    resName: "Mexi Fiesta",
    cuisine: "Mexican",
    rating: 4.3,
    img: "https://loremflickr.com/600/400/tacos,mexican",
    costForTwo: 1300
  },
  {
    id: "res_009",
    resName: "Royal Biryani",
    cuisine: "Hyderabadi",
    rating: 4.8,
    img: "https://loremflickr.com/600/400/biryani",
    costForTwo: 1000
  },
  {
    id: "res_010",
    resName: "Cafe Mocha",
    cuisine: "Cafe",
    rating: 4.2,
    img: "https://loremflickr.com/600/400/coffee,cafe",
    costForTwo: 650
  }
];




const RestaurantCard = (props) => {

  //  you can also do destructuring of object like 
  // {resName, cuisine, rating} = props
  const {restData} = props;

     const {
        resName,
        cuisine,
        rating,
        img,
        costForTwo,
       }      =     restData;
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={img}
        alt="Restaurant"
      />

      <div className="card-content">
        <div className="card-header">
          <h3>{resName}</h3>
          <span className="rating">{rating}</span>
        </div>

        <p className="cuisine">
          {cuisine}
        </p>
        <div className="cost-2">${costForTwo/100} (cost of two)</div>
      </div>
    </div>
  );
};






{/* this is body */ }
const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">Search bar</div>
      <div className="rest-cont" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "60px" }}>

        {dataItem.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.id} restData={restaurant} />
          )
        })
        }
      </div>
    </div>
  )
}

const AppLayout = () => {

  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />)

