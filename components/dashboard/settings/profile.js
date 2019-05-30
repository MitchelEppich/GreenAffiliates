const index = props => {
  return (
    <React.Fragment>
      <div className="ga-settings-title">
        <h1>Account Profile Settings</h1>

        <div className="gaMemberDate">
          (Member Since:<span>Dec 02, 2018</span>)
        </div>

        <div className="gaCompanyIDWrap">
          <span className="gaCompanyIDLabel">Company ID:</span>
          <span id="gaCompanyID">#839045</span>
        </div>
      </div>

      <form className="ga-program-form">
        <div className="ga-photo-file-wrap">
          <h3>Company Profile Photo</h3>
          <div className="gaProfilePhoto" />
          <label tabindex="0" for="gaProfileFile" className="input-file-trigger">
            Add/Edit Photo
          </label>
          <input className="input-file" id="gaProfilePhoto" type="file" />
          <p className="ga-file-return" />
        </div>

        <label for="gaCompanyName">Company Name</label>
        <input id="gaCompanyName" type="text" placeholder="" />

        <label for="gaCompanyStree">Company Street Address</label>
        <input id="gaCompanyStreet" type="text" placeholder="" />

        <label for="gaCompanyCity">Company City Address</label>
        <input id="gaCompanyCity" type="text" placeholder="" />

        <label for="gaCompanyState">Company State/Province Address</label>
        <input id="gaCompanyState" type="text" placeholder="" />

        <label for="gaCompanyCountry">Company Country Address</label>
        <input id="gaCompanyCountry" type="text" placeholder="" />

        <label for="gaPersonalName">Your Name</label>
        <input id="gaPersonalName" type="text" placeholder="" />

        <label for="gaPersonalPosition">Your Position</label>
        <input id="gaPersonalPosition" type="text" placeholder="" />

        <label for="gaPersonalBirth">Birthday</label>
        <input id="gaCompanyBirth" type="text" placeholder="" />

        <label for="gaCompanyEmail">Company eMail</label>
        <input id="gaCompanyEmail" type="text" placeholder="" />

        <label for="gaCompanySite">Website Address</label>
        <input id="gaCompanySite" type="text" placeholder="" />

        <label for="gaCompanyPhone">Company Phone</label>
        <input id="gaCompanyPhone" type="text" placeholder="" />

        <label for="gaAccountPass">Account Password</label>
        <input id="gaAccountPass" type="password" placeholder="" />
        <span className="ga-passChange-notification">
          Last Changed Feb 03, 2019
        </span>

        <label for="gaAccountPass-Confirm">Confirm Password</label>
        <input id="gaAccountPass-Confirm" type="password" placeholder="" />

        <input
          className="ga-btn ga-send-btn"
          type="submit"
          value="Update Profile"
        />
      </form>
    </React.Fragment>
  );
};

export default index;
