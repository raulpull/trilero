import React from 'react';
import TrileroCubo from './TrileroCubo';

export default class TrileroCubos extends React.Component {
    render() {
        return <div className="trilerocubos">
            <TrileroCubo />
            <TrileroCubo />
            <TrileroCubo />
        </div>
    }
}