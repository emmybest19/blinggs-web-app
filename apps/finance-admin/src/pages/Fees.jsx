import { Badge, DataTable, PageHeader, Panel } from '@blingg/admin-kit'

import { feeRules } from '../data/finance.data'

export default function Fees() {
  return (
    <>
      <PageHeader
        title="Fees"
        description="What Blingg charges, and on what. Zero-fee peer transfers are a launch promise — changing that rule needs sign-off."
      />

      <Panel bodyClassName="">
        <DataTable
          columns={[
            {
              key: 'name',
              header: 'Rule',
              render: (row) => <span className="text-text">{row.name}</span>,
            },
            { key: 'basis', header: 'Basis' },
            {
              key: 'value',
              header: 'Value',
              render: (row) => (
                <span className="tabular-nums text-text">{row.value}</span>
              ),
            },
            { key: 'applies', header: 'Applies to' },
            {
              key: 'active',
              header: 'Status',
              align: 'right',
              render: (row) => (
                <Badge tone={row.active ? 'success' : 'neutral'}>
                  {row.active ? 'active' : 'inactive'}
                </Badge>
              ),
            },
          ]}
          rows={feeRules}
        />
      </Panel>
    </>
  )
}
