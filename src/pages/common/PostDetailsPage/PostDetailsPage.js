import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import { PostActions, UIActions } from "../../../actions";
import { postService } from "../../../apis";
import { Heading, TagBoard } from "../../../common";
import { ActionControl } from "./ActionControl";
import { CommentForm } from "./CommentForm";
import { CommentList } from "./CommentList";
import { PostContent } from "./PostContent";
import { RelatedPostList } from "./RelatedPostList";

export const PostDetailsPage = (props) => {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const auth = useSelector((state) => state.auth);
  const sharers = useSelector((state) => state.page.sharers);
  const post = useSelector((state) => state.page.post);
  // const voters = useSelector((state) => state.page.voters);
  // const
  // const isVoted = voters ? voters.data.find(v => v.id === auth ? auth.id : v.id) ? true : false : false;
  const pageFilters = {
    postsFilters: { limit: 3 },
    tagsFilters: { limit: 10 },
    postCommentsFilters: { limit: 3 },
    postVotersFilters: {},
    postSharersFilters: {},
    id: match.params.id,
  };
  const onComment = (content) => {
    const comment = {
      content,
      author: auth ? auth : null,
    };
    postService.addComment(pageFilters.id, comment).then((response) => {
      if (response.status === 200) {
        dispatch(
          PostActions.getPostComments(
            pageFilters.id,
            pageFilters.postCommentsFilters
          )
        );
      }
    });
  };

  useEffect(() => {
    dispatch(UIActions.fetchDataPostDetailsPage(pageFilters));
    window.scroll({top: 0, left: 0, behavior: "smooth"})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match]);
  return (
    <>
    
    <Heading pageText = {post ? post.title : null} />
      <div className="row">
        <div className="col-lg-8" style={{ marginTop: "-14px" }}>
          <PostContent post={post} />
          <hr />
          {sharers && auth ? <ActionControl post={post} sharers={sharers} auth={auth} /> : null}
          <hr />
          <CommentList id={pageFilters.id} />
          <CommentForm message="Leave a comment" onComment={onComment} />
        </div>
        <TagBoard />
      </div>
      <hr></hr>
      <h3>Related Posts</h3>
      <hr></hr>
      <RelatedPostList />
    </>
  );
};
