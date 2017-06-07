import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import uuid from 'node-uuid';
import moment from 'moment';
import _ from 'lodash';

import Article from './Article';

class ArticlesList extends React.Component {
  componentWillMount() {

  }
  componentWillUnmount() {
    
  }
  renderPosts(route) {
    const posts = [];
    route.pages.map((page) => {
      if (page.data.layout === 'post') {
        posts.push(page);
      }
    });

    const ordered = _.sortBy(posts, (o) => {
      return new moment(o.data.date);
    }).reverse();

    return ordered.map((orderedPost) => {
      return <Article key={uuid()} data={orderedPost.data} />;
    });
  }
  render() {
    const { route } = this.props;
    const post = route.page.data;

    return (
      <div>
        <div className="articles-list">
          <div className="articles-list-container">
            <Link to={prefixLink('/')}>
              <div className="logo fixed">
                <div className="logo-outerCircle">
                  <div className="logo-outerCircle-triangle">
                    <div className="logo-outerCircle-triangle-square">
                      <div className="logo-outerCircle-triangle-square-innerCircle" /></div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="articles-list-container-title">
              <h1>{post.title}</h1>
              <div className="articles-list-container-body">
                <div dangerouslySetInnerHTML={{ __html: post.body }} /></div>
            </div>
          </div>
          <div className="articles-list-container-posts">
            {this.renderPosts(route)}
          </div>
        </div>
      </div>
    );
  }
}

export default ArticlesList;
