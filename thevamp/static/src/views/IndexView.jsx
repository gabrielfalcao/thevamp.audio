import React from 'react'

import HeaderView from './HeaderView.jsx'

class IndexView extends React.Component {
    constructor() {
        super();
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <HeaderView />
                <div className="container">

                </div>
            </div>
        )
    }
}


export default IndexView
