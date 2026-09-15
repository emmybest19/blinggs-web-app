import {
  Badge,
  Button,
  PageHeader,
  Panel,
  formatDateTime,
  formatRelative,
} from '@blingg/admin-kit'

import { alerts } from '../data/security.data'

const SEVERITY_TONES = {
  low: 'neutral',
  medium: 'warning',
  high: 'danger',
  critical: 'danger',
}

export default function Alerts() {
  return (
    <>
      <PageHeader
        title="Threat alerts"
        description="Signals from the WAF, the fraud engine, the identity service and infrastructure monitors."
      />

      <div className="flex flex-col gap-4">
        {alerts.map((alert) => (
          <Panel
            key={alert.id}
            className={alert.status === 'open' ? 'border-danger/25' : undefined}
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[11px] text-text-faint">
                    {alert.id}
                  </span>
                  <Badge tone={SEVERITY_TONES[alert.severity]}>
                    {alert.severity}
                  </Badge>
                  <Badge tone={alert.status === 'open' ? 'warning' : 'success'}>
                    {alert.status}
                  </Badge>
                </div>

                <h2 className="text-sm font-medium text-text">{alert.title}</h2>

                <p className="mt-1.5 text-xs text-text-dim">
                  <span className="text-text-faint">{alert.source}</span> ·{' '}
                  {alert.signals}
                </p>

                <p className="mt-2 text-[11px] text-text-faint tabular-nums">
                  {formatDateTime(alert.at)} · {formatRelative(alert.at)}
                </p>
              </div>

              {alert.status === 'open' && (
                <div className="flex shrink-0 gap-2">
                  <Button size="sm" variant="secondary">
                    Assign
                  </Button>
                  <Button size="sm" variant="primary">
                    Resolve
                  </Button>
                </div>
              )}
            </div>
          </Panel>
        ))}
      </div>
    </>
  )
}
