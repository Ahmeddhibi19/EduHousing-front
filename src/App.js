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
import AssociatedRentalPost from "./Components/Student/AssociatedRentalPost";
import Settings from "./Components/Student/Settings";
import AddProfileImage from "./Components/Student/Forms/AddProfileImage";
import UpdateCollege from "./Components/Student/Forms/UpdateCollege";
import UpdateDetails from "./Components/Student/Forms/UpdateDetails";
import UpdatePassword from "./Components/Student/Forms/UpdatePassword";
import UsersHomeowner from "./Components/Homeowner/UsersHomeowner";
import RelatedRentals from "./Components/Homeowner/RelatedRentals";
import ListRequests from "./Components/Homeowner/ListRequests";
import UpdateApartment from "./Components/Homeowner/UpdateApartment";
import UpdateRental from "./Components/Homeowner/UpdateRental";
import AddApartment from "./Components/Homeowner/AddApartment";
import AddRental from "./Components/Homeowner/AddRental";





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
                  <Route path="/requests/associatedRental" element={<AssociatedRentalPost />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/settings/addProfileImage" element={<AddProfileImage />} />
                  <Route path="/settings/updateCollege" element={<UpdateCollege />} />
                  <Route path="/settings/updateDetails" element={< UpdateDetails/>} />
                  <Route path="/settings/updatePassword" element={<UpdatePassword />} />
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
                <NavHomeowner 
                  contacts='/homeowner/users'
                  account="/homeowner/account"
                  home="/homeowner"
                  favourites="/homeowner/favourites"
                  rentalHistory="/homeowner/rental"
                  requests="/homeowner/requests"
                  settings="/homeowner/settings"
                  help="/homeowner/help"
                  aboutUs="/homeowner/aboutUs"
                />
                <Routes>
                  <Route path="" element={<HomeownerDashboard />} >
                   <Route index path="" element={<UsersHomeowner />} />
                  </Route>
                  <Route path="/account" element={<HomeownerAccount />} />
                  <Route path="/rentalList/:id" element={<RelatedRentals/>}/>
                  <Route path="/requestList/:rental_id" element={<ListRequests/>}/>
                  <Route path="/updateapartment/:id" element={<UpdateApartment/>}/>
                  <Route path="/updateRental/:rental_id" element={<UpdateRental/>}/>
                  <Route path="/addApartment" element={<AddApartment/>}/>
                  <Route path="/addRental/:apartment_id" element={<AddRental/>} />
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
