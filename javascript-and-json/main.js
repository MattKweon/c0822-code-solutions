var albums = [
  {
    year: '2016-08-16',
    title: 'blond',
    artist: 'Frank Ocean'
  },
  {
    year: '2016-11-25',
    title: 'Starboy',
    artist: 'The Weeknd'
  },
  {
    year: '2014-08-12',
    title: 'Worlds',
    artist: 'Porter Robinson'
  }
];
console.log(typeof albums, 'albums:', albums);

var albumsInString = JSON.stringify(albums);
console.log(typeof albumsInString, 'albums:', albumsInString);

var student = '[{"student id": "222171", "name": "Matthew Kweon"}]';
console.log(typeof student, 'student:', student);

var studentInObject = JSON.parse(student);
console.log(typeof studentInObject, 'student:', studentInObject);
