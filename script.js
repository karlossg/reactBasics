const movies = [
  {
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

// var Hello = React.createClass({
//   render: function() {
//       var names = ['Jake', 'Jon', 'Thruster'];
//       var namesList = names.map(function(name){
//                       return <li>{name}</li>;
//                     })

//       return  <ul>{ namesList }</ul>
//   }
// });


const MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  render: function () {
    return (
      React.createElement('h2', {}, this.props.title)
    )
  }
})

const MovieDescription = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },

  render: function () {
    return (
      React.createElement('p', {}, this.props.desc)
    )
  }
})


const MoviePoster = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired,
  },

  render: function () {
    return (
      React.createElement('img', {src: this.props.src})
    )
  }
})

const Movie = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired,
  },

  render: function () {
    return (
      React.createElement('ul', {}, this.props.movies.map(function(movie) {
        return React.createElement('li', {key: movie.id},
                React.createElement(MovieTitle, {title: movie.title}),
                React.createElement(MovieDescription, {desc: movie.desc}),
                React.createElement(MoviePoster, {src: movie.poster}))
      }))
    )
  }
})


// const image = {
//   name: 'Kotek',
//   src: 'http://imgur.com/n8OYCzR.png'
// };

// const GalleryItem = React.createClass({
//   propTypes: {
//     image: React.PropTypes.object.isRequired,
//   },

//   render: function() {
//     return (
//       React.createElement('div', {},
//         React.createElement('h2', {}, this.props.image.name),
//         React.createElement('img', {src: this.props.image.src})
//       )
//     )
//   },
  
// });


const element = React.createElement(Movie, {movies: movies});

ReactDOM.render(element, document.getElementById('app'));