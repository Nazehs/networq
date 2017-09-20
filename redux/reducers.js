const initialState = {
    html: ``,
    css: ``,
    js: ``
}

const databaseInjectionAndPublish = (state) => {
    //All the connection with the backend will be made here!
    return state;
}

const CodeCombiner = (state = initialState, action) => {
    switch(action.type){
        case 'HTML_SUBMIT': return Object.assign({}, state, {html: action.html})
        case 'CSS_SUBMIT': return Object.assign({}, state, {css: action.css})
        case 'JS_SUBMIT': return Object.assign({}, state, {js: action.js})
        case 'SAVE_TO_DATABASE': return databaseInjectionAndPublish(state)
        default: return state
    }
}

export default CodeCombiner