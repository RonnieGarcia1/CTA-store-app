import React from "react";
import Ticker from "react-ticker";
import '../Styles/Ticker.css'

const AdTicker = () => {
  return(
    <div>
      <Ticker className="ticker">
        {({ index }) => (
            <h1 className="ticker-h1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. &nbsp;&nbsp;&nbsp; </h1>
        )}
        </Ticker>
    </div>
  )
}

export default AdTicker;
