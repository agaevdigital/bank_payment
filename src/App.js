import React, {useState} from "react";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Tariff from "./components/Main/Tariff/Tariff";
import Company from "./components/Main/Company/Company";
import Product from "./components/Main/Product/Product";
import Payment from "./components/Main/Payment/Payment";
import { Switch, Route } from "react-router-dom";



const App = (props) => {
  const [lang, setLang] = useState('ru');

  return (
    <div className="App">
      <Header lang={lang} setLang={setLang} />
      <main>
          <Switch>

              <Route path="/tariff">
                  <Tariff lang={lang} />
              </Route>
              <Route path="/about">
                  <Company lang={lang} />
              </Route>
              <Route path="/payment">
                  <Payment lang={lang} />
              </Route>
              <Route path="/">
                  <Product lang={lang} />
              </Route>
          </Switch>
      </main>
      <Footer lang={lang} />
    </div>
  );
}

export default App;
