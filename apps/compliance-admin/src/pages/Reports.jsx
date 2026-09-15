import {
  Badge,
  Button,
  DataTable,
  PageHeader,
  Panel,
  formatDate,
} from '@blingg/admin-kit'

import { reports } from '../data/compliance.data'

const TONES = { filed: 'success', draft: 'warning', late: 'danger' }

export default function Reports() {
  return (
    <>
      <PageHeader
        title="Regulatory reports"
        description="Returns owed to the CBN and NFIU. Drafts must be filed before their due date."
      />

      <Panel bodyClassName="">
        <DataTable
          columns={[
            {
              key: 'id',
              header: 'Reference',
              render: (row) => (
                <span className="font-mono text-xs text-text">{row.id}</span>
              ),
            },
            {
              key: 'name',
              header: 'Report',
              render: (row) => <span className="text-text">{row.name}</span>,
            },
            { key: 'period', header: 'Period' },
            { key: 'regulator', header: 'Regulator' },
            {
              key: 'due',
              header: 'Due',
              render: (row) => (
                <span className="tabular-nums whitespace-nowrap">
                  {formatDate(row.due)}
                </span>
              ),
            },
            {
              key: 'status',
              header: 'Status',
              render: (row) => <Badge tone={TONES[row.status]}>{row.status}</Badge>,
            },
            {
              key: 'actions',
              header: '',
              align: 'right',
              render: (row) =>
                row.status === 'draft' ? (
                  <Button size="sm" variant="primary">
                    File
                  </Button>
                ) : (
                  <Button size="sm" variant="ghost">
                    Download
                  </Button>
                ),
            },
          ]}
          rows={reports}
        />
      </Panel>
    </>
  )
}
