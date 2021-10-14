//ENDPOINTS


////////////////////////
//  Offers  ////////////
////////////////////////

const listings/offers/:limit/:category = [
  {
    id
    title
    body
    username
    timestamp
    category
  }
];
/*params
- sort by most recent
*/
// -------------------------------------------------

const listings/offers/comments/:listing_id = [
  {
    id
    username (needs to be unique)
    body
    body_id (can explain if needed)
    timestamp
  }
];
/*params
- sort username and most recent
*/
// -------------------------------------------------
const listings/offers/post = {
  username
  title
  body
  timestamp (should be handled by the db)
  category
};

const listings/offers/comment = {
  listing_id
  username
  body
  timestamp (should be handled by the db)
};
// -------------------------------------------------


////////////////////////
//  Requests  //////////
////////////////////////

const listings/requests/:limit/:category = [
  {
    id
    title
    body
    username
    timestamp
    category
  }
];
/*params
- sort by most recent
*/
// -------------------------------------------------

const listings/requests/comments/:listing_id = [
  {
    id
    username (needs to be unique)
    body
    body_id (can explain if needed)
    timestamp
  }
];
/*params
- sort username and most recent
*/
// -------------------------------------------------
const listings/requests/post = {
  username
  title
  body
  timestamp (should be handled by the db)
  category
};

const listings/requests/comment = {
  listing_id
  username
  body
  timestamp (should be handled by the db)
};
// -------------------------------------------------


//profile requests

















// future release
// figure out how to delete items