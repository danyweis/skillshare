import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import ContactCard from "./ContactCard";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
      <hr />
      <h1>Contact Card</h1>
      <ContactCard
        name="Mr. Kitten"
        imgUrl="http://placekitten.com/200/200"
        phone="+353 335566778"
        email="kitten@kitten.com"
      />
      <ContactCard
        name="Mrs. Kit"
        imgUrl="http://placekitten.com/300/200"
        phone="+353 335523478"
        email="kit@kitten.com"
      />
      <ContactCard
        name="Miss Kitti"
        imgUrl="http://placekitten.com/300/300"
        phone="+353 335577678"
        email="kitti@kitten.com"
      />
      <ContactCard
        name="Mr. Wiski"
        imgUrl="http://placekitten.com/200/300"
        phone="+353 845566778"
        email="wiski@kitten.com"
      />
    </div>
  );
}

export default App;
