import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import Fish from "./Fish";
import sampleFishes from "../sample-fishes";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addFish = fish => {
    // copy existing state
    const fishes = { ...this.state.fishes };
    // add new fish
    fishes[`fish${Date.now()}`] = fish;
    // replace state
    this.setState({ fishes });
  };

  addToOrder = key => {
    // copy existing state
    const order = { ...this.state.order };
    // add to order or update order number
    order[key] = order[key] + 1 || 1;
    // replace state
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
