import React from "react";
import Home from "../routes/Home";
import Auth from "../routes/Auth";
import { Route } from "react-router-dom";
import EditProfile from "../routes/EditProfile";
import MyProfile from "../routes/MyProfile";
import Profile from "../routes/Profile";

function AppTemplate({ isLoggedIn }) {
    return (
        <>
            {isLoggedIn ? (
                <Route path="/" component={Home} exact />
            ) : (
                <Route path="/" component={Auth} exact />
            )}
            <Route path="/editprofile" component={EditProfile} />
            <Route path="/MyProfile" component={MyProfile} />
            <Route path="Profile" component={Profile} />
        </>
    );
}

export default AppTemplate;
