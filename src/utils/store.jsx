import {configureStore} from "@reduxjs/toolkit";
import appSlice from "./appSlice.jsx";
import searchSlice from "./searchSlice.jsx";
import chatSlice from "./chatSlice.jsx";
import searchQuerySlice from "./searchQuerySlice.jsx";

const store = configureStore({
    reducer : {
        app : appSlice ,
        search : searchSlice,
        chat : chatSlice,
        searchQuery: searchQuerySlice
    }
});

export default store;