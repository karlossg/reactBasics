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

    componentWillMount() {
        this.setState({
            counter: 100
        });
    },
    
    componentDidMount() {
         this.timerID = setInterval(
            () => {
              if (this.state.counter > 0) {
                  this.decrement();
              }  
            },
            3000
          );
    },
    
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.counter !== nextState.counter) {
            console.log('true')
            return true;
        }
        console.log('false')
        return false;
    },

    componentWillUpdate() {
        console.log('counter will update')
    },

    componentDidUpdate() {
       const hello = React.createElement('h1',{}, 'HELLO')
       ReactDOM.render(hello, document.getElementById('hello'));
    },

    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log('The End')
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

    componentWillMount() {
        this.setState({
            counter: -100
        });
    },
    
    componentDidMount() {
         this.timerID = setInterval(
            () => {
              if (this.state.counter < 0) {
                  this.increment();
              }  
            },
            1000
          );
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