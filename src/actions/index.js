/* Contains all the actions */

export function selectBook(book){
  /*
  selectBook is an ActionCreator, it needs to return an action, an object with a type prop
  */
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
