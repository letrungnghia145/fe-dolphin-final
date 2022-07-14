import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CommentActions } from "../../../../actions";
import { commentService } from "../../../../apis";
import { URL } from "../../../../constants";
import { CommentForm } from "../CommentForm";
import commentUserImg from './../../../../assets/images/50x50.png';

export const Comment = (props) => {
  const dispatch = useDispatch();
  const { id, commentator, content, replies } = props.comment;
  const { classType } = props;
  const [isDisplayReplyForm, toggleReplyForm] = useState(false);
  const [isShowReplies, setShowReplies] = useState(false);
  const auth = useSelector((state) => state.auth);
  const pagination = replies ? replies.pagination : undefined;

  const showReplies = (replies) => {
    if (replies && replies.length > 0) {
      return replies.map((reply) => {
        return <Comment comment={reply} key={reply.id} classType="mt-4" />;
      });
    } else {
      return <div className="text-center">No replies found</div>;
    }
  };

  const onShowReplies = (page) => {
    if (pagination === undefined || (page > 0 && page <= pagination.total)) {
      dispatch(CommentActions.getCommentReplies(id, { limit: 2, page }));
    }
    setShowReplies(true);
  };

  const onComment = (content) => {
    const reply = {
      userId: auth ? auth.id : null,
      content,
    };
    commentService.addReply(id, reply).then((response) => {
      if (response.status === 200) {
        onShowReplies(1);
        toggleReplyForm(false);
      }
    });
  };

  return (
    <div className={`media ${classType}`}>
      <img
        className="d-flex mr-3 rounded-circle"
        src={commentUserImg}
        alt="img"
      />
      <div className="media-body">
        {/* <div style={{ position: "absolute", right: "15px", marginTop: "5px" }}>
          
        </div> */}
        <h5 className="mt-0">
          <Link to={`${URL.USER_INFO_URL}/${commentator.id}`} >
          {`${commentator.firstName}`}
          </Link>
        </h5>
        {content}
        <div
          style={{ display: "flex", justifyContent: "end", marginTop: "5px" }}
        >
          {isShowReplies ? (
            <React.Fragment>
              <span
                className="badge badge-pill btn-show-reply pill-cmt p-2"
                onClick={() => onShowReplies(pagination.page - 1)}
              >
                <i
                  className="fa fa-angle-double-up mr-1"
                  aria-hidden="true"
                ></i>
                Previous
              </span>
              <span
                className="badge badge-pill btn-show-reply pill-cmt p-2"
                onClick={() => onShowReplies(pagination.page + 1)}
              >
                <i
                  className="fa fa-angle-double-down mr-1"
                  aria-hidden="true"
                ></i>
                Next
              </span>
            </React.Fragment>
          ) : null}
          <span
            className="badge badge-pill btn-show-reply pill-cmt p-2"
            onClick={() => {
              if (!isShowReplies) {
                onShowReplies(pagination ? pagination.page : 1);
              } else {
                setShowReplies(false);
              }
            }}
          >
            <i
              className={`fa fa-commenting${isShowReplies ? "-o" : ""} mr-1`}
              aria-hidden="true"
            ></i>
            {isShowReplies ? "Hide" : "Show"} replies
          </span>
          <span
            className="badge badge-pill badge-success pill-cmt p-2"
            onClick={() => toggleReplyForm(!isDisplayReplyForm)}
          >
            {!isDisplayReplyForm ? "Reply" : "X"}
          </span>
          <span className="badge badge-pill badge-danger pill-cmt p-2">
            report
          </span>
        </div>
        {isShowReplies && replies ? showReplies(replies.data) : null}
        {isDisplayReplyForm ? (
          <CommentForm message="Send reply" onComment={onComment} />
        ) : null}
      </div>
    </div>
  );
};
