import React, { Component } from 'react'
import "./Home.scss";
import Button from '../../UI/Button/Button'

export default class Home extends Component {
    render() {
        return (
            <div>
                <p>Home - login page</p>
                <Button  class = {'button'} > Dugme</Button>
            </div>
        )
    }
}
