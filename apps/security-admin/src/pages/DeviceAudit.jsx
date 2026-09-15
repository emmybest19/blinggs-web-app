import { Badge, DataTable, PageHeader, Panel, formatDateTime } from '@blingg/admin-kit'

import { deviceEvents } from '../data/security.data'

const TONES = { allowed: 'success', challenged: 'warning', blocked: 'danger' }

export default function DeviceAudit() {
  return (
    <>
      <PageHeader
        title="Device audit"
        description="Every authentication attempt against a staff console, with the device and origin it came from."
      />

      <Panel bodyClassName="">
        <DataTable
          columns={[
            {
              key: 'at',
              header: 'Timestamp',
              width: '170px',
              render: (row) => (
                <span className="tabular-nums whitespace-nowrap">
                  {formatDateTime(row.at)}
                </span>
              ),
            },
            {
              key: 'account',
              header: 'Account',
              render: (row) => <span className="text-text">{row.account}</span>,
            },
            { key: 'device', header: 'Device' },
            { key: 'location', header: 'Location' },
            {
              key: 'ip',
              header: 'IP',
              render: (row) => (
                <span className="font-mono text-xs">{row.ip}</span>
              ),
            },
            {
              key: 'outcome',
              header: 'Outcome',
              align: 'right',
              render: (row) => <Badge tone={TONES[row.outcome]}>{row.outcome}</Badge>,
            },
          ]}
          rows={deviceEvents}
        />
      </Panel>
    </>
  )
}
