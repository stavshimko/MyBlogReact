import React from "react";
import MainSection from "../../Components/MainSection/MainSection";
import AsideBar from "../../Components/Sidebar/AsideBar";


function HomePage(props) {
    console.log('run Home page')

    return (
        <div>
            <MainSection post={props.posts} click={props.click}/>
            <AsideBar latest={props.latest} popular={props.popular}/>
        </div>
    );
}

export default HomePage;