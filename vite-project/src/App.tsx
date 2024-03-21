import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      {/* banner */}
      {/* Danh sach san pham */}
      <Home />
      <Footer />
    </>
  );

  console.log(
    typeof React.createElement(
      "div",
      { className: "app" },
      React.createElement(
        "h1",
        { className: "title", style: { color: "red" } },
        "Hello, World!"
      )
    )
  );

  // return React.createElement(
  //   "div",
  //   { className: "app" },
  //   React.createElement(
  //     "h1",
  //     { className: "title", style: { color: "red" } },
  //     "Hello, World!"
  //   )
  // );
}

export default App;