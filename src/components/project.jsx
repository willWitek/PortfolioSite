import React, { Component} from 'react';

class Project extends Component {
    render() {
        const textStyle = {
            fontFamily:"Bodoni Moda",
            color: "rgba(0,0,0,0.8)",
            fontWeight: 500,
        };
        const textStyleSmall = {
            fontFamily:"Roboto Mono",
            color: "black",
        };

        return(
            <React.Fragment class="container col-xxl-8 px-4 my-5">
                <div class="row flex-lg-row-reverse align-items-center justify-content-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6 px-5 space-between">
                        <img src={this.props.data.img} class="d-block mx-lg-auto img-fluid" alt={this.props.data.img} width="600" height="350" loading="lazy"/>
                    </div>
                    <div class="col-lg-6">
                        <h1 class="display-5 fw-bold lh-1 mb-3 px-5" style={textStyle}>{this.props.data.name}</h1>
                        <p class="lead px-5" style={textStyleSmall}>{this.props.data.text}</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Project;