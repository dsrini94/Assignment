import React, { Component } from 'react';

import './style.css';
import ImageComponent from '../ImageComponet';
import { SEARCH_LIMIT } from '../../utils/constants'

class Autocomplete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: "",
            selectedProductTitle: "",
            selectedProductId: ""

        };

        this.changeHandler = this.changeHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
    }

    changeHandler(e) {
        const { suggestions } = this.props;
        const userInput = e.currentTarget.value;

        const filteredSuggestions = (suggestions.filter((suggestion) => suggestion && suggestion.title && suggestion.title.toLowerCase().indexOf(userInput.toLowerCase()) > -1)).slice(0, SEARCH_LIMIT);

        this.setState({
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value,
            selectedProductTitle: e.currentTarget.value
        });
    }

    clickHandler(e, selectedProductId) {
        this.setState({
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: "",
            selectedProductId,
            selectedProductTitle: e.currentTarget.value
        });
    }

    render() {
        const {
            clickHandler,
            changeHandler,
            state: {
                filteredSuggestions,
                showSuggestions,
                userInput,
                selectedProductTitle,
                selectedProductId
            },
            props: {
                products
            }
        } = this;
        let suggestionsListComponent;
        if (showSuggestions && selectedProductTitle) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <ul className="suggestions">
                        {filteredSuggestions.map((suggestion, index) => {
                            return (
                                <li key={suggestion.id} onClick={(e) => clickHandler(e, suggestion.id)}>
                                    {suggestion.title}
                                </li>
                            );
                        })}
                    </ul>
                );
            }
        }
        return (
            <div className="container">
                <div className="image-container">
                    <ImageComponent products={products} selectedProduct={selectedProductTitle} productId={selectedProductId} />
                </div>
                <div className="search-component-container">
                    <input type="text" className="search-box" onChange={changeHandler} value={userInput} />
                    {suggestionsListComponent}
                </div>
            </div>
        );
    }
}

export default Autocomplete;