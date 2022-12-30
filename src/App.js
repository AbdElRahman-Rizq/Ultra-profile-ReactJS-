import React, { Component } from "react";
import { BrowserRouter, Route ,Routes} from "react-router-dom";
import Navbar from "./component/Navbar";
import Contact from "./component/Contact";
import Index from "./component/Index";
// import Work from "./component/Work";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        
        <Navbar />
        <Routes>
        <Route exact path="/" element={<Index/>} />
        <Route path="/contact" element={<Contact/>} />
        {/* <Route path="/Work" element={<Work/>} /> */}
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
