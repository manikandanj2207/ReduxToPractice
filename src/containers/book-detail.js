import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component{
  render(){

    if (!this.props.book){
      return <div>Select a book to get started. </div>
    }

    return(
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Title: {this.props.book.pages}</div>
      </div>
    );
  }
}


function mapStateToProps(state){
  /*
  Whatever is returned will show up as props inside of BookList;
  if the state changes this container will re-render;
  This function will be assinged to the props;
  represent the applicaiton state
  */
  return {
    /*
    {} because we are returning a object from this function
    */
    book: state.activeBook
  };
}


export default connect(mapStateToProps)(BookDetail);
