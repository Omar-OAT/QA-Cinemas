import './ContactUsStyle.css'
function ContactUs() {
    return (
        <section className="contact-section">
            <div className="contact-bg">
                <br />
                <br />
                <h3>QA Cinemas</h3>
                <h2>Contact Us</h2>
                <div className="line">
                    <div />
                    <div />
                    <div />
                </div>
                <p className="text">
                    Uncertain about anything on our website?
                    <br /> Would you like to find out further information about a movie /
                    showtime?
                    <br /> Please use our contact details below.
                    <br /> <br /> If you are having trouble getting through to us, please send
                    us a message below and someone will respond within 24 hours.
                </p>
            </div>
            <div class="contact-body">
                <div class="contact-info">
                    <div>
                        <span>Phone No.</span>
                        <span class="text">0203 546 7897</span>
                    </div>
                    <div>
                        <span>E-mail</span>
                        <span class="text">queries@qacinema.co.uk</span>
                    </div>
                    <div>
                        <span>Address</span>
                        <span class="text">QA Cinema, Valley Park Leisure Centre, Hesterman Way, Croydon, CR0 4YA</span>
                    </div>
                    <div>
                        <span>Opening Hours</span>
                        <span class="text">Monday - Sunday <br />(10:00 AM to 10:00 PM)</span>
                    </div>
                </div>
            </div>
            
<form id="contact-form">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control"  />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="4"></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </section>

    );
}
 
export default ContactUs;

