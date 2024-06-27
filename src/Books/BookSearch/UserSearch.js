import {useState} from "react";

function UserSearch(props) {

    const handleChange = (evt) => {
        props.search(evt.target.value);
    }

    return (
        <>
            <input className="form-control" type="text" onChange={handleChange} />
        </>
    )
}

export default UserSearch;