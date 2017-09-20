const HTML_SUBMIT = (html) => ({
    type: 'HTML_SUBMIT',
    html
})

const CSS_SUBMIT = (css) => ({
    type: 'CSS_SUBMIT',
    css
})

const JS_SUBMIT = (js) => ({
    type: 'JS_SUBMIT',
    js
})

const SAVE_TO_DATABASE = () => ({
    type: 'SAVE_TO_DATABASE'
})

export {HTML_SUBMIT, CSS_SUBMIT, JS_SUBMIT, SAVE_TO_DATABASE}