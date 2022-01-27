import ContainerItem from "./Components/ContainerItem";

function App() {
  return (
    <>
      <div className="container text-center ">
        <h1 className="title pt-5">Programme catalogue</h1>

        <input
          type="search"
          placeholder="Search Programs"
          class=" input text-center"
        ></input>
        <ContainerItem />
      </div>

      {/* <div class="row">
          <div class="col-lg-3 col-md-3">
            <Card />
          </div>
          <div class="col-lg-3 col-md-3">
            <Card></Card>
          </div>
          <div class="col-lg-3 col-md-3">
            <Card></Card>
          </div>
          <div class="col-lg-3 col-md-3">
            <Card></Card>
          </div>
        </div>
        <div class="row">
          <div class="col-sm">col-sm</div>
          <div class="col-sm">col-sm</div>
          <div class="col-sm">col-sm</div>
        </div> */}
      {/* </div> */}
    </>
  );
}

export default App;
