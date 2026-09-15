import { useState } from 'react'

import {
  Badge,
  Button,
  EmptyState,
  PageHeader,
  Panel,
  formatRelative,
} from '@blingg/admin-kit'

import { moderationQueue } from '../data/community.data'

const SEVERITY_TONES = { low: 'neutral', medium: 'warning', high: 'danger' }

export default function Moderation() {
  // Acting on an item drops it from the local queue. The real console will
  // write the decision through the API and refetch.
  const [queue, setQueue] = useState(moderationQueue)

  const resolve = (id) =>
    setQueue((current) => current.filter((item) => item.id !== id))

  if (!queue.length) {
    return (
      <>
        <PageHeader title="Moderation" description="Reports from the community." />
        <Panel>
          <EmptyState
            title="Queue cleared"
            description="Every reported item has been actioned. Nice work."
          />
        </Panel>
      </>
    )
  }

  return (
    <>
      <PageHeader
        title="Moderation"
        description={`${queue.length} reported items. Guaranteed-returns claims and off-platform trade solicitations are the two highest-risk patterns.`}
      />

      <div className="flex flex-col gap-4">
        {queue.map((item) => (
          <Panel key={item.id}>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[11px] text-text-faint">
                    {item.id}
                  </span>
                  <Badge>{item.type}</Badge>
                  <Badge tone={SEVERITY_TONES[item.severity]}>
                    {item.severity}
                  </Badge>
                </div>

                <p className="text-sm font-medium text-text">{item.target}</p>

                <p className="mt-1 text-xs leading-relaxed text-text-dim">
                  {item.reason}
                </p>

                <p className="mt-2 text-[11px] text-text-faint">
                  {item.reports} {item.reports === 1 ? 'report' : 'reports'} ·
                  raised {formatRelative(item.at)}
                </p>
              </div>

              <div className="flex shrink-0 gap-2">
                <Button size="sm" variant="secondary" onClick={() => resolve(item.id)}>
                  Dismiss
                </Button>
                <Button size="sm" variant="danger" onClick={() => resolve(item.id)}>
                  Take down
                </Button>
              </div>
            </div>
          </Panel>
        ))}
      </div>
    </>
  )
}
