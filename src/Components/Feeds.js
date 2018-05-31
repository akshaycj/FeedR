import React, { Component } from "react";
import Feed from "./Feed";
import { Spin } from "antd";
import { Query } from "react-apollo";
import gql from "graphql-tag";


const upv = gql`
{
  allPosts(orderBy: upVotes_DESC){
    title
    description
    upVotes
    downVotes
    author {
      username
      thumbnail
    }
    media {
      thumbnail
    }
  }
}
`

const nor = gql`
{
  allPosts{
    title
    description
    upVotes
    downVotes
    author {
      username
      thumbnail
    }
    media {
      thumbnail
    }
  }
}
`

export default class Feeds extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Query
          query={this.props.sort==='b'?upv:nor}
        >
          {({ loading, error, data }) => {
            if (loading)
              return (
                <div
                  style={{ textAlign: "center", width: "100%", marginTop: 300 }}
                >
                  <Spin />
                </div>
              );
            if (error) return <p>Error :(</p>;

            console.log("data", data.allPosts);
            
            var posts = data.allPosts;
            
       
            
            return data.allPosts.map(feed => (
              <Feed
                title={feed.title}
                desc={feed.description}
                up={feed.upVotes}
                down={feed.downVotes}
                user={feed.author.username}
                avatar={feed.author.thumbnail}
                cover={feed.media.thumbnail}
              />
            ));
          }}
        </Query>
      </div>
    );
  }
}
