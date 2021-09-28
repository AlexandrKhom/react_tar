import React from "react";

export function Posts({posts}) {

    return (
        <div>
            {posts.map(post => (<h2 key={post.id}>
                {post.id} - {post.body}
            </h2>))}
        </div>
    );
}
