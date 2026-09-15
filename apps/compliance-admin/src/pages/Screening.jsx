import {
  Badge,
  DataTable,
  PageHeader,
  Panel,
  cn,
  formatRelative,
} from '@blingg/admin-kit'

import { screeningHits } from '../data/compliance.data'

const TONES = { review: 'warning', cleared: 'success', escalated: 'danger' }

export default function Screening() {
  return (
    <>
      <PageHeader
        title="Sanctions screening"
        description="Matches raised against sanctions, PEP and internal blocklists. Anything scoring above 0.85 is held pending review."
      />

      <Panel bodyClassName="">
        <DataTable
          columns={[
            {
              key: 'id',
              header: 'Hit',
              render: (row) => (
                <span className="font-mono text-xs text-text">{row.id}</span>
              ),
            },
            {
              key: 'subject',
              header: 'Subject',
              render: (row) => <span className="text-text">{row.subject}</span>,
            },
            { key: 'list', header: 'List' },
            { key: 'type', header: 'Match on' },
            {
              key: 'matchScore',
              header: 'Score',
              align: 'right',
              render: (row) => (
                <span
                  className={cn(
                    'tabular-nums',
                    row.matchScore >= 0.85 ? 'text-danger' : 'text-text-dim'
                  )}
                >
                  {row.matchScore.toFixed(2)}
                </span>
              ),
            },
            {
              key: 'at',
              header: 'Raised',
              render: (row) => formatRelative(row.at),
            },
            {
              key: 'status',
              header: 'Status',
              align: 'right',
              render: (row) => <Badge tone={TONES[row.status]}>{row.status}</Badge>,
            },
          ]}
          rows={screeningHits}
        />
      </Panel>
    </>
  )
}
