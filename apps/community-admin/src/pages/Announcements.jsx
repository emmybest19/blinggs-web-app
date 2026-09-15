import {
  Badge,
  Button,
  DataTable,
  PageHeader,
  Panel,
  formatDateTime,
} from '@blingg/admin-kit'

import { announcements } from '../data/community.data'

const TONES = { published: 'success', scheduled: 'info', draft: 'neutral' }

export default function Announcements() {
  return (
    <>
      <PageHeader
        title="Announcements"
        description="Messages pushed to users in-app, by push notification or by email."
        actions={
          <Button variant="primary" size="sm">
            New announcement
          </Button>
        }
      />

      <Panel bodyClassName="">
        <DataTable
          columns={[
            {
              key: 'id',
              header: 'ID',
              render: (row) => (
                <span className="font-mono text-xs">{row.id}</span>
              ),
            },
            {
              key: 'title',
              header: 'Title',
              render: (row) => <span className="text-text">{row.title}</span>,
            },
            { key: 'audience', header: 'Audience' },
            { key: 'channel', header: 'Channel' },
            {
              key: 'publishAt',
              header: 'Publish',
              render: (row) =>
                row.publishAt ? (
                  <span className="tabular-nums whitespace-nowrap">
                    {formatDateTime(row.publishAt)}
                  </span>
                ) : (
                  <span className="text-text-faint">—</span>
                ),
            },
            {
              key: 'status',
              header: 'Status',
              align: 'right',
              render: (row) => <Badge tone={TONES[row.status]}>{row.status}</Badge>,
            },
          ]}
          rows={announcements}
        />
      </Panel>
    </>
  )
}
