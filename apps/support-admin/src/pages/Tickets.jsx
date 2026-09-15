import { useMemo, useState } from 'react'

import {
  Badge,
  DataTable,
  PageHeader,
  Panel,
  cn,
  formatRelative,
} from '@blingg/admin-kit'

import { tickets } from '../data/support.data'

const PRIORITY_TONES = { low: 'neutral', medium: 'warning', high: 'danger' }
const STATUS_TONES = { open: 'info', resolved: 'success' }
const FILTERS = ['all', 'open', 'resolved']

export default function Tickets() {
  const [filter, setFilter] = useState('all')

  const rows = useMemo(
    () =>
      filter === 'all'
        ? tickets
        : tickets.filter((ticket) => ticket.status === filter),
    [filter]
  )

  return (
    <>
      <PageHeader
        title="Tickets"
        description="Conversations from in-app chat, email and phone, newest activity first."
      />

      <Panel
        title="All tickets"
        description={`${rows.length} of ${tickets.length} records`}
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
      >
        <DataTable
          columns={[
            {
              key: 'id',
              header: 'Ticket',
              render: (row) => (
                <span className="font-mono text-xs text-text">{row.id}</span>
              ),
            },
            {
              key: 'subject',
              header: 'Subject',
              render: (row) => <span className="text-text">{row.subject}</span>,
            },
            { key: 'user', header: 'Customer' },
            { key: 'channel', header: 'Channel' },
            {
              key: 'updated',
              header: 'Updated',
              render: (row) => formatRelative(row.updated),
            },
            {
              key: 'priority',
              header: 'Priority',
              render: (row) => (
                <Badge tone={PRIORITY_TONES[row.priority]}>{row.priority}</Badge>
              ),
            },
            {
              key: 'status',
              header: 'Status',
              align: 'right',
              render: (row) => (
                <Badge tone={STATUS_TONES[row.status]}>{row.status}</Badge>
              ),
            },
          ]}
          rows={rows}
        />
      </Panel>
    </>
  )
}
