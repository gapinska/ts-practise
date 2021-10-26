import React from 'react';
import './App.css';
// import Parent from "./props/Parent";
import GuestList from "./state/GuestList";
// import UserSearch from "./state/UserSearch";
// import EventComponent from "./events/EventComponent";
import UserSearch from "./refs/UserSearch";

function App() {
    return (
        <div className="App">
            {/*<Parent/>*/}
            {/*<GuestList/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<UserSearch/>*/}
            {/*<EventComponent/>*/}
            <UserSearch/>
        </div>
    );
}

export default App;
