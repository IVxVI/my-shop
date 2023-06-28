import { useContext } from "react";
import StoreContext from '../../helpers/StoreContext';
import './Notification.scss';
import { CheckSquare, XSquare } from "react-feather";
import classNames from "classnames";

const Notification = () => {
  const { notification } = useContext(StoreContext);
  const successfulNotify = notification?.includes('Successfully');
  const failureNotify = notification?.includes("No") || notification?.includes("already");

  return (
    <article className={classNames(
      "message", {
        successful: successfulNotify,
        danger: failureNotify
      }
    )}>
      {successfulNotify ? <CheckSquare /> : <XSquare />}
      <p className="message__text">{notification}</p>
    </article>
  )
}

export default Notification;