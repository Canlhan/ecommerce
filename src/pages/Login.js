import React, { Fragment } from 'react'


const Login = () => {
  return (
    <Fragment>

    <form >
        <label>
          Name:
          <input type="text"  />
        </label>
        <input type="submit" value="Submit" />
        <br/>
        <label>
          email:
          <input type="text"  />
        </label>
        <input type="submit" value="Submit" />
        <br/>
        <label>
          password:
          <input type="text"  />
        </label>
        <input type="submit" value="Submit" />
        <br/>
        <label>
          repeat pass:
          <input type="text"  />
        </label>
        <input type="submit" value="Submit" />
      </form>

    </Fragment>
  )
}

export default Login;