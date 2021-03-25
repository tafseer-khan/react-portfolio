import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/about"
import Contact from "./pages/contact"
import Portfolio from "./pages/portfolio"
import Resume from "./pages/resume"


function App(){
  return (
      <Router>
          <div>
              
              <Route exact path="/" component={About} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/resume" component={Resume} />
          </div>
          

      </Router>
      
  )
}
export default App
