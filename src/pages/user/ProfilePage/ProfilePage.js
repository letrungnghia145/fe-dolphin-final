import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UIActions } from "../../../actions";
import { Heading } from "../../../common";
import { InfoBoard } from "./InfoBoard";
import { PostedPostsList } from "./PostedPostsList";
import { SharedPostsList } from "./SharedPostList";
import { TabBoard } from "./TabBoard";
import profileImg from './../../../assets/images/750x450.png';

export const ProfilePage = (props) => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    // const { id } = auth;
    const pageFilters = {
        // id: auth.id,
        sharedPostsFilters: { limit: 3 },
        postedPostsFilters: { limit: 3 },
    };
    useEffect(() => {
        dispatch(UIActions.fetchDataProfilePage(pageFilters));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <Heading pageText="Profile" />
            <div className="row">
                <div className="col-lg-6">
                    <img
                        className="img-fluid rounded mb-4"
                        src={profileImg}
                        alt=""
                    />
                    <TabBoard />
                </div>
                <div className="col-lg-6">
                    <InfoBoard user={auth} />
                    <PostedPostsList />
                </div>
            </div>
            <hr />
            <h4
                className="bg-primary text-white text-bold"
                style={{ padding: "10px", fontWeight: "bold" }}
            >
                Shared posts list
            </h4>
            <hr></hr>
            {/*<SharedPostsList id={id} />*/}
        </>
    );
};
