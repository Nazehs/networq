import store from '../redux/store'
import {SAVE_TO_DATABASE, HTML_SUBMIT, CSS_SUBMIT, JS_SUBMIT} from '../redux/actions'

import Result from '../components/Result'
import Css from '../components/Css';
import Js from '../components/JS';
import Html from '../components/Html';

class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            type: 'result'
        }
    }

    _changeTitle(type) {
        this.setState({type});
    }

    _getInitialContentFromServer() {
        // gets initial contents from the database and then dispatches it to the store
        let initialContent = {
            html: "<p>yo</p>",
            css: `p{\n  color:red;\n }`,
            js: `console.log("Hello Gentleman");`
        }
        store.dispatch(HTML_SUBMIT(initialContent.html))
        store.dispatch(CSS_SUBMIT(initialContent.css))
        store.dispatch(JS_SUBMIT(initialContent.js))
        // mock initial content

        initialContent;
    }

    componentWillMount() {
        this._getInitialContentFromServer()
    }

    _renderElement() {

        switch (this.state.type) {
            case 'result':
                return (<Result/>)
            case 'html':
                return (<Html/>)
            case 'css':
                return (<Css/>)
            default:
                return (<Js/>)

        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this._changeTitle('result')}>Result</button>
                <button onClick={() => this._changeTitle('html')}>HTML</button>
                <button onClick={() => this._changeTitle('css')}>CSS</button>
                <button onClick={() => this._changeTitle('js')}>JavaScript</button>
                {this._renderElement()}
                <button onClick= { () => store.dispatch(SAVE_TO_DATABASE())}>
                    Publish your Snippet!
                </button>
            </div>
        )
    }

}

export default Index