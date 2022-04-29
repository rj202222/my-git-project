import React, { Component } from 'react';
import { footer } from 'jdh-npm-footer-renderer'
export default class App extends Components {
    render() {
        return ( 
        <div>
            <h1 > DevCamp React Starter </h1> { footer('DevCamp') } 
        </div>
        );
    }
}