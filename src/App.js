import "./App.css";
import backgroundImage from "./iii.jpg";

function App() {
  function headerButton(buttonName) {
    return (
      <div className="headerMenu">
        <div className="headerButtons">
          <h4 className="headerButtonsNaming">{buttonName}</h4>
        </div>
      </div>
    );
  }

  function modal() {
    return (
      <div className="modal">
        <div className="modalHeader">Modal Name</div>
        <div className="modalDescription">
          Our unwavering mission is to cast a radiant glow on a greener future
          by crafting ingenious, eco-friendly products that illuminate spaces
          brilliantly while leaving a minimal environmental footprint
        </div>
        <div className="modalFooter">Buy now</div>
      </div>
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo"></img>
        {headerButton("About")}
        {headerButton("LogIn")}
        {headerButton("SignUp")}
        {headerButton("Contacts Us")}
      </header>
      <body className="body">
        <h2 className="bodyBrandName">EcoGlow Solutions</h2>
        <article className="brandDescription">
          <p>
            EcoGlow Solutions is not just a brand; we're a beacon of
            sustainability, passionately dedicated to revolutionizing the way we
            light up the world. Our unwavering mission is to cast a radiant glow
            on a greener future by crafting ingenious, eco-friendly products
            that illuminate spaces brilliantly while leaving a minimal
            environmental footprint. We're here to prove that you can have both
            efficiency and eco-consciousness, lighting the path towards a
            brighter, more sustainable tomorrow.
          </p>
        </article>
        <div className="bodyModalSection">
          {modal()}
          {modal()}
          {modal()}
          {modal()}
          {modal()}
          {modal()}
          {modal()}
          {modal()}
        </div>
      </body>
      <footer>footer</footer>
    </div>
  );
}

export default App;
