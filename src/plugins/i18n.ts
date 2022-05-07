import { createI18n } from 'vue-i18n'
import jaJP from '@/locales/ja.json'
import enUS from '@/locales/en.json'

// Type-define 'en-JA' as the master schema for the resource
type MessageSchema = typeof jaJP

const i18n = createI18n<[MessageSchema], 'en-US' | 'ja-JP'>({
  locale: 'ja-JP',
  messages: {
    'ja-JP': jaJP,
    'en-US': enUS,
  },
})

export default i18n
