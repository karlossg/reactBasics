const movies = [{
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    poster: 'potter.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    poster: 'lion-king.jpg'
  },
  {
    id: 3,
    title: 'Władca Pierścieni',
    desc: 'Film o hobbitach',
    poster: 'lotr.jpg'
  },
  {
    id: 4,
    title: 'Hulk',
    desc: 'Film o zielonej bestii',
    poster: 'hulk.jpg'
  }
];

const MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('h2', {}, this.props.title)
    )
  }
})

const MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('p', {}, this.props.desc)
    )
  }
})


const MoviePoster = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('img', {
        src: this.props.src
      })
    )
  }
})

const Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('li', {},
        React.createElement(MovieTitle, {
          title: this.props.movie.title
        }),
        React.createElement(MovieDescription, {
          desc: this.props.movie.desc
        }),
        React.createElement(MoviePoster, {
          src: this.props.movie.poster
        }))
    )
  }
})

const MovieList = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired,
  },

  render: function() {
    return (
      React.createElement('ul', {}, this.props.movies.map(function(movie) {
        return React.createElement(Movie, {
          key: movie.id,
          movie: movie
        })
      }))
    )
  }
})

const element = React.createElement(MovieList, {
  movies: movies
});

ReactDOM.render(element, document.getElementById('app'));