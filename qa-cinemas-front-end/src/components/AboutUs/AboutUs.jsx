import qapic from "../images/qacinema.png";
import React from 'react';

const AboutUs = () => {
    return ( 
    <div>
        <img src={(qapic)} alt='QACinema' height="200px" width="40%"></img>
        <h2><u> About Us </u></h2>

        <p> Founded in 2022, QA Cinema's is considered the best new and upcoming home of entertainment in the UK. The first of the Cinema's opening
             in Croydon, London in April 2022 and already looking to expand our network into the largest across the UK and more. Following with great
             intentions to host many film premieres in the near future. Our passion for film and the whole cinema experience is so deep-rooted that it
             is embodied in everything we do. </p>

        <p> A small team all remotely located over the UK have come together to make QA Cinema's what is today and have provided our fantastic customers
            with a very professional and user-friendly website for all your film bookings, information on the local area and more! Please, if you are ever
            in the facility, be sure to thank the wonderful staff behind making all this possible:<br></br>
            <strong>Farzan Chowdhury, Omar Abu-tair, Waleed Naseem, Callum Smith and JT Lana!</strong></p>

            <p> If you do have any questions or concerns regarding any of our current/upcoming venues, please do not hesitate to send us an email
                by <a href="mailto:queries@qacinemas.co.uk?=Custom mail body">clicking here!</a></p>

            <p>Alternatively, you can visit our <a href="../ContactUs">Contact Us</a> page.</p>

            <p>Please do visit the QA Academy website to provide you with information behind the marvellous team of people that trained the afore
                mentioned software engineers to make this fantastic new cinematic company everything it is currently!
                <h4> <a href="https://www.qa.com"> QA Academy </a></h4>
            </p>

    </div>
     );
}
 
export default AboutUs;