import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const index = props => {
  return (
    <React.Fragment>
      <div className="ga-settings-title">
        <h1>Payment Settings</h1>
      </div>

      <form className="ga-affPay-form">
        <label for="gaCompanyName">First and Last Name (Company Name)</label>
        <p className="ga-form-description">
          Note: Name that payment is made out to
        </p>
        <input id="gaCompanyName" type="text" placeholder="" />

        <label for="gaAffPayStreet">Street Address</label>
        <input id="gaAffPayStreet" type="text" placeholder="" />

        <label for="gaAffPayCity">City</label>
        <input id="gaAffPayCity" type="text" placeholder="" />

        <label for="gaAffPayState">State/Province</label>
        <input id="gaAffPayState" type="text" placeholder="" />

        <label for="gaAffPayZip">Zip/Area Code</label>
        <input id="gaAffPayZip" type="text" placeholder="" />

        <label for="gaAffPayCountry">Country</label>
        <input id="gaAffPayCountry" type="text" placeholder="" />

        <ul className="ga-payment-radio">
          <li>
            <input
              id="gaPaymentCheque"
              type="radio"
              name="affPayment"
              value="cheque"
              checked
            />
            <label for="gaPaymentCheque">
              <span>Cheque</span>
            </label>
            <i>
              <FontAwesomeIcon icon="money-check-alt" className="" />
            </i>
          </li>
          <li>
            <input
              id="gaPaymentPaypal"
              type="radio"
              name="affPayment"
              value="paypal"
            />
            <label for="gaPaymentPaypal">
              <span>Paypal</span>
            </label>
            <i>
              <FontAwesomeIcon icon="cc-paypal" className="" />
            </i>
          </li>
          <li>
            <input
              id="gaPaymentStripe"
              type="radio"
              name="affPayment"
              value="wire"
            />
            <label for="gaPaymentStripe">
              <span>Stripe</span>
            </label>
            <i>
              <FontAwesomeIcon icon="cc-stripe" className="" />
            </i>
          </li>
        </ul>

        <span className="hide-gaPaypalEmail">
          <label for="gaPaypalEmail">Paypal Email Address</label>
          <input id="gaPaypalEmail" type="text" />
        </span>

        <span className="hide-gaStripeEmail">
          <label for="gaStripeEmail">Stripe Email Address</label>
          <input id="gaStripeEmail" type="text" />
        </span>

        <input
          className="ga-btn ga-send-btn"
          type="submit"
          value="Update Payment Settings"
        />
      </form>
    </React.Fragment>
  );
};

export default index;
