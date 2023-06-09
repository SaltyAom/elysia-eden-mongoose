import { edenTreaty } from '@elysiajs/eden'
import { App } from '.'

const treaty = edenTreaty<App>('http://localhost:8080')

const { data, error } = await treaty.create.post()

if (error) throw error
