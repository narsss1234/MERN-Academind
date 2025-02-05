import React from 'react';

import { VALIDATOR_REQUIRE } from '../../shared/components/util/validators';
import './NewPlace.css';
import Input from '../../shared/components/FormElements/Input';

const NewPlace = () => {
    return (
        <form className="palce-form">
            <Input element="input" type="text" label="Title" validators={[VALIDATOR_REQUIRE()]} errorText="Please enter a valid Text" />
        </form>
    );
};

export default NewPlace;