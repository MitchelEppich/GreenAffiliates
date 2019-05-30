const index = props => {
  return (
    <div className="ga-body-wrap">
      <div className="ga-login-wrap ga-login-panel">
        <div className="ga-green-panel">
          <h1>Contact</h1>

          <form className="ga-contact-form">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Subject" />
            <textarea
              rows="4"
              cols="20"
              placeholder="Your message or question...."
            />

            <input className="ga-btn ga-login-btn" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;
