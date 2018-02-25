import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Book extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    publishedDate: PropTypes.string,
    description: PropTypes.string,
    thumbnail: PropTypes.string,
    selfLink: PropTypes.string
  };

  render() {
    const { title, author, publishedDate, description, thumbnail, selfLink } = this.props.item;

    return (
      <li>
        <a href={selfLink}>
          <h2>{title} by {author}</h2>
          <img src={thumbnail}/>
          <p className="published"/>
          <p>{description}</p>
        </a>
      </li>
    );
  }

}