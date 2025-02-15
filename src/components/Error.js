import React from 'react';
import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log(err)

  return (
    <div>
        <h2>Error</h2>
        <p>404 Page Not Found</p>
        <h3>{err.status}: {err.statusText}</h3>
    </div>
  )
}

export default Error