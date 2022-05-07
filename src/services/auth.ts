import MainService from '@/services/main'

export default class AuthService {
  main: MainService

  constructor(main: MainService) {
    this.main = main
  }

  async signOut() {
    try {
      // TODO
    } catch (error) {
      console.log('error signing out', error)
    }
  }

  async signIn(email: string, password: string) {
    try {
      // TODO
    } catch (error) {
      console.log('error signing in', error)
      alert('メールアドレスまたはパスワードが違います')
    }
  }

  async signUp(name: string, email: string, password: string): boolean {
    try {
      // TODO
      return true
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

  async signCheck() {
    console.log('signCheck')
  }
}
