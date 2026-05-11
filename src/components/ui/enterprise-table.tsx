'use client';

import React from 'react';
import { GlassPanel } from './glass-panel';
import { cn } from '@/lib/utils';

interface EnterpriseTableProps {
  headers: string[];
  data: any[];
  renderRow: (item: any, index: number) => React.ReactNode;
  title?: string;
  actions?: React.ReactNode;
}

export const EnterpriseTable = ({
  headers,
  data,
  renderRow,
  title,
  actions,
}: EnterpriseTableProps) => {
  return (
    <GlassPanel className="overflow-hidden">
      {(title || actions) && (
        <div className="flex items-center justify-between px-6 py-4 border-b border-brand-border bg-white/[0.02]">
          {title && <h3 className="text-sm font-bold text-white uppercase tracking-wider">{title}</h3>}
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-brand-navy/50">
              {headers.map((header, i) => (
                <th 
                  key={i} 
                  className="px-6 py-4 text-[10px] font-bold text-brand-slate uppercase tracking-widest border-b border-brand-border"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-border">
            {data.map((item, index) => (
              <tr 
                key={index} 
                className="hover:bg-white/[0.03] transition-colors group cursor-pointer"
              >
                {renderRow(item, index)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassPanel>
  );
};
