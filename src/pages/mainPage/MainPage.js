import React from 'react';
import Description from "../../components/description/Description";

function MainPage(props) {
    return (
        <div>
            <h1>MAinPage</h1>
            <Description  info={{title: "Title", description: "description"}}/>
        </div>
    );
}

export default MainPage;