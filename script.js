const Counter1 = React.createClass({
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

    ComponentWillMount() {
        console.log(this.state.counter)
    },
    
    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {className: 'counter'}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, '+'),
            React.createElement('button', {onClick: this.decrement}, '-')
           
        );
        console.log(IncrementButton)
    }
});

const Counter2 = React.createClass({
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
            React.createElement('button', {onClick: this.increment}, '+'),
            React.createElement('button', {onClick: this.decrement}, '-')

        );
    }
});

const Counter3 = React.createClass({
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
            React.createElement('button', {onClick: this.increment}, '+'),
            React.createElement('button', {onClick: this.decrement}, '-')

        );
    }
});

const CounterList = React.createClass({
    
    render: function() {
      return (
        React.createElement('ul', {}, 
          React.createElement(Counter1, {}),
          React.createElement(Counter2, {}),
          React.createElement(Counter3, {})
       )
      )
    }
  })

const element = React.createElement(CounterList);
ReactDOM.render(element, document.getElementById('app'));