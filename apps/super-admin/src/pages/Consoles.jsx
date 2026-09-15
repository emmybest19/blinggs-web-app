import { Badge, PageHeader, Panel } from '@blingg/admin-kit'

import { consoles } from '../data/platform.data'

const STATUS_TONES = { healthy: 'success', degraded: 'warning', down: 'danger' }

export default function Consoles() {
  return (
    <>
      <PageHeader
        title="Consoles"
        description="Each console ships as its own application and deploys independently, so access to one is never access to another."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {consoles.map((item) => (
          <Panel key={item.id}>
            <div className="mb-3 flex items-start justify-between gap-3">
              <h2 className="text-sm font-semibold text-text">{item.name}</h2>
              <Badge tone={STATUS_TONES[item.status]}>{item.status}</Badge>
            </div>

            <dl className="flex flex-col gap-2 text-[13px]">
              <div className="flex justify-between gap-3">
                <dt className="text-text-faint">Owning team</dt>
                <dd className="text-text-dim">{item.owner}</dd>
              </div>

              <div className="flex justify-between gap-3">
                <dt className="text-text-faint">Staff with access</dt>
                <dd className="text-text-dim tabular-nums">{item.staff}</dd>
              </div>

              <div className="flex justify-between gap-3">
                <dt className="text-text-faint">Dev port</dt>
                <dd className="font-mono text-text-dim tabular-nums">
                  {item.port}
                </dd>
              </div>
            </dl>
          </Panel>
        ))}
      </div>
    </>
  )
}
