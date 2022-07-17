import React from "react";

function Loader() {
  return (
    <div id="loader">
        <div id="loading">
            <div class="loading-screen">
                <div class="loading-animation">
                    <img className="rounded-full logo" src="/logo.jpg" alt="loading"/>
                    <div class="loading-bar"></div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Loader;
