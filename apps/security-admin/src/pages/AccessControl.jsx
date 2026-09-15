import {
  Badge,
  Button,
  DataTable,
  PageHeader,
  Panel,
  formatDate,
} from '@blingg/admin-kit'

import { accessGrants } from '../data/security.data'

const PRIVILEGE_TONES = {
  owner: 'danger',
  operator: 'warning',
  agent: 'neutral',
  service: 'info',
}

/** Credentials older than this are surfaced as overdue for rotation. */
const ROTATION_DAYS = 90

// Module scope, not the component body: reading the clock during render is
// impure, and the rotation window does not need to be re-evaluated per render.
const isStale = (date) =>
  (Date.now() - new Date(date).getTime()) / 86_400_000 > ROTATION_DAYS

export default function AccessControl() {
  const stale = accessGrants.filter((grant) => isStale(grant.lastRotated))
  const withoutMfa = accessGrants.filter((grant) => !grant.mfa)

  return (
    <>
      <PageHeader
        title="Access control"
        description="Who can sign into which console. Every console is a separate app, so access is granted per surface rather than platform-wide."
      />

      {(stale.length > 0 || withoutMfa.length > 0) && (
        <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {withoutMfa.length > 0 && (
            <div className="rounded-xl border border-danger/30 bg-danger/10 px-5 py-4">
              <p className="text-sm font-medium text-danger">
                {withoutMfa.length} accounts without MFA
              </p>
              <p className="mt-1 text-xs text-text-dim">
                Enforce MFA before these accounts are used against production.
              </p>
            </div>
          )}

          {stale.length > 0 && (
            <div className="rounded-xl border border-warning/30 bg-warning/10 px-5 py-4">
              <p className="text-sm font-medium text-warning">
                {stale.length} credentials overdue for rotation
              </p>
              <p className="mt-1 text-xs text-text-dim">
                Last rotated more than {ROTATION_DAYS} days ago.
              </p>
            </div>
          )}
        </div>
      )}

      <Panel bodyClassName="">
        <DataTable
          columns={[
            {
              key: 'account',
              header: 'Account',
              render: (row) => <span className="text-text">{row.account}</span>,
            },
            {
              key: 'consoles',
              header: 'Console access',
              render: (row) => (
                <span className="flex flex-wrap gap-1.5">
                  {row.consoles.map((name) => (
                    <Badge key={name}>{name}</Badge>
                  ))}
                </span>
              ),
            },
            {
              key: 'privilege',
              header: 'Privilege',
              render: (row) => (
                <Badge tone={PRIVILEGE_TONES[row.privilege]}>
                  {row.privilege}
                </Badge>
              ),
            },
            {
              key: 'mfa',
              header: 'MFA',
              render: (row) => (
                <Badge tone={row.mfa ? 'success' : 'danger'}>
                  {row.mfa ? 'enabled' : 'missing'}
                </Badge>
              ),
            },
            {
              key: 'lastRotated',
              header: 'Last rotated',
              render: (row) => (
                <span
                  className={
                    isStale(row.lastRotated)
                      ? 'tabular-nums text-warning'
                      : 'tabular-nums'
                  }
                >
                  {formatDate(row.lastRotated)}
                </span>
              ),
            },
            {
              key: 'actions',
              header: '',
              align: 'right',
              render: () => (
                <Button size="sm" variant="danger">
                  Revoke
                </Button>
              ),
            },
          ]}
          rows={accessGrants}
        />
      </Panel>
    </>
  )
}
