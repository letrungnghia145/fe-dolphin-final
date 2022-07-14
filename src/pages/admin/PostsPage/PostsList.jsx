import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { PostActions } from "../../../actions";
import { PostsItem } from "./PostsItem";
import { postService } from "./../../../apis";
import { Utils } from "./../../../helper";
import { go } from "connected-react-router";

export const PostsList = () => {
  const posts = useSelector((state) => state.page.posts);
  const [selected, setSelected] = useState([]);
  const dispatch = useDispatch();
  const [currentPosts, setCurrentPosts] = useState([]);
  const showItems = (posts) => {
    return posts.map((post) => (
      <PostsItem
        key={post.id}
        post={post}
        selected={selected}
        setSelected={setSelected}
        handleDeleteBatch={handleDeleteBacth}
      />
    ));
  };

  const handleDeleteBacth = (ids) => {
    Swal.fire({
      title: "Continue to delete?",
      buttonsStyling: false,
      showCancelButton: true,
      confirmButtonText: "Delete",
      customClass: {
        confirmButton: "btn btn-danger mr-2",
        cancelButton: "btn btn-secondary",
      },
      icon: "warning",
    }).then((result) => {
      if (result.isConfirmed) {
        postService.deletePosts(ids).then((response) => {
          if (response.status === 200) {
            Utils.alertSuccess("Successfully deleted!").then(result => {
              if(result.isConfirmed) dispatch(go(0));
            });
          }
        });
      }
    });
  };

  const haveSelection = selected.length > 0;

  useEffect(() => {
    if (posts) setCurrentPosts([...currentPosts, ...posts.data]);
  }, [posts]);
  if (currentPosts.length > 0) {
    const { limit, total, page } = posts.pagination;
    return (
      <>
        <div className="list-group mb-3">
          <h3
            className="list-group-item-heading"
            style={{ display: "flex", justifyContent: "end" }}
          >
            <i
              className={`fa fa-trash ml-3 text-${
                haveSelection ? "danger" : "secondary"
              } mr-4 mt-1`}
              style={{
                cursor: "pointer",
                pointerEvents: haveSelection ? "auto" : "none",
              }}
              onClick={() => {
                handleDeleteBacth(selected);
              }}
            ></i>
          </h3>
        </div>
        <ul className="list-group">{showItems(currentPosts)}</ul>
        <div
          className="show-more"
          onClick={() => {
            if (page < total)
              dispatch(PostActions.getAllPosts({ limit, page: page + 1 }));
          }}
        >
          {page !== total ? (
            <i className="fa fa-angle-double-down animate" aria-hidden="true" />
          ) : null}
        </div>
      </>
    );
  }
  return <div className="text-center">No posts found.</div>;
};
