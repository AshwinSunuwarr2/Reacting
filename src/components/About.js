import React from 'react'
// import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
        <h1>This is for the about us details  :)</h1>
        <p>
        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
            Danger!!
        </button>
        </p>
        <div style={{minHeight: 120}}>
        <div className="collapse collapse-horizontal" id="collapseWidthExample">
            <div className="card card-body" style={{width: 300}}>
            Boo!! :o<br/> GOTCHAA..
            </div>
        </div>
        </div>
    </div>
  )
}
