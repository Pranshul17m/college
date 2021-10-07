import React from "react";
import Card from "./Card";
import contacts from "./contacts";
import './AboutUs.css';
function ContactList() {
  
  const hed = {
    backgroundColor: "#a941c9",
    margin: "auto",
    padding: "16px 32px",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
    justifyContent:"space-between",
    color: "#fff",
    fontFamily: "McLaren",
    fontWeight: "200",
    fontSize: "30px",
   

}
  return (
    <div>
      <h1 style={hed}>ABOUT US</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
     
     
    </div>
  );
}

export default ContactList;
