import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Component/Homepage/Homepage";
import AllProducts from "./Component/AllProducts";
import Footer from "./Component/Fotter"
import ProductDescription from "./Component/ProductDescription";
import Navbar1 from "./Component/Navbar";
import Register from "./Component/Register";
import Login from "./Component/Login";
import Cart from "./Component/Cart";
import NoteState from "./context/NoteState";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


function App() {

   return (<>
      {/* <Navbar />
       <Carousel />
       <HomepageCard />
       <TopProducts />
       <NewArrivals /> */}

<SignedOut>
        <SignInButton />
      </SignedOut>
         <SignedIn>
            <UserButton />
      <NoteState>
      <Routes>
         <Route path="/" element={<Navbar1 />}>
            <Route index element={<Homepage />} />
            <Route path="/productbycategory/:type" element={<AllProducts />} />
            <Route path="/productdesc/:id" element={<ProductDescription />} />
            <Route path="/cart" element={<Cart />} />
         </Route>
         {/* <Route path="/register" element={<Register />} />
         <Route path="/login" element={<Login />} /> */}
      </Routes>
      </NoteState>
      </SignedIn>


   
      
   </>
   );

}

export default App;