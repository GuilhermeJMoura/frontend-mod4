import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'

export function Navbar ()
{ return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Detracker</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Mapa</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Adicionar Equipamento</a>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Sair</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
    
}