import { useState } from 'react'

import { Badge, PageHeader, Panel, cn } from '@blingg/admin-kit'

import { featureFlags } from '../data/platform.data'

export default function Flags() {
  // Local until the flags service exists — toggling is optimistic and resets
  // on reload.
  const [flags, setFlags] = useState(featureFlags)

  const toggle = (id) =>
    setFlags((current) =>
      current.map((flag) =>
        flag.id === id ? { ...flag, enabled: !flag.enabled } : flag
      )
    )

  return (
    <>
      <PageHeader
        title="Feature flags"
        description="Roll capabilities out gradually. Changes here apply to the mobile app, not to the consoles."
      />

      <Panel bodyClassName="divide-y divide-border">
        {flags.map((flag) => (
          <div
            key={flag.id}
            className="flex flex-wrap items-center justify-between gap-4 px-5 py-4 first:pt-0 last:pb-0"
          >
            <div className="min-w-0 flex-1">
              <p className="font-mono text-[13px] text-text">{flag.key}</p>
              <p className="mt-1 text-xs text-text-faint">{flag.description}</p>
            </div>

            <Badge tone={flag.enabled ? 'info' : 'neutral'}>{flag.rollout}</Badge>

            <button
              type="button"
              role="switch"
              aria-checked={flag.enabled}
              aria-label={`Toggle ${flag.key}`}
              onClick={() => toggle(flag.id)}
              className={cn(
                'relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200',
                flag.enabled ? 'bg-success/80' : 'bg-white/10'
              )}
            >
              <span
                className={cn(
                  'absolute top-0.5 size-5 rounded-full bg-white transition-transform duration-200',
                  flag.enabled ? 'translate-x-[22px]' : 'translate-x-0.5'
                )}
              />
            </button>
          </div>
        ))}
      </Panel>
    </>
  )
}
