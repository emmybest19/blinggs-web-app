import {
  Badge,
  DataTable,
  PageHeader,
  Panel,
  StatGrid,
  formatRelative,
} from '@blingg/admin-kit'

import { alerts, deviceEvents, securityStats } from '../data/security.data'

const SEVERITY_TONES = {
  low: 'neutral',
  medium: 'warning',
  high: 'danger',
  critical: 'danger',
}
const OUTCOME_TONES = { allowed: 'success', challenged: 'warning', blocked: 'danger' }

export default function Overview() {
  const open = alerts.filter((alert) => alert.status === 'open')

  return (
    <>
      <PageHeader
        title="Security overview"
        description="Threat signals across the platform and the staff consoles."
      />

      <StatGrid stats={securityStats} />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <Panel
          title="Open alerts"
          description={`${open.length} unresolved.`}
          bodyClassName=""
        >
          <DataTable
            columns={[
              {
                key: 'title',
                header: 'Alert',
                render: (row) => (
                  <span>
                    <span className="block text-text">{row.title}</span>
                    <span className="block text-[11px] text-text-faint">
                      {row.source} · {row.signals}
                    </span>
                  </span>
                ),
              },
              {
                key: 'at',
                header: 'Raised',
                align: 'right',
                render: (row) => formatRelative(row.at),
              },
              {
                key: 'severity',
                header: '',
                align: 'right',
                render: (row) => (
                  <Badge tone={SEVERITY_TONES[row.severity]}>
                    {row.severity}
                  </Badge>
                ),
              },
            ]}
            rows={open}
          />
        </Panel>

        <Panel
          title="Recent sign-ins"
          description="Staff console authentication attempts."
          bodyClassName=""
        >
          <DataTable
            columns={[
              {
                key: 'account',
                header: 'Account',
                render: (row) => (
                  <span>
                    <span className="block truncate text-text">{row.account}</span>
                    <span className="block text-[11px] text-text-faint">
                      {row.location}
                    </span>
                  </span>
                ),
              },
              {
                key: 'at',
                header: 'When',
                align: 'right',
                render: (row) => formatRelative(row.at),
              },
              {
                key: 'outcome',
                header: '',
                align: 'right',
                render: (row) => (
                  <Badge tone={OUTCOME_TONES[row.outcome]}>{row.outcome}</Badge>
                ),
              },
            ]}
            rows={deviceEvents}
          />
        </Panel>
      </div>
    </>
  )
}
