import React, { Component } from "react";
import Feed from "./Feed";
import { Spin } from "antd";
import { Query } from "react-apollo";
import gql from "graphql-tag";


export default class Feeds extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Query
          query={gql`
            {
              allPosts {
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
          `}
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

            console.log("asas", data.allPosts);

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
