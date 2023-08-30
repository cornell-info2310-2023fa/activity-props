import React from "react";

export default function DateRefresh() {
  const [date, setDate] = React.useState(new Date().toString());

  function updateDate() {
    setDate(new Date().toString());
  }

  return (
    <>
      <p>{date}</p>
      <button onClick={updateDate}>Update Date</button>
    </>
  );
}
