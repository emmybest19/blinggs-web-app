import { Badge, PageHeader, Panel, formatDate } from '@blingg/admin-kit'

import { cases } from '../data/compliance.data'

const SEVERITY_TONES = { low: 'success', medium: 'warning', high: 'danger' }
const STATUS_TONES = { investigating: 'info', overdue: 'danger', closed: 'success' }

export default function Cases() {
  return (
    <>
      <PageHeader
        title="Cases"
        description="Investigations opened from a screening hit, a transaction alert or a support escalation."
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {cases.map((item) => (
          <Panel key={item.id}>
            <div className="mb-3 flex items-start justify-between gap-3">
              <span className="font-mono text-[11px] text-text-faint">
                {item.id}
              </span>
              <Badge tone={SEVERITY_TONES[item.severity]}>{item.severity}</Badge>
            </div>

            <h2 className="mb-4 text-sm leading-snug font-medium text-text">
              {item.subject}
            </h2>

            <dl className="flex flex-col gap-2 text-[13px]">
              <div className="flex justify-between gap-3">
                <dt className="text-text-faint">Owner</dt>
                <dd className="text-text-dim">{item.owner}</dd>
              </div>

              <div className="flex justify-between gap-3">
                <dt className="text-text-faint">Opened</dt>
                <dd className="text-text-dim tabular-nums">
                  {formatDate(item.opened)}
                </dd>
              </div>

              <div className="flex justify-between gap-3">
                <dt className="text-text-faint">Due</dt>
                <dd className="text-text-dim tabular-nums">
                  {formatDate(item.due)}
                </dd>
              </div>
            </dl>

            <div className="mt-4 border-t border-border pt-3">
              <Badge tone={STATUS_TONES[item.status]}>{item.status}</Badge>
            </div>
          </Panel>
        ))}
      </div>
    </>
  )
}
