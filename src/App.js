import "./App.css";
// import FirstOne from "./components/RegularItems/FirstOne";
// import ApiTwo from "./components/api/ApiTwo";
// import ApiOne from "./components/api/ApiOne";

// if you need hints for any of the problems just message me

function App() {
  //////////////////////////////////////////////////////////////////////////////////
  //                                                                              //
  //          go through each imported item in their own sections                 //
  //  and un-comment them one by one to fix the errors that are inside of them,   //
  // if you uncomment them all at once you wont find out if you fixed one of them //
  //                                                                              //
  //////////////////////////////////////////////////////////////////////////////////

  //once you are done with the "Broken APIS Section" take the style tag off of the Syntax Errors part.
  return (
    <div className="App">
      <section style={{ display: "none" }}>
        <h1>Broken APIS Section</h1>
        {/* <section>
        <ApiOne />
      </section> */}
        {/* <section>
        <ApiTwo />
      </section> */}
      </section>
      <section>
        <h1>Syntax Errors</h1>
        {/* <FirstOne /> */}
      </section>
    </div>
  );
}

export default App;
