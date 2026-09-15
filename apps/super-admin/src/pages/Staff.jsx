import {
  Badge,
  Button,
  DataTable,
  PageHeader,
  Panel,
  formatRelative,
} from '@blingg/admin-kit'

import { staffMembers } from '../data/platform.data'

const STATUS_TONES = { active: 'success', suspended: 'danger', invited: 'info' }

export default function Staff() {
  return (
    <>
      <PageHeader
        title="Staff & roles"
        description="Who works at Blingg and which consoles they can sign into."
        actions={<Button variant="primary" size="sm">Invite staff</Button>}
      />

      <Panel bodyClassName="">
        <DataTable
          columns={[
            {
              key: 'name',
              header: 'Name',
              render: (row) => (
                <span>
                  <span className="block text-text">{row.name}</span>
                  <span className="block text-[11px] text-text-faint">
                    {row.email}
                  </span>
                </span>
              ),
            },
            { key: 'role', header: 'Role' },
            {
              key: 'consoles',
              header: 'Console access',
              render: (row) => (
                <span className="flex flex-wrap gap-1.5">
                  {row.consoles.map((consoleName) => (
                    <Badge key={consoleName}>{consoleName}</Badge>
                  ))}
                </span>
              ),
            },
            {
              key: 'lastActive',
              header: 'Last active',
              render: (row) =>
                row.lastActive ? formatRelative(row.lastActive) : '—',
            },
            {
              key: 'status',
              header: 'Status',
              align: 'right',
              render: (row) => (
                <Badge tone={STATUS_TONES[row.status]}>{row.status}</Badge>
              ),
            },
          ]}
          rows={staffMembers}
        />
      </Panel>
    </>
  )
}
