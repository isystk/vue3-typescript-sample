import { CognitoUserPool } from 'amazon-cognito-identity-js'

const config = {
  region: import.meta.env.VITE_AWS_REGION,
  UserPoolId: import.meta.env.VITE_AWS_USER_POOL_ID,
  ClientId: import.meta.env.VITE_AWS_CLIENT_ID,
}

export const getUserPool = () => {
  return new CognitoUserPool({
    UserPoolId: config.UserPoolId,
    ClientId: config.ClientId,
  })
}
