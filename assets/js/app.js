import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios';
import Header from './header';
import Result from './result';
import Input from './input';

class App extends React.Component {

    state = {
        itemId: '-',
        xProperties: {
            label: 'X',
            name: 'x',
            value: ''
        },
        yProperties: {
            label: 'Y',
            name: 'y',
            value: ''
        }
    }



    handleInputChange(data) {
        this.setState(prevState => ({
            [`${[data.type]}Properties`]: {
                ...prevState[`${[data.type]}Properties`],
                value: data.value
            }
        }), () => {
            this.getItemId();
        })

    }

    getItemId() {

        if ('' !== this.state.xProperties.value && '' !== this.state.yProperties.value) {
            axios.get('/getItemId', { params: { x: this.state.xProperties.value, y: this.state.yProperties.value } }).then(retVal => {
                this.setState({ itemId: retVal.data })
            })
        } else {
            this.setState({ itemId: '-' })
        }
    }

    render() {

        return (
            <div className="container-fluid">
                <Header></Header>

                <div className="col-12">
                    <div className="row mb-5" style={{ justifyContent: 'center' }}>
                        <div className="col-sm-12 col-lg-4 mb-3">
                            <Input
                                properties={this.state.xProperties}
                                handleInputChange={this.handleInputChange = this.handleInputChange.bind(this)}>
                            </Input>
                        </div>
                        <div className="col-sm-12 col-lg-4 mb-3">
                            <Input
                                properties={this.state.yProperties}
                                handleInputChange={this.handleInputChange = this.handleInputChange.bind(this)}>
                            </Input>
                        </div>
                    </div>

                    <Result itemId={this.state.itemId}></Result>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('mountPoint'))