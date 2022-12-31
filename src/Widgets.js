import React from "react";
import "./Widgets.css";
import { 
    TwitterTimelineEmbed, 
    TwitterShareButton, 
    TwitterTweetEmbed
} from "react-twitter-embed";
import Search from "@mui/icons-material/Search";


function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <Search className="widgets__searchIcon"/>
                <input placeholder="Search Twitter" type="text"/>
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"1603902134181068800"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="SujayShahare"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    options={{ text: "#reactjs is awesome", via: "SujayShahare" }}
                />
            </div>
        </div>
    );
}

export default Widgets;