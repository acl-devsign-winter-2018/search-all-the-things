import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Book extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,

  };

  render() {
    const { title, author, publishedOn, description, url, image } = this.props.book;

    return (
      <li>
        <a href={url}>
          <h2>{title} by {author}</h2>
          <img src={image}/>
          <p className="published"/>
          <p>{description}</p>
        </a>
      </li>
    );
  }

}