import React from 'react';
import { getSummarySales } from '@/lib/api';
import SummaryTable from '../../../components/summary-table';
import DashboardCard from '../../../components/dashboard-card';
import SummaryTableCell from '../../../components/summary-table-cell';
import SummaryTableHeader from '../../../components/summary-table-header';

export interface PageProps {}
export default async function Page({}: PageProps) {
  const data = await getSummarySales();

  return (
    <DashboardCard label="Sales summary">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader align="center">Sold</SummaryTableHeader>
            <SummaryTableHeader align="center">Income</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ companyId, companyTitle, sold, income }) => (
          <tr key={companyId}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell align="center">{sold}</SummaryTableCell>
            <SummaryTableCell align="center">{`$${income}`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
