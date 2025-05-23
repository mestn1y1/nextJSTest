import React from 'react';
import Header from '../../components/header';
import Toolbar from '../../components/toolbar';
import SearchInput from '../../components/search-input';
import AddCompanyButton from '../../components/add-company-button';
import CompanyTable from '../../components/company-table';
import CompanyRow from '../../components/company-row';
import { CompanyStatus } from '../../../lib/api';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Company</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          company={{
            id: '1',
            title: 'string',
            description: 'string',
            status: CompanyStatus.Pending,
            joinedDate: '2023-10-01',
            hasPromotions: true,
            categoryId: 'Products',
            categoryTitle: 'string',
            countryId: '2',
            countryTitle: 'Ukraine',
          }}
        />
      </CompanyTable>
    </>
  );
}
