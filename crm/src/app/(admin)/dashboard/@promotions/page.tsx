import React from 'react';
import { getPromotions } from '@/lib/api';
import SummaryTable from '../../../components/summary-table';
import DashboardCard from '../../../components/dashboard-card';
import SummaryTableCell from '../../../components/summary-table-cell';
import SummaryTableHeader from '../../../components/summary-table-header';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getPromotions();

  return (
    <DashboardCard label="Promotions">
      <SummaryTable
        headers={
          <>
            <SummaryTableHeader>Company</SummaryTableHeader>
            <SummaryTableHeader>Name</SummaryTableHeader>
            <SummaryTableHeader align="center">%</SummaryTableHeader>
          </>
        }
      >
        {data.map(({ id, title, companyTitle, discount }, index) => (
          <tr key={`${id}-${index}`}>
            <SummaryTableCell>{companyTitle}</SummaryTableCell>
            <SummaryTableCell>{title}</SummaryTableCell>
            <SummaryTableCell align="center">{`-${discount}`}</SummaryTableCell>
          </tr>
        ))}
      </SummaryTable>
    </DashboardCard>
  );
}
