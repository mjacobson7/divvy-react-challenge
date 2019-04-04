import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';

class App extends React.Component {

    state = {
        x: '',
        y: '',
        itemId: '-'
    }

    handleXInputChange(value) {
        this.setState({ x: value }, () => {
            this.getItemId();
        });
    }

    handleYInputChange(value) {
        this.setState({ y: value }, () => {
            this.getItemId();
        });
    }

    getItemId() {
        if (null != this.state.x && null != this.state.y && this.state.x > 0 && this.state.y > 0) {
            axios.get('/getItemId', { params: { x: this.state.x, y: this.state.y } }).then(retVal => {
                this.setState({ itemId: retVal.data })
            })
        } else {
            this.setState({ itemId: '-' })
        }
    }


    render() {

        return (
            <div className="container-fluid">
                <div className="py-5 text-center">
                    <img className="d-block mx-auto mb-4" src="https://getdivvy.com/wp-content/themes/divvy-child/images/Divvy-Logo-Teal.png" alt="Logo" width="181" />
                    <h2>Warehouse Item Locator</h2>
                    <p className="lead">Please enter the X and Y coordinates for your item</p>
                </div>

                <div className="col-12">
                    <div className="row mb-5" style={{ justifyContent: 'center' }}>
                        <div className="col-sm-12 col-lg-4 mb-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">X</span>
                                </div>
                                <input value={this.state.x} onChange={e => this.handleXInputChange(e.target.value)} type="number" className="form-control" max="100000" min="0" required />
                                <div className="invalid-feedback" style={{ width: '100%' }}>
                                    The x coordinate required.
                                    </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-4 mb-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Y</span>
                                </div>
                                <input value={this.state.y} onChange={e => this.handleYInputChange(e.target.value)} type="number" className="form-control" max="100000" min="0" required />
                                <div className="invalid-feedback" style={{ width: '100%' }}>
                                    The Y coordinate is required.
                                    </div>
                            </div>
                        </div>
                    </div>

                    <div className="row" style={{ justifyContent: 'center' }}>
                        <div className="card" style={{width: '25rem'}}>
                            <div className="card-header">Result</div>
                            {<h1 style={{ textAlign: 'center' }}>{this.state.itemId}</h1>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('mountPoint'))