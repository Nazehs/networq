import store from '../redux/store'
import {JS_SUBMIT} from '../redux/actions'

class Js extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: store.getState().js
        };
    }

    componentWillMount(){
        store.dispatch(JS_SUBMIT(this.state.content))
    }

    _updateState(content){
        this.setState({content})
        store.dispatch(JS_SUBMIT(this.state.content))
    }

    componentWillUnmount(){
        store.dispatch(JS_SUBMIT(this.state.content))
    }

    

    render() {
        return (
            <div>
                <h2>JavaScript</h2>
                <textarea style={{ resize: 'none'}} 
                        onChange={(node)=>this._updateState(node.target.value)} 
                        rows={20} 
                        cols={100}
                >
                    {this.state.content}
                </textarea>
                <button onClick={() => store.dispatch(JS_SUBMIT(this.state.content))}>Submit JS</button>
            </div>
        )
    }

}

export default Js