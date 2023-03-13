import React from 'react';
import { useParams } from 'react-router-dom';

import { Page } from 'app/core/components/Page/Page';
import { getNavModel } from 'app/core/selectors/navModel';
import { getDataSourceLoadingNav } from 'app/features/datasources/state';
import { StoreState, useSelector } from 'app/types';

import { DataSourceCacheUpgrade } from './DataSourceCacheUpgrade';

export const DataSourceCacheUpgradePage = () => {
  const { uid } = useParams<{ uid: string }>();
  const dataSourceLoadingNav = getDataSourceLoadingNav('cache');
  const navIndex = useSelector((state: StoreState) => state.navIndex);
  const navModel = getNavModel(navIndex, `datasource-cache-${uid}`, dataSourceLoadingNav);

  return (
    <Page navId="datasources" pageNav={navModel.main}>
      <Page.Contents>
        <DataSourceCacheUpgrade uid={uid} />
      </Page.Contents>
    </Page>
  );
};
