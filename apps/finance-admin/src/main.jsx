import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { AdminApp } from '@blingg/admin-kit'

import { domain } from './domain'
import { routes } from './routes'

import './styles/index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AdminApp domain={domain} routes={routes} />
    </StrictMode>
)
