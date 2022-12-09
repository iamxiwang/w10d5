import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation/GalleryNavigation";

function App() {
  return (
    <>
      <h1>Hello from App</h1>
      <GalleryNavigation galleries={harvardArt.records}/>
    </>
  );
}

// console.log(harvardArt);

export default App;
