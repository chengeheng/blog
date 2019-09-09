export const changeText = text => {
    return {
        type: "ADD_TO_DATA",
        payload: {
            text: text
        }
    };
};
