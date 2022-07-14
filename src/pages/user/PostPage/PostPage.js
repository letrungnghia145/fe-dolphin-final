import { go } from "connected-react-router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postService } from "../../../apis";
import { UIActions } from './../../../actions';
import { Utils } from "./../../../helper";
import { SelectCategoryInput } from "./SelectCategoryInput";
import { SelectTagsBoard } from "./SelectTagsBoard";
import { Heading } from './../../../common'
import {useRouteMatch} from "react-router-dom";

export const PostPage = (props) => {
  const auth = useSelector((state) => state.auth);
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const matchedPostId = match.params.id;
  const [post, setPostProps] = useState({
    title: "",
    content: "",
    authorId: auth ? auth.id : null,
    tags: [],
  });

  const handleInput = (event) => {
    const { value, name } = event.target;
    setPostProps({ ...post, [name]: value });
  };

  useEffect(() => {
    if (matchedPostId) {
      postService.getPost(matchedPostId)
          .then((response) => {
            const {data} = response;
            console.log(data)
            setPostProps({
              title: data.title,
              content: data.content,
              authorId: data.author.id,
              tags: data.tags
            });
          })
    }
  }, [matchedPostId])

  const onCreatePost = (event) => {
    event.preventDefault();
    console.log(post)
    postService.createPost(post).then((response) => {
      if (response.status === 200)
        Utils.alertSuccess("Your post created").then((result) => {
          if (result.isConfirmed) {
            dispatch(go(0));
          }
        });
    });
  };

  const onEditPost = (event) => {
    event.preventDefault();
    console.log(post)
    postService.updatePost(matchedPostId, post).then((response) => {
      if (response.status === 200)
        Utils.alertSuccess("Post has been updated").then((result) => {
          if (result.isConfirmed) {
            dispatch(go(0));
          }
        });
    });
  };
  const pageFilters = {
    categoriesFilters: { limit: 10 }
  }
  useEffect(()=>{
    dispatch(UIActions.fetchDataPostPage(pageFilters))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (<>
    <Heading pageText=""/>
    <div className="wrapper">
      <div className="row no-gutters">
        <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
          <div className="contact-wrap w-100 p-md-5 p-4">
            {matchedPostId ?
                <FormPost post={post} eventWhenSubmit={onEditPost} isEditMode={true} handleInput={handleInput}/> :
                <FormPost post={post} eventWhenSubmit={onCreatePost} isEditMode={false} handleInput={handleInput}/>}
          </div>
        </div>
        <div
          className="col-lg-4 col-md-5 d-flex align-items-stretch"
          style={{ color: "white" }}
        >
          <SelectTagsBoard post={post} setPostProps={setPostProps} />
        </div>
      </div>
    </div>
  </>);
};

export const FormPost = (props) => {
  const { eventWhenSubmit, post, handleInput, isEditMode } = props;
  return (<>
    <h3 className="mb-4">{isEditMode ? "Edit post" : "Create post"}</h3>
    <div id="form-message-warning" className="mb-4" />
    <div id="form-message-success" className="mb-4">
      {isEditMode ? "Make change on your post" : "Let's create your new post!"}
    </div>
    <form
        className="contactForm"
        onSubmit={(event) => eventWhenSubmit(event)}
    >
      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <label className="label" htmlFor="title">
              Post title
            </label>
            <input
                type="text"
                className="form-control"
                name="title"
                placeholder="Enter post title..."
                value={post.title}
                onChange={(event) => handleInput(event)}
                required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label className="label" htmlFor="content">
              Content
            </label>
            <textarea
                style={{ padding: "15px" }}
                name="content"
                className="form-control"
                cols={30}
                rows={6}
                placeholder="Enter post content..."
                value={post.content}
                onChange={(event) => handleInput(event)}
                required
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <input
                type="submit"
                value={isEditMode ? "Edit post" : "Create post"}
                className="btn btn-primary"
            />
          </div>
        </div>
      </div>
    </form>
  </>);
}
