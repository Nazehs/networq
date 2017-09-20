import store from '../redux/store'
import {HTML_SUBMIT} from '../redux/actions'

class Html extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: store.getState().html
        };
    }

    componentWillMount(){
        store.dispatch(HTML_SUBMIT(this.state.content))
    }

    _updateState(content){
        this.setState({content})
        store.dispatch(HTML_SUBMIT(this.state.content))
    }

    componentWillUnmount(){
        store.dispatch(HTML_SUBMIT(this.state.content))
    }

    render() {
        return (
            <div>
                <h2>HTML</h2>
                <textarea style={{ resize: 'none'}} 
                        onChange={(node)=>this._updateState(node.target.value)} 
                        rows={20} 
                        cols={100}
                >
                    {this.state.content}
                </textarea>
                <button onClick={() => store.dispatch(HTML_SUBMIT(this.state.content))}>Submit HTML</button>
            </div>
        )
    }

}

export default Html