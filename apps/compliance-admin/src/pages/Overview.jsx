import {
  Badge,
  DataTable,
  PageHeader,
  Panel,
  StatGrid,
  formatRelative,
} from '@blingg/admin-kit'

import { cases, complianceStats, kycQueue } from '../data/compliance.data'

const RISK_TONES = { low: 'success', medium: 'warning', high: 'danger' }
const CASE_TONES = { investigating: 'info', overdue: 'danger', closed: 'success' }

export default function Overview() {
  const pending = kycQueue.filter((row) => row.status === 'pending')

  return (
    <>
      <PageHeader
        title="Compliance overview"
        description="Onboarding review, sanctions screening and open investigations."
      />

      <StatGrid stats={complianceStats} />

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <Panel
          title="KYC awaiting review"
          description={`${pending.length} submissions in the queue.`}
          bodyClassName=""
        >
          <DataTable
            columns={[
              {
                key: 'name',
                header: 'Applicant',
                render: (row) => (
                  <span>
                    <span className="block text-text">{row.name}</span>
                    <span className="block font-mono text-[11px] text-text-faint">
                      {row.id}
                    </span>
                  </span>
                ),
              },
              { key: 'tier', header: 'Tier' },
              {
                key: 'submitted',
                header: 'Waiting',
                render: (row) => formatRelative(row.submitted),
              },
              {
                key: 'risk',
                header: 'Risk',
                align: 'right',
                render: (row) => (
                  <Badge tone={RISK_TONES[row.risk]}>{row.risk}</Badge>
                ),
              },
            ]}
            rows={pending}
          />
        </Panel>

        <Panel
          title="Open cases"
          description="Investigations that have not yet been closed out."
          bodyClassName=""
        >
          <DataTable
            columns={[
              {
                key: 'subject',
                header: 'Case',
                render: (row) => (
                  <span>
                    <span className="block text-text">{row.subject}</span>
                    <span className="block font-mono text-[11px] text-text-faint">
                      {row.id}
                    </span>
                  </span>
                ),
              },
              { key: 'owner', header: 'Owner' },
              {
                key: 'status',
                header: 'Status',
                align: 'right',
                render: (row) => (
                  <Badge tone={CASE_TONES[row.status]}>{row.status}</Badge>
                ),
              },
            ]}
            rows={cases}
          />
        </Panel>
      </div>
    </>
  )
}
