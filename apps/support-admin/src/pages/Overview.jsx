import {
  Badge,
  DataTable,
  PageHeader,
  Panel,
  StatGrid,
  formatNaira,
  formatRelative,
} from '@blingg/admin-kit'

import { disputes, supportStats, tickets } from '../data/support.data'

const PRIORITY_TONES = { low: 'neutral', medium: 'warning', high: 'danger' }

export default function Overview() {
  const open = tickets.filter((ticket) => ticket.status === 'open')
  const active = disputes.filter((dispute) => dispute.status === 'investigating')

  return (
    <>
      <PageHeader
        title="Support overview"
        description="What customers are waiting on right now."
      />

      <StatGrid stats={supportStats} />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <Panel
          title="Open tickets"
          description={`${open.length} waiting on a reply.`}
          className="xl:col-span-2"
          bodyClassName=""
        >
          <DataTable
            columns={[
              {
                key: 'subject',
                header: 'Subject',
                render: (row) => (
                  <span>
                    <span className="block text-text">{row.subject}</span>
                    <span className="block font-mono text-[11px] text-text-faint">
                      {row.id} · {row.user}
                    </span>
                  </span>
                ),
              },
              { key: 'channel', header: 'Channel' },
              {
                key: 'updated',
                header: 'Updated',
                render: (row) => formatRelative(row.updated),
              },
              {
                key: 'priority',
                header: 'Priority',
                align: 'right',
                render: (row) => (
                  <Badge tone={PRIORITY_TONES[row.priority]}>{row.priority}</Badge>
                ),
              },
            ]}
            rows={open}
          />
        </Panel>

        <Panel
          title="Active disputes"
          description="Funds held pending an outcome."
        >
          <ul className="flex flex-col gap-3">
            {active.map((dispute) => (
              <li
                key={dispute.id}
                className="rounded-lg border border-border bg-surface px-4 py-3"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-mono text-xs text-text">{dispute.id}</span>
                  <span className="text-sm font-semibold text-text tabular-nums">
                    {formatNaira(dispute.amount)}
                  </span>
                </div>

                <p className="mt-1.5 text-xs leading-relaxed text-text-dim">
                  {dispute.reason}
                </p>

                <p className="mt-1.5 text-[11px] text-text-faint">
                  {dispute.user} · opened {formatRelative(dispute.opened)}
                </p>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </>
  )
}
