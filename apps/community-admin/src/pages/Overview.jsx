import {
  Badge,
  DataTable,
  PageHeader,
  Panel,
  StatGrid,
  formatNaira,
  formatRelative,
} from '@blingg/admin-kit'

import { communityStats, groups, moderationQueue } from '../data/community.data'

const SEVERITY_TONES = { low: 'neutral', medium: 'warning', high: 'danger' }

export default function Overview() {
  const topGroups = [...groups]
    .sort((a, b) => b.pooled - a.pooled)
    .slice(0, 5)

  return (
    <>
      <PageHeader
        title="Community overview"
        description="Savings circles, and anything the community has flagged."
      />

      <StatGrid stats={communityStats} />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <Panel
          title="Largest groups"
          description="By total pooled savings."
          bodyClassName=""
        >
          <DataTable
            columns={[
              {
                key: 'name',
                header: 'Group',
                render: (row) => (
                  <span>
                    <span className="block text-text">{row.name}</span>
                    <span className="block text-[11px] text-text-faint">
                      {row.members} members · {row.cadence}
                    </span>
                  </span>
                ),
              },
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
            ]}
            rows={topGroups}
          />
        </Panel>

        <Panel
          title="Moderation queue"
          description={`${moderationQueue.length} items awaiting a decision.`}
          bodyClassName=""
        >
          <DataTable
            columns={[
              {
                key: 'target',
                header: 'Reported',
                render: (row) => (
                  <span>
                    <span className="block text-text">{row.target}</span>
                    <span className="block text-[11px] text-text-faint">
                      {row.reason}
                    </span>
                  </span>
                ),
              },
              {
                key: 'reports',
                header: 'Reports',
                align: 'right',
                render: (row) => (
                  <span className="tabular-nums">{row.reports}</span>
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
            rows={moderationQueue.slice(0, 5)}
          />
        </Panel>
      </div>
    </>
  )
}
