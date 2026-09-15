import { Badge, DataTable, PageHeader, Panel, formatDateTime } from '@blingg/admin-kit'

import { auditEvents } from '../data/platform.data'

export default function Audit() {
  return (
    <>
      <PageHeader
        title="Audit log"
        description="Every privileged action taken in any console, newest first. This log is append-only."
      />

      <Panel bodyClassName="">
        <DataTable
          columns={[
            {
              key: 'at',
              header: 'Timestamp',
              width: '180px',
              render: (row) => (
                <span className="whitespace-nowrap tabular-nums">
                  {formatDateTime(row.at)}
                </span>
              ),
            },
            { key: 'actor', header: 'Actor' },
            {
              key: 'action',
              header: 'Action',
              render: (row) => <span className="text-text">{row.action}</span>,
            },
            {
              key: 'target',
              header: 'Target',
              render: (row) => (
                <span className="font-mono text-xs">{row.target}</span>
              ),
            },
            {
              key: 'console',
              header: 'Console',
              align: 'right',
              render: (row) => <Badge>{row.console}</Badge>,
            },
          ]}
          rows={auditEvents}
        />
      </Panel>
    </>
  )
}
