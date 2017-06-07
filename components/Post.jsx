import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

const conditionalRender = post => (post ?  <h3>{post}</h3> : null)


class Post extends React.Component {
  componentWillMount() {

  }
  componentWillUnmount() {
    
  }
  render() {
    const { route } = this.props;
    const post = route.page.data;

    return (
      <div>
        <div className="post">
          <div className="post-container">
            <Link to={prefixLink('/articles/')}>
              <div className="logo fixed">
                <div className="logo-outerCircle">
                  <div className="logo-outerCircle-triangle">
                    <div className="logo-outerCircle-triangle-square">
                      <div className="logo-outerCircle-triangle-square-innerCircle" /></div>
                  </div>
                </div>
              </div>
            </Link>

            <div className="post-container-title">
              <h1>{post.title}</h1>
              {conditionalRender(post.sajat)}
              <div className="post-container-body">
                <div dangerouslySetInnerHTML={{ __html: post.body }} /></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
