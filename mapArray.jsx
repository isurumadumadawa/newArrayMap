import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import { movies } from "../data/fakeMovieService";

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Die Hard",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Get Out",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 8,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Trip to Italy",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Airplane",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Wedding Crashers",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Gone Girl",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 7,
    dailyRentalRate: 4.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "The Sixth Sense",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Avengers",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5
  }
];

class MapArray extends Component {
  constructor() {
    super();

    this.state = {
      title: movies.map(movie => movie.title),
      selectedTitle: movies[0].title,
      id: movies.map(movie => movie._id),
      selectedId: movies[0]._id
    };

    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.input = React.createRef();
  }

  handleChangeSelect(event) {
    const targetTitle = event.target.value;
    const index = this.state.title.indexOf(targetTitle);
    const targetId = this.state.id[index];
    this.input.current.value = targetId;
    this.setState({ selectedTitle: targetTitle, selectedDate: targetId });
  }

  handleChangeInput(event) {}

  render() {
    return (
      <div>
        <input
          className="form-control"
          type="text"
          ref={this.input}
          defaultValue={this.state.selectedId}
        ></input>
        <select
          value={this.state.selectedTitle}
          onChange={this.handleChangeSelect}
        >
          {this.state.title.map(item => (
            <option value={item} key={Math.random()}>
              {item}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default MapArray;
