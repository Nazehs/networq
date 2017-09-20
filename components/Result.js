import store from '../redux/store'
import {SAVE_TO_DATABASE, HTML_SUBMIT, CSS_SUBMIT, JS_SUBMIT} from '../redux/actions'
import less from 'less'


class Result extends React.Component {
    constructor(props) {
        super(props);
    }

    static unsubscribe = store.subscribe(() => {})

    componentDidMount() {
        let rendering;
        less.render(`#renderSc{${store.getState().css}}`, function (e, output) {
            rendering = `<style>${output.css}</style>${store.getState().html}`  
        })        
        document.getElementById('renderSc').innerHTML = rendering

        eval(store.getState().js)
    }

    render() {
        return (
            <div
                id="renderSc"
                style={{
                height: '90vh',
                width: '50vw',
                border: 'solid 1px black'
            }}></div>
        );
    }
}

Result.contextType

export default Result