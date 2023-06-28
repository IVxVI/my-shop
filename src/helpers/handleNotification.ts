const handleNotification = (message: string, setMessage: any) => {
  setMessage(message);
  console.log(message)
  setTimeout(() => {
    setMessage("");
  }, 3000);
}

export default handleNotification;