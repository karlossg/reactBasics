const IncrementButton = React.createClass({
    render: function() {
        console.log(this.props.increment)
      return React.createElement('button', {}, '+')
      
    }
})


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

    decrement: function() {
        this.setState({
            counter: this.state.counter -1
        });
    },
    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {className: 'counter'}, 'Licznik ' + this.state.counter),
            React.createElement(IncrementButton, {onClick: function() {this.increment}} )
        );
    }
});

const element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));