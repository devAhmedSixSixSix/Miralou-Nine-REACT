import React from "react";
import {
  TiSocialFacebook,
  TiSocialPinterest,
  TiSocialTwitter,
} from "react-icons/ti";

function OurTeamCard({ img }) {
  return (
    <div className="text-center bg-light rounded p-5">
      <img
        src={img}
        alt="test"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
        }}
      />
      <p className="mb-0 mt-3 text-muted">Founder</p>
      <h6 className="text-success">Time Cock</h6>
      <div>
        <TiSocialTwitter size={33} />
        <TiSocialPinterest size={33} />
        <TiSocialFacebook size={33} />
      </div>
      <p className="text-muted">Loriem Ipsum Dollar Loriem Ipsum Dollar...</p>
    </div>
  );
}

export default OurTeamCard;
