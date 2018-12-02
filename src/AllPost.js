import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";
import EditComponent from "./EditComponent";

class AllPost extends Component {
  render() {
    return (
      <div>
        {this.props.posts.length > 0 && (
          <div className="post-container">
            <h1 className="post_heading">All Posts</h1>
            {this.props.posts.map(post => (
              <div key={post.id}>
                {post.editing ? (
                  <EditComponent key={post.id} post={post} />
                ) : (
                  <Post key={post.id} post={post} />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state
  };
};
export default connect(mapStateToProps)(AllPost);
