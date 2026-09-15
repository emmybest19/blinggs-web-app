import Fees from './pages/Fees'
import Overview from './pages/Overview'
import Reconciliation from './pages/Reconciliation'
import Settlements from './pages/Settlements'
import Transactions from './pages/Transactions'

export const routes = [
  { index: true, element: <Overview /> },
  { path: 'transactions', element: <Transactions /> },
  { path: 'settlements', element: <Settlements /> },
  { path: 'reconciliation', element: <Reconciliation /> },
  { path: 'fees', element: <Fees /> },
]
