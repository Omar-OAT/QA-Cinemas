import { renderMatches } from "react-router-dom";
import places2eat from "../images/Place2eat.jpg";
import Example from "./Modal";
import modalComponent from "./Modal";

import React, { useState } from "react";
import { Modal,Button } from "react-bootstrap";
import QABar from "./QABar";
import ArQAde from "./ArQAde";

const Places = () => {

    useState()

  return (
    <div className="Places">
      <div id="pagewonder">
        <h2> Places to go </h2>
        <div class="container px-4 px-lg-5 text-center" id="space">
          <h1 class="masthead-heading mb-0">One Page Wonder</h1>
          <h2 class="masthead-subheading mb-0">Will Rock Your Socks Off</h2>

        
          <br />
          <br />
          <p>Scroll below to see some of our awesome services</p>
        </div>
      </div>
      <QABar/>
      <ArQAde/>
      </div>
  );
};

export default Places;
