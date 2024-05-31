import {useLocation} from "react-router-dom";
import React from "react";

export const SearchResults = () => {
    const location = useLocation();
    const { searchResults } = location.state;
};