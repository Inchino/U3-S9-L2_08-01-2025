import BookShopNavbar from "./components/BookShopNavbar";
import BookShopWelcome from "./components/BookShopWelcom";
import AllTheBooksCarousels from "./components/AllTheBooksCarousels";
import AllTheBooksCards from "./components/AllTheBooksCards";
import BookShopFooter from "./components/BookShopFooter";

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="bg-dark">
      <BookShopNavbar/>;
      <BookShopWelcome/>;
      <AllTheBooksCarousels/>;
      <AllTheBooksCards/>;
      <BookShopFooter/>;
    </div>
  )
}

export default App;
