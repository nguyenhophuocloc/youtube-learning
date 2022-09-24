import React from "react";
import useClock from "../../hooks/useClock";
import "./BetterClock.scss";

function formatDate(date) {
  const hours = `0${date.getHours()}`.slice(-2);
  const minuters = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  return `${hours}:${minuters}:${seconds}`;
}

function BetterClock(props) {
  const { timeString } = useClock();
  return (
    <div className="better-clock">
      <p className="better-clock__time">{timeString}</p>
    </div>
  );
}

BetterClock.propTypes = {};

export default BetterClock;
