import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {


    render() {

        return (
            <div className="container-fluid">
                <div className="py-5 text-center">
                    <img className="d-block mx-auto mb-4" src="https://getdivvy.com/wp-content/themes/divvy-child/images/Divvy-Logo-Teal.png" alt="Logo" width="181" />
                    <h2>Warehouse Item Locator</h2>
                    <p className="lead">Please enter the X and Y coordinates for your item</p>
                </div>

                <div className="col-12">
                    <form className="needs-validation" noValidate>
                        <div className="row" style={{justifyContent: 'center'}}>
                            <div className="col-sm-12 col-lg-4 mb-3">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">X</span>
                                    </div>
                                    <input type="number" className="form-control" id="xCoordinate" max="100000" min="0" required />
                                    <div className="invalid-feedback" style={{width: '100%'}}>
                                        The x coordinate required.
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-lg-4 mb-3">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Y</span>
                                    </div>
                                    <input type="number" className="form-control" id="yCoordinate" max="100000" min="0" required />
                                    <div className="invalid-feedback" style={{width: '100%'}}>
                                        The Y coordinate is required.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('mountPoint'))