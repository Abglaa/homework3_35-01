import React from 'react';
import Description from "../../components/description/Description";

function AboutPage(props) {
    return (
        <div>
            <h1>AboutPage</h1>
            <Description  info={{title: "Title 2", description: "description 2"}}/>
        </div>
    );
}

export default AboutPage;
