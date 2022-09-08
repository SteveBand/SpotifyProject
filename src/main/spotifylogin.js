import React from "react";
import "../main/spotifylogincss.css";

export const SignIn = () => {
  const clientId = "207b9e1d3b1a43ae8e2db07b831e372e";
  const auth_endPoint = "https://accounts.spotify.com/authorize";
  const responseType = "token";
  const redirect_url = "http://localhost:3000/";

  return (
    <>
      <div className="div">
        <div className="content vibrate-1">
          <button>
            <a
              href={`${auth_endPoint}?client_id=${clientId}&redirect_uri=${redirect_url}&response_type=${responseType}`}
            >
              Log-In
            </a>
          </button>
        </div>
      </div>
    </>
  );
};
