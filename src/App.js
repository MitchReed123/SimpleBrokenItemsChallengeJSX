import "./App.css";
//               STYLING SYNTAX IMPORTS
// import FirstOne from "./components/RegularItems/FirstOne";
// import Card from "./components/RegularItems/Card/Card";
// import VerticalCard from "./components/RegularItems/Card/verticalcard/VerticalCard";
//                    API IMPORTS
// import ApiTwo from "./components/api/ApiTwo";
// import ApiOne from "./components/api/ApiOne";
// import ApiThree from "./components/api/ApiThree";
// import UnsplashFetch from "./components/api/ApiFour";

// if you need hints for any of the problems just message me

function App() {
  //////////////////////////////////////////////////////////////////////////////////
  //                                                                              //
  //          go through each imported item in their own sections                 //
  //  and un-comment them one by one to fix the errors that are inside of them,   //
  // if you uncomment them all at once you wont find out if you fixed one of them //
  //                                                                              //
  //////////////////////////////////////////////////////////////////////////////////

  //once you are done with the "Broken APIs Section" take the style tag off of the Syntax Errors part.
  return (
    <div className="App">
      <section>
        <h1>Broken APIS Section</h1>
        {/* <section>
        <ApiOne />
      </section> */}
        {/* <section>
        <ApiTwo />
      </section> */}
        {/* <section>
          <ApiThree />
        </section> */}
        {/* <section>
          <UnsplashFetch />
        </section> */}
      </section>
      {/* TAKE OFF THIS STYLE ONCE YOU GET TO THIS POINT  */}
      <section style={{ display: "none" }}>
        <h1>Syntax Errors/CSS Errors</h1>
        {/* <FirstOne /> */}
        {/* <Card /> */}
        {/* do not cheat and look at this ones styling to figure out the challenge for the above one GL */}
        {/* <VerticalCard /> */}
      </section>
    </div>
  );
}

export default App;
