/**
 * フロントエンド用の URL を作成する
 */
const getFrontUrl = (path: string): string => {
  return [import.meta.env.VITE_INTERNAL_ENDPOINT, path].join('')
}

/** API のエンドポイント */
export const Url = {
  /** TOP */
  TOP: getFrontUrl('/'),
  /** ログイン */
  LOGIN: getFrontUrl('/login'),
  /** 会員登録 */
  SIGNUP: getFrontUrl('/signup'),
  /** 会員登録承認 */
  SIGNUP_VERIFICATION: getFrontUrl('/signup/verification'),
  /** 投稿詳細 */
  POSTS: getFrontUrl('/posts'),
  /** マイページ TOP */
  MEMBER: getFrontUrl('/member'),
  /** マイページ 投稿詳細 */
  MEMBER_POSTS: getFrontUrl('/member/posts'),
  /** マイページ 投稿 新規登録 */
  MEMBER_POSTS_NEW: getFrontUrl('/member/posts/new'),
}
