import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import ServerResponse from "./Components/ServerResponse";
import AvailbleRentals from "./Components/Student/AvailbleRentals";
import Nav from "./Components/Student/Nav";
import LandingPage from "./Components/Student/Nav";
import { Router, Routes } from "react-router-dom";
import Users from "./Components/Student/Users";
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Messages from "./Components/Student/Messages";
import HomeownerAccount from "./Components/Homeowner/HomeownerAccount";
import NavHomeowner from "./Components/Homeowner/NavHomeowner";
import HomeownerDashboard from "./Components/Homeowner/HomeownerDashboard";
import Account from "./Components/Student/Account";
import Apartments from "./Components/Student/Apartments";
import Favourites from "./Components/Student/Favourites";
import RentalHistory from "./Components/Student/RentalHistory";
import Requests from "./Components/Student/Requests";





function App() {

  return (
    <div>

      <BrowserRouter >

        <Routes>
          <Route
            path="/student/*"
            element={
              <>
                <Nav
                  contacts='/student/users'
                  account="/student/account"
                  home="/student"
                  favourites="/student/favourites"
                  rentalHistory="/student/rental"
                  requests="/student/requests"
                  settings="/student/settings"
                  help="/student/help"
                  aboutUs="/student/aboutUs"
                />
                <Routes>
                  <Route path="" element={<AvailbleRentals />}>
                    <Route index path="" element={<Users />} />
                    <Route index path="" element={<Messages />} />
                  </Route>
                  <Route path="/users" element={<Users />} >
                    <Route index path="" element={<Messages />} />
                  </Route>
                  <Route path="/account" element={<Account />} />
                  <Route path="/apartment" element={<Apartments />} />
                  <Route path="/favourites" element={<Favourites />} />
                  <Route path="/rental" element={<RentalHistory />} />
                  <Route path="/requests" element={<Requests />} />
                </Routes>

              </>
            }
          />
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        <Routes>
          <Route
            path="/homeowner/*"
            element={
              <>
                <NavHomeowner />
                <Routes>
                  <Route path="" element={<HomeownerDashboard />} />
                  <Route path="/homeowneraccount" element={<HomeownerAccount />} />
                </Routes>

              </>

            }
          />
        </Routes>



      </BrowserRouter>
    </div>

  );
}

export default App;
