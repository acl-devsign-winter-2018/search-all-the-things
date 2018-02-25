import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Book.css';

export default class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
  };

  render() {
    const { title, authors, publishedDate, description } = this.props.book.volumeInfo;
    const { thumbnail } = this.props.book.volumeInfo.imageLinks;
    const { selfLink } = this.props.book;
    return (
      <li>
        <a href={selfLink} target="_blank"> 
          <h2>{title} by {authors}</h2>
          <img src={thumbnail}/> 
          <p className="published"> Published on {publishedDate} </p>
          <p>{description}</p> 
        </a>
      </li>
    );
  }

}