import React from "react";
import ReactDOM from "react-dom/client"
import Resturant from "./components/Resturant";

import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import ResturantMenu from "./components/ResturantMenu";
import SearchFood from "./components/SearchFood";
import SecondaryHome from "./components/SecondaryHome";
import { store } from "./Stored/stores";
import { Provider } from "react-redux";
import Checkout from "./components/cHECKOUT.JS";


function App() {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route element={<SecondaryHome />}>
                            <Route path="/resturant" element={<Resturant />}></Route>
                            <Route path="/city/delhi/:id" element={<ResturantMenu />}></Route>
                            <Route path="/city/delhi/:id/search" element={<SearchFood />}></Route>
                        </Route>
                        <Route path="/Checkout" element={<Checkout/>}></Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);