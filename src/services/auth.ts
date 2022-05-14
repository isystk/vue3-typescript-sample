import MainService from '@/services/main'
import {
  CognitoUser,
  CognitoUserAttribute,
  AuthenticationDetails,
} from 'amazon-cognito-identity-js'
import { getUserPool } from '@/utilities/aws'

export default class AuthService {
  main: MainService
  user: CognitoUser | null

  constructor(main: MainService) {
    this.main = main
    const userPool = getUserPool()
    this.user = userPool ? userPool.getCurrentUser() : null
  }

  // ログアウト
  signOut(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (!this.user) {
        resolve(false)
      } else {
        this.user.signOut(() => {
          localStorage.clear()
          console.log('signed out')
          this.user = null
          // window.location.reload()
          resolve(true)
        })
      }
    })
  }

  // ログイン
  async signIn(email: string, password: string): Promise<CognitoUser> {
    const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    })
    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: getUserPool(),
    })

    return new Promise((resolve, reject) => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: (result) => {
          const accessToken = result.getAccessToken().getJwtToken()
          console.log('AccessToken: ' + accessToken)
          this.user = getUserPool().getCurrentUser()
          // window.location.reload()
          if (this.user) {
            resolve(this.user)
          }
        },
        onFailure: (err) => {
          console.error(err)
          alert('ログインに失敗しました')
          reject()
        },
        // newPasswordRequired: function (userAttributes, requiredAttributes) {
        //   // コンソールからユーザを登録した場合、初回認証時に強制的にパスワードを変える必要がある。
        //   // https://qiita.com/k_hoso/items/afe9aa8183b8bf0651a1
        //   cognitoUser.completeNewPasswordChallenge('Test@1234', {}, this)
        // },
      })
    })
  }

  // 会員仮登録
  async signUp(email: string, password: string): Promise<boolean> {
    try {
      const attributeList = [
        new CognitoUserAttribute({
          Name: 'email',
          Value: email,
        }),
      ]
      return await getUserPool().signUp(
        email,
        password,
        attributeList,
        [],
        (err, result) => {
          if (err) {
            console.error(err)
            return false
          }
          return true
        }
      )
    } catch (error) {
      console.log('error signup in', error)
      if ((error as string).match(/UsernameExistsException/)) {
        alert(
          '既に会員登録されています。認証済みでない場合はメールを確認してください。'
        )
      }
      return false
    }
  }

  // 会員登録認証
  async confirmRegistration(
    email: string,
    verificationCode: string
  ): Promise<boolean> {
    try {
      const cognitoUser = new CognitoUser({
        Username: email,
        Pool: getUserPool(),
      })
      return await cognitoUser.confirmRegistration(
        verificationCode,
        true,
        (err: any) => {
          if (err) {
            console.log(err)
            return false
          }
          console.log('verification succeeded')
          return true
        }
      )
    } catch (error) {
      console.log('error verification in', error)
      if ((error as string).match(/UsernameExistsException/)) {
        alert(
          '既に会員登録されています。認証済みでない場合はメールを確認してください。'
        )
      }
      return false
    }
  }

  // 認証チェック
  signCheck(): boolean {
    return !!this.user
  }
}
