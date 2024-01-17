import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PostAuthor } from './PostAuthor';
import { ReactionButtons } from './ReactionButtons';

export const SinglePostPage = ({ match }) => {
  const { id } = match.params

  const post = useSelector(state =>
    state.posts.find(post => post.id === id)
  )

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <PostAuthor userId={post.user} />
        <p className="post-content">{post.content}</p>
        <ReactionButtons post={post} />
        <Link to={`/edit-post/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  )
}