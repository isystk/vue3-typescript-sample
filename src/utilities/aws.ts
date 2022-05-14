import { CognitoUserPool } from 'amazon-cognito-identity-js'

const config = {
  region: import.meta.env.VITE_AWS_REGION,
  UserPoolId: import.meta.env.VITE_AWS_USER_POOL_ID,
  ClientId: import.meta.env.VITE_AWS_CLIENT_ID,
}

export const getUserPool = () => {
  if (!config.UserPoolId || !config.ClientId) {
    return null
  }
  return new CognitoUserPool({
    UserPoolId: config.UserPoolId,
    ClientId: config.ClientId,
  })
}

export const isAuthenticated = async (cb) => {
  const userPool = getUserPool()
  if (!userPool) {
    return false
  }
  const cognitoUser = userPool.getCurrentUser()
  if (cognitoUser != null) {
    cognitoUser.getSession((err, session) => {
      if (err) {
        return cb(err, false)
      }
      return cb(session, true)
    })
  } else {
    cb(null, false)
  }
}
