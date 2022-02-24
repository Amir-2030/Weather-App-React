import React  from 'react';

const Form = (props) => {
    return (
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="Please Enter City" />
            <input type="text" name="country" placeholder="Please Enter Country ..."/>
            <button>Get Weather</button>
        </form>
    )
}

export default Form