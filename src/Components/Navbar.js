import React, { Component } from 'react'

export default class Navbar extends Component {
    
    render() {
        return (
            <div style={{ border: "4px solid blue" }}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <h1 className="navbar-brand">CriccNews - Welcome</h1>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
            </div>
        )
    }
}
