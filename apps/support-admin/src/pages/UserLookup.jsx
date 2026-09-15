import { useMemo, useState } from 'react'

import {
  Badge,
  DataTable,
  EmptyState,
  PageHeader,
  Panel,
  formatDate,
  formatNaira,
} from '@blingg/admin-kit'

import { users } from '../data/support.data'

const TONES = { active: 'success', locked: 'danger', 'pending KYC': 'warning' }

export default function UserLookup() {
  const [query, setQuery] = useState('')

  const rows = useMemo(() => {
    const needle = query.trim().toLowerCase()
    if (!needle) return users

    return users.filter((user) =>
      [user.name, user.handle, user.id].some((field) =>
        field.toLowerCase().includes(needle)
      )
    )
  }, [query])

  return (
    <>
      <PageHeader
        title="User lookup"
        description="Find an account by name, handle or ID. Wallet balances are read-only from this console."
      />

      <Panel bodyClassName="">
        <div className="border-b border-border p-5">
          <label htmlFor="user-search" className="sr-only">
            Search users
          </label>

          <input
            id="user-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name, @handle or USR-ID…"
            className="h-10 w-full max-w-md rounded-lg border border-border-strong bg-ink px-3 text-[13px] text-text outline-none transition-colors placeholder:text-text-faint focus:border-brand/60"
          />
        </div>

        <DataTable
          columns={[
            {
              key: 'name',
              header: 'Customer',
              render: (row) => (
                <span>
                  <span className="block text-text">{row.name}</span>
                  <span className="block text-[11px] text-text-faint">
                    {row.handle}
                  </span>
                </span>
              ),
            },
            {
              key: 'id',
              header: 'ID',
              render: (row) => (
                <span className="font-mono text-xs">{row.id}</span>
              ),
            },
            { key: 'tier', header: 'Tier' },
            {
              key: 'wallet',
              header: 'Wallet',
              align: 'right',
              render: (row) => (
                <span className="tabular-nums text-text">
                  {formatNaira(row.wallet)}
                </span>
              ),
            },
            {
              key: 'joined',
              header: 'Joined',
              render: (row) => (
                <span className="tabular-nums whitespace-nowrap">
                  {formatDate(row.joined)}
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
          empty={
            <EmptyState
              title="No matching accounts"
              description={`Nothing found for “${query}”. Try a handle or a USR- reference.`}
            />
          }
        />
      </Panel>
    </>
  )
}
