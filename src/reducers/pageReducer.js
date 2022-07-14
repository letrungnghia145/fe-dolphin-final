import {
  CategoryTypes,
  CommentTypes,
  PostTypes,
  TagTypes,
  UITypes,
  UserTypes,
} from "../constants";

const initialState = {
  // isLoading: false,
  // data: {},
};

const page = (state = initialState, action) => {
  switch (action.type) {
    case UITypes.FETCH_DATA_HOME_PAGE:
      return {};
    case UITypes.FETCH_DATA_USER_INFO_PAGE:
      return {};
    case UITypes.FETCH_DATA_POST_DETAILS_PAGE:
      return {};
    case UITypes.FETCH_DATA_POST_PAGE:
      return {};
    case UITypes.FETCH_DATA_PROFILE_PAGE:
      return {};
    case UITypes.FETCH_DATA_TAG_PAGE:
      return {};
    case UITypes.FETCH_DATA_SEARCH_PAGE:
      return {};
    case UITypes.FETCH_DATA_ADMIN_USERS_PAGE:
      return {};
    case UITypes.SHOW_LOADING:
      return { ...state, isLoading: true };
    case UITypes.HIDE_LOADING:
      return { ...state, isLoading: false };
    case UserTypes.GET_ALL_USERS_SUCCESS:
      return { ...state, users: action.payload.users };
    case UserTypes.GET_USER_INFO_SUCCESS:
      return { ...state, userInfo: action.payload.user };
    case CategoryTypes.GET_ALL_CATEGORIES_SUCCESS:
      // if (state.categories) {
      //   const newCates = action.payload.categories;
      //   const temp = {
      //     pagination: {...newCates.pagination},
      //     data: [...state.categories.data,...newCates.data]
      //   }
      //   return {...state, categories: temp};
      // }
      return { ...state, categories: action.payload.categories };
    case PostTypes.GET_POST_DETAILS_SUCCESS:
      return { ...state, post: action.payload.post };
    case PostTypes.GET_POST_VOTERS_SUCCESS:
      return { ...state, voters: action.payload.voters };
    case PostTypes.GET_POST_SHARERS_SUCCESS:
      return { ...state, sharers: action.payload.sharers };
    case PostTypes.GET_ALL_POSTS_SUCCESS:
      return { ...state, posts: action.payload.posts };
    case PostTypes.GET_POST_COMMENTS_SUCCESS:
      return { ...state, comments: action.payload.comments };
    case TagTypes.GET_ALL_TAGS_SUCCESS:
      return { ...state, tags: action.payload.tags };
    case TagTypes.GET_TAG_POSTS_SUCCESS:
      return { ...state, posts: action.payload.posts };
      return { ...state, tags: action.payload.tags };
    case TagTypes.GET_TAG_SUCCESS:
      return { ...state, tag: action.payload.tag };
    case UserTypes.GET_USER_POSTED_POSTS_SUCCESS:
      return { ...state, postedPosts: action.payload.postedPosts };
    case UserTypes.GET_USER_SHARED_POSTS_SUCCESS:
      return { ...state, sharedPosts: action.payload.sharedPosts };
    case PostTypes.DELETE_POSTED_POST_SUCCESS:
            const arr = [...state.page.posts]
      console.log(state.page.posts);
      console.log(arr)
            const index = arr.indexOf(action.payload.post);
            if (index > -1) { // only splice array when item is found
              arr.splice(index, 1); // 2nd parameter means remove one item only
            }
      return {...state, posts: [...arr]}
    case CommentTypes.GET_COMMENT_REPLIES_SUCCESS:
      const { id, replies } = action.payload;
      const { comments } = state;
      const temp = comments.data.map((comment) => {
        if (comment.id === id) return { ...comment, replies };
        else return comment;
      });
      return { ...state, comments: { ...comments, data: temp } };
    default:
      break;
  }
  return state;
};

export default page;
