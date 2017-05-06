import HttpStatus from 'http-status-codes';
import { getRedditContent } from '../utils';

export class Reddit {
  reddit = null;

  constructor(reddit) {
    this.reddit = reddit;
  }

  getRedditContent = (req, res) => {
    // // Uncomment these and see how you can use them to generalize this approach.
    // console.log('====== url ======');
    // console.log(req.url);
    // console.log('====== category ======');
    // console.log(req.category);
    // console.log('====== route ======');
    // console.log(req.route);

    console.log(`Reddit: Getting ${this.reddit}/${req.category ? req.category : ''}`);

    getRedditContent(this.reddit, req.category)
      .then((body) => {
        res.status(HttpStatus.OK).json(body);
      })
      .catch(error => {
        console.log(error);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: error });
      });
  }
}
