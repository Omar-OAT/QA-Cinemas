import './style.css'
const WhereTo = () => {
    return ( 
        <section class = "contact-section">
          <div class = "contact-bg">
            <h3>QA Cinema</h3>
            <h2>Where to find us?</h2>
            <div class = "line">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p class = "text"> Please use the map below to help you find our cinema!</p>
          </div>
          <div class = "map">
  <iframe
  height={500}
  width={1900}
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.364905827507!2d-0.1267289836568693!3d51.37797112797814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876071a79e68e25%3A0xfc9d853c7c52dddc!2sVue%20Cinema%20Croydon%20-%20Purley%20Way!5e0!3m2!1sen!2suk!4v1649159647402!5m2!1sen!2suk"></iframe>
</div>
    
          </section>
     );
}
 
export default WhereTo;