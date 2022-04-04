
import React, { useState } from "react";

import QABar from "./QABar";
import ArQAde from "./ArQAde";
import QABarOnly from "./QABaronly";

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
      <QABarOnly/>
      </div>
  );
};

export default Places;
