import {
  Badge,
  DataTable,
  PageHeader,
  Panel,
  StatGrid,
  formatRelative,
} from '@blingg/admin-kit'

import { auditEvents, consoles, platformStats } from '../data/platform.data'

const STATUS_TONES = { healthy: 'success', degraded: 'warning', down: 'danger' }

export default function Overview() {
  return (
    <>
      <PageHeader
        title="Platform overview"
        description="Everything Blingg runs, in one place. Each console below is a separately deployed app with its own access list."
      />

      <StatGrid stats={platformStats} />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <Panel
          title="Consoles"
          description="Health and staff count per admin surface."
          bodyClassName=""
        >
          <DataTable
            columns={[
              { key: 'name', header: 'Console' },
              { key: 'owner', header: 'Owning team' },
              { key: 'staff', header: 'Staff', align: 'right' },
              {
                key: 'status',
                header: 'Status',
                align: 'right',
                render: (row) => (
                  <Badge tone={STATUS_TONES[row.status]}>{row.status}</Badge>
                ),
              },
            ]}
            rows={consoles}
          />
        </Panel>

        <Panel
          title="Recent activity"
          description="Privileged actions across every console."
          bodyClassName=""
        >
          <DataTable
            columns={[
              {
                key: 'action',
                header: 'Action',
                render: (row) => (
                  <span className="text-text">
                    {row.action}{' '}
                    <span className="text-text-faint">{row.target}</span>
                  </span>
                ),
              },
              { key: 'console', header: 'Console' },
              {
                key: 'at',
                header: 'When',
                align: 'right',
                render: (row) => formatRelative(row.at),
              },
            ]}
            rows={auditEvents}
          />
        </Panel>
      </div>
    </>
  )
}
