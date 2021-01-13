import React, { useState } from 'react';


export default (props) => {
    const { searching } = props;

    const startSearch = (e) => {
        e.preventDefault();
        const searchItem = {
            item: e.target.item.value,
            idx: e.target.idx.value
        }
        console.log(searchItem)
        searching(searchItem);
    }

    return(
        <div>
            <h1>
                <form style={{display: "flex"}} onSubmit={ startSearch }>
                    <label style={{marginRight: "20px"}}>Search for: <select style={{padding: "13px"}} name="item">
                            <option value="people">People</option>
                            <option value="planets">Planets</option>
                            <option value="starships">Starships</option>
                        </select>
                    </label>
                    <label style={{marginRight: "20px"}}>ID: <input style={{padding: "13px"}} type="number" name="idx" id="idx"/></label>
                    <button type="submit">Search</button>
                </form>
            </h1>
        </div>
    )
}