import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList(){
      return this.props.books.map((book) => {
        return (
          <li key={book.title} className="list-group-item">{book.title}</li>
        );
      });
  }

  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
};

function mapStateToProps(state){
  /*
  Whatever is returned will show up as props inside of BookList;
  if the state changes this container will re-render;
  This function will be assinged to the props;
  */
  return {
    /*
    {} because we are returning a object from this function 
    */
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);
