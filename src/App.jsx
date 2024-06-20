import Item from "./components/Item.jsx";
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";

import { PRODUCTS } from "./data.jsx";

import "./App.css";

function App() {
  return (
    <>
      <section id="collection-1602">
        <div className="cs-container">
          <div className="cs-content">
            <Header>New Collection</Header>
            <div className="cs-button-group">
              <NavBar>New Arrival</NavBar>
              <NavBar>Top Rating</NavBar>
              <NavBar>Best Seller</NavBar>
            </div>
          </div>
          <div className="cs-listing-wrapper">
            <div className="cs-listing" data-category="one">
              {/* <Item 
              image={beanieImg}
              title={PRODUCTS[0].title}
              category={PRODUCTS[0].category}
              price={PRODUCTS[0].price}
              wasPrice={PRODUCTS[0].wasPrice}
              discount={PRODUCTS[0].discount}
              /> */}
              {PRODUCTS.map((conceptItem) => (
                <Item {...conceptItem} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
