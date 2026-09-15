import { cn } from '../lib/cn'
import EmptyState from './EmptyState'

const ALIGN = {
  left: 'text-left',
  right: 'text-right',
  center: 'text-center',
}

/**
 * @param columns {{ key, header, align?, width?, render? }[]}
 *   `render(row)` takes over the cell when a plain value is not enough.
 * @param rowKey  picks a stable key; defaults to `row.id`.
 */
export default function DataTable({ columns, rows, rowKey = (row) => row.id, empty }) {
  if (!rows.length) {
    return empty ?? <EmptyState description="No records match this view yet." />
  }

  return (
    // Tables are the one thing allowed to scroll sideways on small screens.
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse">
        <thead>
          <tr className="border-b border-border">
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                style={column.width ? { width: column.width } : undefined}
                className={cn(
                  'px-5 py-3 text-[11px] font-medium tracking-wide text-text-faint uppercase whitespace-nowrap',
                  ALIGN[column.align ?? 'left']
                )}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr
              key={rowKey(row)}
              className="border-b border-border/60 transition-colors last:border-b-0 hover:bg-surface-hover"
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={cn(
                    'px-5 py-3.5 text-[13px] text-text-dim',
                    ALIGN[column.align ?? 'left']
                  )}
                >
                  {column.render ? column.render(row) : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
