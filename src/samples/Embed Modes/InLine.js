import React, { Component } from "react";
import ViewSDKClient from "../ViewSDKClient";

class InLine extends Component {
    componentDidMount() {
        const viewSDKClient = new ViewSDKClient();
        viewSDKClient.ready().then(() => {
            /* Invoke file preview */
            viewSDKClient.previewFile("pdf-div", {
                /* Pass the embed mode option here */
                embedMode: "IN_LINE"
            });
        });
    }

    render() {
        return (
            <div className="in-line-container">
                <div id="pdf-div" className="in-line-div" />
            </div>
        );
    }
}

export default InLine;