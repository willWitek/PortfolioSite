import React, { Component } from 'react';
import Project from './project';

class Projects extends Component {
    state = {
        projects: [
            { id:1, img: '/images/stockImage.png', name: 'Modeling Anomalies in Returns and Risk for Retail Stocks', text:'Developed a trading strategy based on statistical anomalies in price movement of stocks with high retail volume. Beat SPY benchmark by 11% in testing period, beat SPY mean return by 2 standard deviations.'},
            { id:2, img: '/images/dataMining.png', name: 'Statistical Methods for Individual Income Prediction in the United States', text:'Analyzed US 1994 Census data to build a predictive model for individual income. Used Pandas and Scikit-Learn for data cleaning, feature engineering, and modeling. Achieved 87% mean 10-fold cross-validation accuracy, 94% peak accuracy, and 100% top-5 accuracy.'},
            { id:3, img: '/images/DatasetFigures.png', name: 'Image-Equivalent Noise Generator', text:'Wrote code to generate noise with the same frequency distribution as a given image. Utilizes a phase-shift of the frequency component of the Fourier transform while maintaining the magnitude component. Written in Python using NumPy and PIL.'}
        ]
    };

    render() { 
        return (
            <div>
                {this.state.projects.map( project =>
                <Project
                    key={project.id}
                    id={project.id}
                    data={project}/>)}
            </div>
        );
    }
}
 
export default Projects;

