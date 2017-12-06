// const element1 = React.createElement('div', {}, 'Hello world!');
// ReactDOM.render(element, document.getElementById('app'));

// const element2 =
// React.createElement('div', {},
//   React.createElement('h1', {}, 'Lista filmów'),
//   React.createElement('ul', {},
//     React.createElement('li', {},
//       React.createElement('h2', {}, 'Harry Potter'),
//       React.createElement('p', {}, 'Film o czarodzieju')
//     ),
//     React.createElement('li', {},
//       React.createElement('h2', {}, 'Król Lew'),
//       React.createElement('p', {}, 'Film opowiadający historię króla sawanny')
//     )
//   )
// );

// ReactDOM.render(element2, document.getElementById('app'));


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

const moviesElements = movies.map((movie) => 
  React.createElement('li', {key: movie.id},
    React.createElement('h2', {}, movie.title),
    React.createElement('p', {}, movie.desc),
    React.createElement('img',{src: movie.poster})
  )
);

const element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));