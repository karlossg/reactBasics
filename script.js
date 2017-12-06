const Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    render: function() {
        return React.createElement('div', {onClick: this.increment},
            React.createElement('span', {className: 'counter'}, 'Licznik ' + this.state.counter)
        );
    }
});

const element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));