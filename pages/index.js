import Layout from '../components/Layout'
import React , { Component } from 'react'

const styleIndexCenter = {
    position:'fixed',
    top: '36%',
    left: '33%',
    backgroundColor: '#fff',
}

class Index extends Component {
    state = {
        randomValue: '',
        selectCountry: 'SP',
    }

    handleSetSelectCountry = e => {
        this.setState({ 
            randomValue : '',
            selectCountry : e.target.value,
            copyText: ''
        })
    }

    handleSetRandomValue = () => {
        const { selectCountry } = this.state
        const max = selectCountry === 'SP' ? 99999999 : 999999999
        const fnumber = selectCountry === 'SP' ? '+65' : '+855'
        const data = Math.floor(Math.random() * Math.floor(max))
        this.setState({ randomValue : fnumber + data })
    }

    handleCopyText = () => {
        const copyText = document.getElementById("randomInput");
        copyText.select();
        document.execCommand("copy");
        this.setState({ copyText : `ก็อปปี้สำเร็จ!`})
        setTimeout(() => {
            this.setState({ copyText : '' })
        }, 3000);
    }

    render(){
        return (
            <Layout>
                <div className="container"  style={styleIndexCenter}>
                    <center>
                        <br/>
                            <h1 className="title">
                                โปรแกรมสุ่มหมายเลขโทรศัพท์
                            </h1>
                        <br/>
                    </center>
                    <div className="field has-addons">
                        <p className="control is-expanded">
                            <span className="select">
                                <select onChange={this.handleSetSelectCountry}>
                                    <option value="SP">สิงค์โปร +65</option>
                                    <option value="KB">กัมพูชา +855</option>
                                </select>
                            </span>
                        </p>
                        <p className="control is-expanded">
                            <input className="input" type="text" placeholder="กดปุ่ม Random เพื่อสุ่ม" value={this.state.randomValue} id="randomInput" />
                        </p>
                        <p className="control is-expanded">
                            <a className="button is-info" onClick={this.handleSetRandomValue}>
                                Random
                            </a>
                        </p>
                        <a className="button is-warning" data-tooltip="Tooltip Text" onClick={this.handleCopyText}>
                            Copy
                        </a>
                    </div>
                    <center>
                        <br/>
                            <h2 className="title">
                                {this.state.copyText}
                            </h2>
                        <br/>
                    </center>
                </div>
            </Layout>
        )
    }
}

export default Index