import { useMemo, useState } from 'react'

import {
  Badge,
  DataTable,
  PageHeader,
  Panel,
  cn,
  formatNaira,
} from '@blingg/admin-kit'

import { groups } from '../data/community.data'

const TONES = { active: 'success', 'under review': 'warning', dormant: 'neutral' }
const FILTERS = ['all', 'Public', 'Private']

export default function Groups() {
  const [filter, setFilter] = useState('all')

  const rows = useMemo(
    () =>
      filter === 'all' ? groups : groups.filter((group) => group.type === filter),
    [filter]
  )

  return (
    <>
      <PageHeader
        title="Groups"
        description="Public groups anyone can join; private groups are invite-only and show membership counts without message content."
      />

      <Panel
        title="All groups"
        description={`${rows.length} of ${groups.length} groups`}
        bodyClassName=""
        actions={
          <div className="flex gap-1">
            {FILTERS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setFilter(option)}
                className={cn(
                  'rounded-md px-2.5 py-1 text-xs transition-colors',
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
              header: 'ID',
              render: (row) => (
                <span className="font-mono text-xs">{row.id}</span>
              ),
            },
            {
              key: 'name',
              header: 'Group',
              render: (row) => <span className="text-text">{row.name}</span>,
            },
            {
              key: 'type',
              header: 'Type',
              render: (row) => (
                <Badge tone={row.type === 'Public' ? 'info' : 'neutral'}>
                  {row.type}
                </Badge>
              ),
            },
            {
              key: 'members',
              header: 'Members',
              align: 'right',
              render: (row) => (
                <span className="tabular-nums">{row.members}</span>
              ),
            },
            { key: 'cadence', header: 'Cadence' },
            {
              key: 'pooled',
              header: 'Pooled',
              align: 'right',
              render: (row) => (
                <span className="tabular-nums text-text">
                  {formatNaira(row.pooled)}
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
