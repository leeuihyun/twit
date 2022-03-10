import React from "react";
import { useState } from "react";
import AppTemplate from "./AppTemplate";
import { authService } from "fbase";
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    authService.currentUser();
    return (
        <>
            <AppTemplate isLoggedIn={isLoggedIn}></AppTemplate>
        </>
    );
}

export default App;
