const SectionFour = () => {
  return (
    <section className="sec4">
      <div className="container">
        <div className="left">
          <h2>PAYMENTS</h2>
          <h1>Intermediaries</h1>
          <p>
            We pride ourselves on offering a variety of proven payment methods that make transactions easier for our
            users. Here is a list of the payment methods we support.
          </p>
          <div className="items">
            <div className="item">
              <img src="./assets/img/apple.svg" alt="" />
            </div>
            <div className="item">
              <img src="./assets/img/stripe.svg" alt="" />
            </div>
            <div className="item">
              <img src="./assets/img/gpay.svg" alt="" />
            </div>
            <div className="item">
              <img src="./assets/img/pp.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="right">
          <form action="#">
            <div className="title">
              <h2>CONTACT</h2>
              <h1>Write us</h1>
            </div>
            <div className="inputs">
              <div className="name">
                <input type="text" className="form-control" required="" />
                <div className="placeholder">
                  Name <span className="red">*</span>
                </div>
              </div>
              <div className="last-name">
                <input type="text" className="form-control" required="" />
                <div className="placeholder">
                  Last Name <span className="red">*</span>
                </div>
              </div>
              <div className="e-mail">
                <input type="text" className="form-control" required="" />
                <div className="placeholder">
                  E-mail <span className="red">*</span>
                </div>
              </div>
              <div className="phone">
                <input type="text" className="form-control" required="" />
                <div className="placeholder">
                  Phone number <span className="red">*</span>
                </div>
              </div>
              <div className="message">
                <textarea className="form-control" cols={30} rows={10} required="" defaultValue={""} />
                <div className="placeholder">
                  Message <span className="red">*</span>
                </div>
              </div>
            </div>
            <div className="text">
              <p>This site is protected by reCAPTCHA</p>
              <p>and the Google Privacy Policy and Terms of Serviceapply.</p>
              <p />
              <span>
                <p>*</p> - required fields
              </span>
            </div>
            <div className="but">
              <button>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
