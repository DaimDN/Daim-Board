import React from 'react'

export default function Verticalnavbar() {
    return (
        <div style={{
            position: "fixed",
            left: '0'
        }}>
        <ul class="nav flex-column" style={{backgroundColor: '#2A3EB1'}} >
  <li class="nav-item">
    <a class="nav-link active" href="/">
    <i style={{fontSize: '23px'}} class="fas fa-home"></i>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="/">Disabled</a>
  </li>
</ul>
            
        </div>
    )
}
