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


const Movie = React.createClass({
  render: function () {
    const posters = this.props.movies.map(function(movie) {
      return React.createElement('img', {src: movie.poster})      
    })
    console.log(posters)
    return (
      React.createElement('div', {},
        React.createElement('h2', {}, this.props.movies.name),
        React.createElement('div', {}, posters)
      )
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