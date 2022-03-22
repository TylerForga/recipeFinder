import React, { Component } from "react";

function QuerySelection(){

    return (
        
      <div>
        <input type="text" name="query" />
        <input type="radio" value="Ingredient" name="query" /> Ingredient name &nbsp;
        <input type="radio" value="Category" name="query" /> Category name &nbsp;
        <input type="radio" value="Name" name="query" /> Name of food &nbsp;
        <input type="button" value="Search" name="query" />   
      </div>
    );
}

export default QuerySelection;