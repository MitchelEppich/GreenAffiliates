import MessagesHeader from "./messagesHeader";
import MessageList from "./messageList";

const index = props => {
  return (
    <React.Fragment>
      <MessagesHeader {...props} />
      <MessageList {...props} />
    </React.Fragment>
  );
};
export default index;
