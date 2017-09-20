import store from '../redux/store'
import {CSS_SUBMIT} from '../redux/actions'

class Css extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: store.getState().css
        };
    }

    componentWillMount(){
        store.dispatch(CSS_SUBMIT(this.state.content))
    }

    _updateState(content){        
        this.setState({content})
        store.dispatch(CSS_SUBMIT(this.state.content))        
    }

    componentWillUnmount(){
        store.dispatch(CSS_SUBMIT(this.state.content))
    }

    render() {
        return (
            <div>
                <h2>CSS</h2>
                <textarea style={{ resize: 'none'}} 
                        onChange={(node)=>this._updateState(node.target.value)} 
                        rows={20} 
                        cols={100}
                >
                    {this.state.content}
                </textarea>
                <button onClick={() => store.dispatch(CSS_SUBMIT(this.state.content))}>Submit CSS</button>
            </div>
        )
    }

}

export default Css