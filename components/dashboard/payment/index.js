import PaymentHeader from "./paymentHeader";
import PaymentList from "./paymentList";

const index = props => {
  return (
    <React.Fragment>
      <PaymentHeader {...props} />
      <PaymentList {...props} />
    </React.Fragment>
  );
};
export default index;
