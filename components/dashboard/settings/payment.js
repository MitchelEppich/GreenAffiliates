const index = props => {
  return (
    <React.Fragment>
      <div class="ga-settings-title">
        <h1>Payment Settings</h1>
      </div>

      <form class="ga-affPay-form">
        <label for="gaCompanyName">First and Last Name (Company Name)</label>
        <p class="ga-form-description">
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

        <ul class="ga-payment-radio">
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
            <i class="fas fa-money-check-alt" />
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
            <i class="fab fa-cc-paypal" />
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
            <i class="fab fa-cc-stripe" />
          </li>
        </ul>

        <span class="hide-gaPaypalEmail">
          <label for="gaPaypalEmail">Paypal Email Address</label>
          <input id="gaPaypalEmail" type="text" />
        </span>

        <span class="hide-gaStripeEmail">
          <label for="gaStripeEmail">Stripe Email Address</label>
          <input id="gaStripeEmail" type="text" />
        </span>

        <input
          class="ga-btn ga-send-btn"
          type="submit"
          value="Update Payment Settings"
        />
      </form>
    </React.Fragment>
  );
};

export default index;
