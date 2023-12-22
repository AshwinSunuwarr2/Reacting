import React from 'react'

export default function Alert(props) {
  return (
        props.alert && <div class="alert alert-warning alert-dismissible show alert-dark" role="alert">
            <strong>{props.alert.alertType}!</strong> {props.alert.msg}
            {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
  )
}
