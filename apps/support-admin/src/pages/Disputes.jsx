import {
  Badge,
  Button,
  DataTable,
  PageHeader,
  Panel,
  formatNaira,
  formatRelative,
} from '@blingg/admin-kit'

import { disputes } from '../data/support.data'

const TONES = { investigating: 'warning', refunded: 'success', rejected: 'danger' }

export default function Disputes() {
  return (
    <>
      <PageHeader
        title="Disputes"
        description="Contested transactions. Funds stay held until the dispute closes; refunds above ₦100,000 need finance approval."
      />

      <Panel bodyClassName="">
        <DataTable
          columns={[
            {
              key: 'id',
              header: 'Dispute',
              render: (row) => (
                <span className="font-mono text-xs text-text">{row.id}</span>
              ),
            },
            {
              key: 'reference',
              header: 'Transaction',
              render: (row) => (
                <span className="font-mono text-xs">{row.reference}</span>
              ),
            },
            { key: 'user', header: 'Customer' },
            {
              key: 'reason',
              header: 'Reason',
              render: (row) => <span className="text-text">{row.reason}</span>,
            },
            {
              key: 'amount',
              header: 'Amount',
              align: 'right',
              render: (row) => (
                <span className="tabular-nums text-text">
                  {formatNaira(row.amount)}
                </span>
              ),
            },
            {
              key: 'opened',
              header: 'Opened',
              render: (row) => formatRelative(row.opened),
            },
            {
              key: 'status',
              header: 'Status',
              align: 'right',
              render: (row) =>
                row.status === 'investigating' ? (
                  <span className="flex justify-end gap-2">
                    <Button size="sm" variant="primary">
                      Refund
                    </Button>
                    <Button size="sm" variant="secondary">
                      Reject
                    </Button>
                  </span>
                ) : (
                  <Badge tone={TONES[row.status]}>{row.status}</Badge>
                ),
            },
          ]}
          rows={disputes}
        />
      </Panel>
    </>
  )
}
