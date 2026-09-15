import {
  Badge,
  Button,
  DataTable,
  PageHeader,
  Panel,
  formatRelative,
} from '@blingg/admin-kit'

import { kycQueue } from '../data/compliance.data'

const RISK_TONES = { low: 'success', medium: 'warning', high: 'danger' }
const STATUS_TONES = { pending: 'warning', approved: 'success', rejected: 'danger' }

export default function KycQueue() {
  return (
    <>
      <PageHeader
        title="KYC queue"
        description="Identity submissions awaiting a decision. Tier 3 unlocks the highest transfer limits and always needs a manual review."
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
              header: 'Applicant',
              render: (row) => <span className="text-text">{row.name}</span>,
            },
            { key: 'tier', header: 'Tier' },
            { key: 'document', header: 'Document' },
            {
              key: 'submitted',
              header: 'Submitted',
              render: (row) => formatRelative(row.submitted),
            },
            {
              key: 'risk',
              header: 'Risk',
              render: (row) => <Badge tone={RISK_TONES[row.risk]}>{row.risk}</Badge>,
            },
            {
              key: 'status',
              header: 'Status',
              align: 'right',
              render: (row) =>
                row.status === 'pending' ? (
                  <span className="flex justify-end gap-2">
                    <Button size="sm" variant="primary">
                      Approve
                    </Button>
                    <Button size="sm" variant="danger">
                      Reject
                    </Button>
                  </span>
                ) : (
                  <Badge tone={STATUS_TONES[row.status]}>{row.status}</Badge>
                ),
            },
          ]}
          rows={kycQueue}
        />
      </Panel>
    </>
  )
}
