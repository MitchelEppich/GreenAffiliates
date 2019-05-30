const index = props => {
  return (
    <div className="ga-body-wrap">
      <div className="ga-login-wrap ga-login-panel">
        <div className="ga-green-panel">
          <h1>Support</h1>

          <form className="ga-contact-form">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Support Subject" />
            <div className="ga-input-file-wrap">
              <input className="input-file" id="my-file" type="file" />
              <label
                tabIndex="0"
                htmlFor="my-file"
                className="input-file-trigger"
              >
                Select a file...
              </label>
              <p className="ga-file-return" />
            </div>

            <textarea
              rows="4"
              cols="20"
              placeholder="Please describe your support question or issue...."
            />

            <input
              className="ga-btn ga-login-btn"
              type="submit"
              value="Request Support"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;
