import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import FullWindow from "./samples/Embed Modes/FullWindow";
import SizedContainer from "./samples/Embed Modes/SizedContainer";
import InLine from "./samples/Embed Modes/InLine";
import Lightbox from "./samples/Embed Modes/Lightbox";
import LocalPDFFilePreview from "./samples/LocalPDFFilePreview";
import "./App.css";

// import CaptureEvents from "./samples/PDF Annotation APIs/CaptureEvents";
// import CRUDAPIs from "./samples/PDF Annotation APIs/CRUDAPIs";
// import HandlingAnnotationsInPDF from "./samples/PDF Annotation APIs/HandlingAnnotationsInPDF";
// import UIConfigurations from "./samples/PDF Annotation APIs/UIConfigurations/UIConfigurations";

// import ViewerCustomization from "./samples/ViewerCustomization";
// import CaptureViewSDKEvents from "./samples/CaptureViewSDKEvents";
// import PDFAnnotationTools from "./samples/PDFAnnotationTools";

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Route exact path={["/", "/fullWindow"]} component={FullWindow} />
                    <Route path="/sizedContainer" component={SizedContainer} />
                    <Route path="/inLine" component={InLine} />
                    <Route path="/lightbox" component={Lightbox} />
                    <Route path="/localPDFFilePreview" component={LocalPDFFilePreview} />

                    {/* <Route path="/pdfAnnotationTools" component={PDFAnnotationTools} />
                    <Route path="/viewerCustomization" component={ViewerCustomization} />
                    <Route path="/captureEvents" component={CaptureViewSDKEvents} /> */}

                    {/* <Route exact path="/annotationAPIs" component={CRUDAPIs} />
                    <Route path="/annotationAPIs/captureEvents" component={CaptureEvents} />
                    <Route path="/annotationAPIs/handlingInPDF" component={HandlingAnnotationsInPDF} />
                    <Route path="/annotationAPIs/UIConfigurations" component={UIConfigurations} /> */}
                </Router>
            </React.Fragment>
        );
    }
}