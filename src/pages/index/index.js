import React from "react";
import styles from "./index.module.less";
import { withRouter } from "react-router-dom";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { changeText } from "./actions";

const IndexPage = props => {
    const dispatch = useDispatch();
    const localState = useSelector(state => ({
        ...state.data
    }));
    console.log(localState);
    const clickHandle = () => {
        dispatch(changeText("aaaa"));
    };
    return (
        <div>
            <Button type="primary" onClick={clickHandle}>
                啦啦啦
            </Button>
        </div>
    );
};

export default withRouter(IndexPage);
