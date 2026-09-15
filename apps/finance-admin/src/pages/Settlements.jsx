import {
  Badge,
  Button,
  DataTable,
  PageHeader,
  Panel,
  formatDateTime,
  formatNaira,
} from '@blingg/admin-kit'

import { settlementBatches } from '../data/finance.data'

const TONES = { settled: 'success', 'awaiting approval': 'warning', rejected: 'danger' }

export default function Settlements() {
  return (
    <>
      <PageHeader
        title="Settlements"
        description="Batches are grouped per bank and released at the 14:00 cut-off. Approval is required above ₦50M."
      />

      <Panel bodyClassName="">
        <DataTable
          columns={[
            {
              key: 'id',
              header: 'Batch',
              render: (row) => (
                <span className="font-mono text-xs text-text">{row.id}</span>
              ),
            },
            { key: 'bank', header: 'Bank' },
            {
              key: 'count',
              header: 'Transfers',
              align: 'right',
              render: (row) => (
                <span className="tabular-nums">{row.count.toLocaleString()}</span>
              ),
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
              key: 'cutoff',
              header: 'Cut-off',
              render: (row) => (
                <span className="whitespace-nowrap tabular-nums">
                  {formatDateTime(row.cutoff)}
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
                row.status === 'awaiting approval' ? (
                  <Button size="sm" variant="primary">
                    Approve
                  </Button>
                ) : (
                  <span className="text-text-faint">—</span>
                ),
            },
          ]}
          rows={settlementBatches}
        />
      </Panel>
    </>
  )
}
