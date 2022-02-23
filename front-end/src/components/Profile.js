import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>LOGGING YOU IN...</div>;
  }

  console.log(user)
  return (
    isAuthenticated && (
      <div className="user-profile">
        <img className="user-profile-img" src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <div className="user-profile-details">
        <br></br>
        <h4>{user.email}</h4>
        <br></br>
        <br></br>
        <aside>
        PREVIOUS ORDERS &nbsp;&nbsp;&nbsp;&nbsp;
        SAVED CARDS &nbsp;&nbsp;&nbsp;&nbsp;
        GIFTCARDS &nbsp;&nbsp;&nbsp;&nbsp;
        </aside>
        <br></br>
        <br></br>
        <br></br>
        <p>Authentication Client | Unique Id: {user.sub}</p>
        <br></br>
        </div>
        <LogoutButton />
      </div>
    )
  );
};

export default Profile;
