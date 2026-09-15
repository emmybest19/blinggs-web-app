import {
  Badge,
  DataTable,
  PageHeader,
  Panel,
  StatGrid,
  formatNaira,
  formatRelative,
} from '@blingg/admin-kit'

import { financeStats, settlementBatches, transactions } from '../data/finance.data'

const TXN_TONES = { settled: 'success', pending: 'warning', failed: 'danger' }

export default function Overview() {
  const pending = settlementBatches.filter(
    (batch) => batch.status === 'awaiting approval'
  )

  return (
    <>
      <PageHeader
        title="Finance overview"
        description="Movement across the Blingg ledger for the last 30 days."
      />

      <StatGrid stats={financeStats} />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <Panel
          title="Latest transactions"
          description="Live feed from the ledger."
          className="xl:col-span-2"
          bodyClassName=""
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
                render: (row) => (
                  <Badge tone={TXN_TONES[row.status]}>{row.status}</Badge>
                ),
              },
            ]}
            rows={transactions.slice(0, 5)}
          />
        </Panel>

        <Panel
          title="Awaiting approval"
          description={`${pending.length} settlement batches before today's cut-off.`}
        >
          <ul className="flex flex-col gap-3">
            {pending.map((batch) => (
              <li
                key={batch.id}
                className="rounded-lg border border-border bg-surface px-4 py-3"
              >
                <p className="font-mono text-xs text-text">{batch.id}</p>

                <p className="mt-1.5 text-sm font-semibold text-text tabular-nums">
                  {formatNaira(batch.amount)}
                </p>

                <p className="mt-1 text-[11px] text-text-faint">
                  {batch.bank} · {batch.count} transfers · cut-off{' '}
                  {formatRelative(batch.cutoff)}
                </p>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </>
  )
}
