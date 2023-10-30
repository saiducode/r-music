import { useState } from "react";

function Header() {

    
    return (
    <>        
        <div className="bg-[url('../public/img/music_background.png')] bg-cover bg-no-repeat h-48 m-5"> </div>    
        
        <div className="flex mt-10 mr-5 ml-5">
            <div className="flexauto w-16">
                <a href="https://www.reddit.com/r/music" target="_blank">
                    <img src="../public/img/music_community_icon.png" alt="music-logo" className="h-14 w-14" />
                </a>
            </div>
            
            <div className="justify-center text-center md:w-3/3 mx-auto">
                <h1 className="font-black text-4xl ">
                    r/  
                    <span className="text-orange-600">Music</span>
                </h1>
                <p className="mt-10 text-base font-light">Reddit's #1 Music Community Feed</p>
                
            </div>
            
        </div>
        <hr class="h-px my-8 bg-orange-500 border-0 dark:bg-gray-700 ml-5 mr-5"/>
    </>    
    )
}

export default Header;