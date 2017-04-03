import React from 'react';
import ReactDOM from 'react-dom';
import Square from './Square';

it ('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <Square value="1" onClick={() => console.log('this works!')} />,
        div
    );
});
