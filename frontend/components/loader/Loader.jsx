import React from "react";

function Loader() {
  return (
    <div id="loader">
        <div id="loading">
            <div className="loading-screen">
                <div className="loading-animation">
                    <img className="rounded-full logo" src="/logo.jpg" alt="loading"/>
                    <div className="loading-bar"></div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Loader;
