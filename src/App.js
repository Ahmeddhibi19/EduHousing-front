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
import FeedbackList from "./Components/Homeowner/FeedbackList";
import HomeownerSettings from "./Components/Homeowner/HomeownerSettings";
import UpdateDetailsHomeowner from "./Components/Homeowner/Forms/UpdateDetailsHomeowner";
import AddProfileImageHomeowner from "./Components/Homeowner/Forms/AddProfileImageHomeowner";
import MessagesHomeowner from "./Components/Homeowner/MessagesHomeowner";
import GetUser from "./Components/Auth/GetUser";
import AdminNav from "./Components/Admin/AdminNav";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import AllUsers from "./Components/Admin/AllUsers";
import Colleges from "./Components/Admin/Colleges";
import AddCollege from "./Components/Admin/AddCollege";
import UpdateCollegeAdmin from "./Components/Admin/UpdateCollege";
import City from "./Components/Admin/City";
import AdminAccount from "./Components/Admin/AdminAccount";
import AdminSettings from "./Components/Admin/AdminSettings";
import AllApartments from "./Components/Admin/AllApartments";
import AddCity from "./Components/Admin/AddCity";
import UpdateCity from "./Components/Admin/UpdateCity";
import AllRentalPosts from "./Components/Admin/AllRentalPosts";





function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/getStarted/:token" element={<GetUser/>}/>
      </Routes>
      </BrowserRouter>

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
                  <Route path="/users" element={<UsersHomeowner />} >
                    <Route index path="" element={<MessagesHomeowner />} />
                  </Route>
                    
                  <Route path="/account" element={<HomeownerAccount />} />
                  <Route path="/rentalList/:id" element={<RelatedRentals/>}/>
                  <Route path="/requestList/:rental_id" element={<ListRequests/>}/>
                  <Route path="/updateapartment/:id" element={<UpdateApartment/>}/>
                  <Route path="/updateRental/:rental_id" element={<UpdateRental/>}/>
                  <Route path="/addApartment" element={<AddApartment/>}/>
                  <Route path="/addRental/:apartment_id" element={<AddRental/>} />
                  <Route path="/comment/:id" element={<FeedbackList/>}/>
                  <Route path="/settings" element={<HomeownerSettings/>}/>
                  <Route path="/settings/updateDetails" element={<UpdateDetailsHomeowner/>}/>
                  <Route path="/settings/addProfileImage" element={<AddProfileImageHomeowner/>}/>
                </Routes>

              </>

            }
          />
        </Routes>



      </BrowserRouter>
      <BrowserRouter>
      <Routes>
        <Route 
        path="/admin/*" 
        element={
          <>
            <AdminNav
            addAdmin="/admin/add"
            apartments="/admin/apartments"
            rentalPosts="/admin/rental"
            users="/admin/users"
            feedbackList="admin/feedback"
            settings="/admin/settings"
            account="/admin/account"
            requests="/admin/requests"
            city="/admin/city"
            home="/admin"
            college="/admin/colleges"

            />
            <Routes>
                <Route path="" element={<AdminDashboard/>}/>
                <Route path="/users" element={<AllUsers/>}/>
                <Route path="/colleges" element={<Colleges/>}/>
                <Route path="/colleges/add" element={<AddCollege/>}/>
                <Route path="/colleges/update/:id" element={<UpdateCollegeAdmin/>}/>
                <Route path="/city" element={<City/>}/>
                <Route path="/account" element={<AdminAccount/>}/>
                <Route path="/settings" element={<AdminSettings/>}/>
                <Route path="/apartments" element={<AllApartments/>}/>
                <Route path="/city/add" element={<AddCity/>}/>
                <Route path="/city/update/:id" element={<UpdateCity/>}/>
                <Route path="/apartments/total_rental_post/:id" element={<AllRentalPosts/>}/>
            </Routes>          
            </>
        }/>
      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
