import { useMemo, useState } from 'react'

import {
  Badge,
  DataTable,
  PageHeader,
  Panel,
  cn,
  formatDateTime,
  formatNaira,
} from '@blingg/admin-kit'

import { transactions } from '../data/finance.data'

const TONES = { settled: 'success', pending: 'warning', failed: 'danger' }
const FILTERS = ['all', 'settled', 'pending', 'failed']

export default function Transactions() {
  const [filter, setFilter] = useState('all')

  const rows = useMemo(
    () =>
      filter === 'all'
        ? transactions
        : transactions.filter((txn) => txn.status === filter),
    [filter]
  )

  return (
    <>
      <PageHeader
        title="Transactions"
        description="Every movement on the ledger, newest first."
      />

      <Panel
        bodyClassName=""
        actions={
          <div className="flex gap-1">
            {FILTERS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setFilter(option)}
                className={cn(
                  'rounded-md px-2.5 py-1 text-xs capitalize transition-colors',
                  filter === option
                    ? 'bg-white/10 text-text'
                    : 'text-text-faint hover:text-text-dim'
                )}
              >
                {option}
              </button>
            ))}
          </div>
        }
        title="All transactions"
        description={`${rows.length} of ${transactions.length} records`}
      >
        <DataTable
          columns={[
            {
              key: 'id',
              header: 'Reference',
              render: (row) => (
                <span className="font-mono text-xs text-text">{row.id}</span>
              ),
            },
            { key: 'user', header: 'User' },
            { key: 'type', header: 'Type' },
            { key: 'channel', header: 'Channel' },
            {
              key: 'at',
              header: 'Time',
              render: (row) => (
                <span className="whitespace-nowrap tabular-nums">
                  {formatDateTime(row.at)}
                </span>
              ),
            },
            {
              key: 'amount',
              header: 'Amount',
              align: 'right',
              render: (row) => (
                <span className="tabular-nums text-text">
                  {formatNaira(row.amount)}
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
          rows={rows}
        />
      </Panel>
    </>
  )
}
