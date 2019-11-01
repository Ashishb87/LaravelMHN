import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    render() {
        return (
            <div class="flex-center position-ref full-height">          
            <div class="content">
                <div class="title m-b-md">
                    Test Laravel
                </div>
            </div>
        </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
