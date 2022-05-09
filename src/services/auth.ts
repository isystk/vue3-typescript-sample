import MainService from '@/services/main'
import {
  CognitoUser,
  CognitoUserPool,
  CognitoUserAttribute,
  AuthenticationDetails,
} from 'amazon-cognito-identity-js'
import { getUserPool } from '@/utilities/aws'

export default class AuthService {
  main: MainService
  userPool: CognitoUserPool

  constructor(main: MainService) {
    this.main = main
    this.userPool = getUserPool()
  }

  // // ログアウト
  // signOut() {
  //   try {
  //     const user = getUserPool().getCurrentUser()
  //     if (user) {
  //       user.signOut()
  //       localStorage.clear()
  //       console.log('signed out')
  //     } else {
  //       localStorage.clear()
  //       console.log('no user signing in')
  //     }
  //   } catch (error) {
  //     console.log('error signing out', error)
  //   }
  // }
  //
  // // ログイン
  // async signIn(email: string, password: string): Promise<boolean> {
  //   try {
  //     const authenticationDetails = new AuthenticationDetails({
  //       Username: email,
  //       Password: password,
  //     })
  //     const cognitoUser = new CognitoUser({
  //       Username: email,
  //       Pool: getUserPool(),
  //     })
  //
  //     return await cognitoUser.authenticateUser(authenticationDetails, {
  //       onSuccess: (result) => {
  //         console.log('result: ' + result)
  //         const accessToken = result.getAccessToken().getJwtToken()
  //         console.log('AccessToken: ' + accessToken)
  //         return true
  //       },
  //       onFailure: (err) => {
  //         console.error(err)
  //         alert(err.message)
  //         return false
  //       },
  //       // newPasswordRequired: function (userAttributes, requiredAttributes) {
  //       //   // コンソールからユーザを登録した場合、初回認証時に強制的にパスワードを変える必要がある。
  //       //   // https://qiita.com/k_hoso/items/afe9aa8183b8bf0651a1
  //       //   cognitoUser.completeNewPasswordChallenge('Test@1234', {}, this)
  //       // },
  //     })
  //   } catch (error) {
  //     console.log('error signing in', error)
  //     alert('メールアドレスまたはパスワードが違います')
  //     return false
  //   }
  // }
  //
  // // 会員仮登録
  // async signUp(email: string, password: string):Promise<boolean> {
  //   try {
  //     const attributeList = [
  //       new CognitoUserAttribute({
  //         Name: 'email',
  //         Value: email,
  //       }),
  //     ]
  //     return await getUserPool().signUp(email, password, attributeList, [], (err, result) => {
  //       if (err) {
  //         console.error(err)
  //         return false
  //       }
  //       return true
  //     })
  //   } catch (error) {
  //     console.log('error signup in', error)
  //     if ((error as string).match(/UsernameExistsException/)) {
  //       alert(
  //         '既に会員登録されています。認証済みでない場合はメールを確認してください。'
  //       )
  //     }
  //     return false
  //   }
  // }
  //
  // // 会員登録認証
  // async confirmRegistration(email: string, verificationCode : string):Promise<boolean> {
  //   try {
  //     const cognitoUser = new CognitoUser({
  //       Username: email,
  //       Pool: getUserPool(),
  //     })
  //     return await cognitoUser.confirmRegistration(verificationCode, true, (err: any) => {
  //       if (err) {
  //         console.log(err)
  //         return false
  //       }
  //       console.log('verification succeeded')
  //       return true
  //     })
  //   } catch (error) {
  //     console.log('error verification in', error)
  //     if ((error as string).match(/UsernameExistsException/)) {
  //       alert(
  //         '既に会員登録されています。認証済みでない場合はメールを確認してください。'
  //       )
  //     }
  //     return false
  //   }
  // }
  //
  // // 認証チェック
  // signCheck(): boolean {
  //   console.log('signCheck')
  //   const user = getUserPool().getCurrentUser()
  //   if (user) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
}
