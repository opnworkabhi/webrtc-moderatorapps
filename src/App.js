import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowRoomList from "./pages/ShowRoomList";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/showRoomList" Component={ShowRoomList} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
