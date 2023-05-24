import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'

export function TabelaDevices(){
    return (
        <table className="table caption-top">
  <caption>List of users</caption>
  <thead>
    <tr>
      <th scope="col">ID Máq</th>
      <th scope="col">ID Usuário</th>
      <th scope="col">Status</th>
      <th scope="col">Tempo em uso</th>
      <th scope="col">Localização</th>
      <th scope="col">Nível Bateria</th>
      <th scope="col">Histórico</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Data 5</td>
      <td>Data 6</td>
      <td>Data 7</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Data 5</td>
      <td>Data 6</td>
      <td>Data 7</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>Data 5</td>
      <td>Data 6</td>
      <td>Data 7</td>
    </tr>
  </tbody>
</table>
    )
}