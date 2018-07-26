'use strict';

var appRoot = document.getElementById("app");

var isShown = false;

var toggleDetail = function toggleDetail() {
    isShown = !isShown;
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: toggleDetail },
            !isShown ? 'Show details' : 'Hide details'
        ),
        React.createElement(
            'p',
            null,
            isShown && 'Hey. These are some details you can now see!'
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
