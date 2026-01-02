import { createFileRoute } from '@tanstack/react-router'

import HomePage from '../components/Home/Home.page'

export const Route = createFileRoute('/')({
  component: HomePage,
})