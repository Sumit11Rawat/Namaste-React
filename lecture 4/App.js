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


{/*. this is restaurant card.  */}
//   it can have 
//   1 name of Restaurant
//   2 rating
//   3 type of cuisine
//   4 expected delivery time
const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXfSvEJM0PNtsUe1Sgb2MTUHBMG-RpwxYxC_2m3oHlnw&s=10"
        alt="Restaurant"
      />

      <div className="card-content">
        <div className="card-header">
          <h3>Wadhwa Restaurant</h3>
          <span className="rating">4.4 ★</span>
        </div>

        <p className="cuisine">
          North Indian, Punjabi
        </p>
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
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
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

