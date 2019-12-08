import React from 'react'
import CreditForm from "./CreditFrom";
import ContactForm from "./ContactForm";
import ButtonLight from "./../../SmallComponents/ButtonLight";
class Next extends React.Component{
    render(){
        return(
            <div className="des--con" style={{ paddingRight: "10rem" ,marginBottom:"10rem" }}>
    <p>About</p>
    <textarea className="form--control" />
    <div className="hr--big"></div>
    <div style={{ marginRight: "19rem" }}>
      <p>Credits</p>
      <CreditForm />
      <CreditForm />
      <CreditForm />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button className="a deepblue" style={{ fontSize: "3rem" }}>
          Add
        </button>
      </div>
    </div>
    <div className="hr--big"></div>
    <div style={{ marginRight: "19rem" }}>
      <p>Contact</p>
      <ContactForm />
    </div>
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <ButtonLight
        style={{ marginRight: "2.5rem", height: "4.5rem", width: "8rem" }}
        color="#193049"
        hover="true"
        title="Back"
      />
      <ButtonLight style={{ height: "4.5rem", width: "8rem" , boxShadow: "0 2px 2px 1px gray ",}} title="Save" color="#15172a" />
    </div>
  </div>
        )
    }
}
export default Next