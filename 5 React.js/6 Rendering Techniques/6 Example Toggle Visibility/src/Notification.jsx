const Notification = ({ unreadMessage }) => {
  return (
    <div>
      <h1>Hello</h1>
      {unreadMessage.length > 0 && <p>You have {unreadMessage.length} unread massages</p>}
    </div>
  );
};

export default Notification;
