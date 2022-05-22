import MainService from '@/services/main'
import { API } from '@/utilities/api'
import { Api } from '@/constants/api'
import * as _ from 'lodash'

export type Data<T> = {
  id: string
  data: T
}

export type Posts = {
  [id: string]: Data<Post>
}

export type Post = {
  userId: string
  title: string
  description: string
  regist_datetime?: Date
  photo: string
}

export default class PostService {
  main: MainService
  posts: Posts

  constructor(main: MainService) {
    this.main = main
    this.posts = {}
  }

  async readPosts() {
    try {
      const response = await API.get(Api.POSTS)
      this.posts = _.mapKeys(response, 'id')
    } catch (error) {
      console.log('error read posts', error)
      alert('データ取得に失敗しました')
    }
  }

  async readPost(id: string) {
    console.log('getPost', id)
    try {
      const response = await API.get(`${Api.POSTS}/${id}`)
      this.posts = { ...this.posts, [id]: response }
    } catch (error) {
      console.log('error read posts', error)
      alert('データ取得に失敗しました')
    }
  }

  async getMyPosts() {
    try {
      return _.filter(this.posts, (post) => {
        return post.userId !== this.main.auth.user.userDataKey
      })
    } catch (error) {
      console.log('error read my posts', error)
      alert('データ取得に失敗しました')
    }
  }

  async createPost(values: Post) {
    try {
      if (!this.main.auth.user.userDataKey) {
        throw new Error('ユーザ情報が無効です', this.main.auth.user)
      }
      await API.post(Api.POSTS, {
        ...values,
        userId: this.main.auth.user.userDataKey,
      })
    } catch (error) {
      console.log('error create post', error)
      alert('登録に失敗しました')
    }
  }

  async updatePost(postId: string, values: Post) {
    try {
      await API.put(`${Api.POSTS}/${postId}`, values)
    } catch (error) {
      console.log('error update post', error)
      alert('更新に失敗しました')
    }
  }

  async deletePost(postId: string) {
    try {
      await API.del(`${Api.POSTS}/${postId}`)
    } catch (error) {
      console.log('error delete post', error)
      alert('削除に失敗しました')
    }
  }
}
