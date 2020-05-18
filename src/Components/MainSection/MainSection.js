import React from "react";
import Posts from "./Post/Post";


function MainSection(props) {
    return (
            <section className="page-left" >
                <h1>This is my blog</h1>

                    <Posts posts={props.post} click={props.click}/>

            </section>
    );
}

export default MainSection;