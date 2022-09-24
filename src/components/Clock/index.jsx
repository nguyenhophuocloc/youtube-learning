import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useClock from "../../hooks/useClock";

function formatDate(date) {
  const hours = `0${date.getHours()}`.slice(-2);
  const minuters = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  return `${hours}:${minuters}:${seconds}`;
}

function Clock(props) {
  const {timeString} = useClock();
  return <p>{timeString}</p>;
}

Clock.propTypes = {};

export default Clock;
