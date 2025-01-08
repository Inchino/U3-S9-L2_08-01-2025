import BookShopNavbar from "./components/BookShopNavbar";
import BookShopWelcome from "./components/BookShopWelcom";
import AllTheBooks from "./components/AllTheBooks";
import BookShopFooter from "./components/BookShopFooter";

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="bg-dark">
      <BookShopNavbar/>;
      <BookShopWelcome/>;
      <AllTheBooks/>;
      <BookShopFooter/>;
    </div>
  )
}

export default App;
