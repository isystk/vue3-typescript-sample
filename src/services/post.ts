import MainService from '@/services/main'
import { API } from '@/utilities/api'
import { Api } from '@/constants/api'
import * as _ from 'lodash'

export type Post = {
  userId: string
  title: string
  description: string
  regist_datetime: Date | null
  photo: string
}

export type Posts = {
  [id: string]: Post
}

export default class PostService {
  main: MainService
  posts: Posts

  constructor(main: MainService) {
    this.main = main
    this.posts = {}
  }

  async listPosts() {
    try {
      const response = await API.get(Api.POSTS)
      this.posts = _.mapKeys(response, 'id')
    } catch (error) {
      console.log('error read posts', error)
      alert('データ取得に失敗しました')
    }
  }

  async getPost(id: string) {
    // TODO
  }

  async createPost(post: Post) {
    try {
      await this.listPosts()
    } catch (error) {
      console.log('error create post', error)
      alert('登録に失敗しました')
    }
  }

  async updatePost(post: Post) {
    try {
      await this.listPosts()
    } catch (error) {
      console.log('error update post', error)
      alert('更新に失敗しました')
    }
  }

  async deletePost(postId: string) {
    try {
      await this.listPosts()
    } catch (error) {
      console.log('error delete post', error)
      alert('削除に失敗しました')
    }
  }
}
