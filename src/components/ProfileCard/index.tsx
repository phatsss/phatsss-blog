import React from "react";
import ProfileCard from "./ProfileCard";

const index = () => {
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", margin: 50}}>
      <ProfileCard
        name="Phatsss"
        title="Software Engineer"
        handle="phatssss"
        status="Online"
        contactText="Contact"
        avatarUrl="./img/phatsss.png"
        showUserInfo={true}
        enableTilt={true}
        enableMobileTilt={true}
        showBehindGradient={true}
        iconUrl="./img/pattern-bg.png"
        onContactClick={() => console.log("Contact clicked")}
      />
    </div>
  );
};

export default index;
