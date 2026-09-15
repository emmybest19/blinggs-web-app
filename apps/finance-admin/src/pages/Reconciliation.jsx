import {
  Badge,
  DataTable,
  PageHeader,
  Panel,
  cn,
  formatNaira,
} from '@blingg/admin-kit'

import { reconciliation } from '../data/finance.data'

const TONES = { matched: 'success', variance: 'warning', investigating: 'danger' }

export default function Reconciliation() {
  const unmatched = reconciliation.filter((row) => row.variance !== 0)
  const totalVariance = unmatched.reduce((sum, row) => sum + row.variance, 0)

  return (
    <>
      <PageHeader
        title="Reconciliation"
        description="Ledger balance against bank statement, per settlement account."
      />

      {unmatched.length > 0 && (
        <div className="mb-5 rounded-xl border border-warning/30 bg-warning/10 px-5 py-4">
          <p className="text-sm font-medium text-warning">
            {unmatched.length} accounts do not balance
          </p>
          <p className="mt-1 text-xs text-text-dim">
            Net variance of{' '}
            <span className="tabular-nums">{formatNaira(totalVariance)}</span>{' '}
            across {unmatched.length} accounts. Resolve before the next cut-off.
          </p>
        </div>
      )}

      <Panel bodyClassName="">
        <DataTable
          columns={[
            {
              key: 'account',
              header: 'Account',
              render: (row) => <span className="text-text">{row.account}</span>,
            },
            {
              key: 'ledger',
              header: 'Ledger',
              align: 'right',
              render: (row) => (
                <span className="tabular-nums">{formatNaira(row.ledger)}</span>
              ),
            },
            {
              key: 'statement',
              header: 'Statement',
              align: 'right',
              render: (row) => (
                <span className="tabular-nums">{formatNaira(row.statement)}</span>
              ),
            },
            {
              key: 'variance',
              header: 'Variance',
              align: 'right',
              render: (row) => (
                <span
                  className={cn(
                    'tabular-nums',
                    row.variance === 0 ? 'text-text-faint' : 'text-danger'
                  )}
                >
                  {row.variance === 0 ? '—' : formatNaira(row.variance)}
                </span>
              ),
            },
            {
              key: 'status',
              header: 'Status',
              align: 'right',
              render: (row) => <Badge tone={TONES[row.status]}>{row.status}</Badge>,
            },
          ]}
          rows={reconciliation}
        />
      </Panel>
    </>
  )
}
