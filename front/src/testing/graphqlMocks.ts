import { getOperationName } from '@apollo/client/utilities';
import { graphql } from 'msw';

import { CREATE_EVENT } from '@/analytics/services';
import { GET_CLIENT_CONFIG } from '@/client-config/queries';
import { GET_COMPANIES } from '@/companies/services';
import { GET_PEOPLE, UPDATE_PERSON } from '@/people/services';
import { GET_PIPELINES } from '@/pipeline-progress/queries';
import {
  SEARCH_COMPANY_QUERY,
  SEARCH_USER_QUERY,
} from '@/search/services/search';
import { GET_CURRENT_USER } from '@/users/queries';
import {
  GetCompaniesQuery,
  GetPeopleQuery,
  SearchCompanyQuery,
  SearchUserQuery,
} from '~/generated/graphql';

import { mockedCompaniesData } from './mock-data/companies';
import { mockedPeopleData } from './mock-data/people';
import { mockedPipelinesData } from './mock-data/pipelines';
import { mockedUsersData } from './mock-data/users';
import { filterAndSortData, updateOneFromData } from './mock-data';

export const graphqlMocks = [
  graphql.query(getOperationName(GET_COMPANIES) ?? '', (req, res, ctx) => {
    const returnedMockedData = filterAndSortData<
      GetCompaniesQuery['companies'][0]
    >(
      mockedCompaniesData,
      req.variables.where,
      req.variables.orderBy,
      req.variables.limit,
    );
    return res(
      ctx.data({
        companies: returnedMockedData,
      }),
    );
  }),
  graphql.query(
    getOperationName(SEARCH_COMPANY_QUERY) ?? '',
    (req, res, ctx) => {
      const returnedMockedData = filterAndSortData<
        SearchCompanyQuery['searchResults'][0]
      >(
        mockedCompaniesData,
        req.variables.where,
        Array.isArray(req.variables.orderBy)
          ? req.variables.orderBy
          : [req.variables.orderBy],
        req.variables.limit,
      );
      return res(
        ctx.data({
          searchResults: returnedMockedData,
        }),
      );
    },
  ),
  graphql.query(getOperationName(SEARCH_USER_QUERY) ?? '', (req, res, ctx) => {
    const returnedMockedData = filterAndSortData<
      SearchUserQuery['searchResults'][0]
    >(
      mockedUsersData,
      req.variables.where,
      req.variables.orderBy,
      req.variables.limit,
    );
    return res(
      ctx.data({
        searchResults: returnedMockedData,
      }),
    );
  }),
  graphql.query(getOperationName(GET_CURRENT_USER) ?? '', (req, res, ctx) => {
    return res(
      ctx.data({
        currentUser: mockedUsersData[0],
      }),
    );
  }),
  graphql.query(getOperationName(GET_PEOPLE) ?? '', (req, res, ctx) => {
    const returnedMockedData = filterAndSortData<GetPeopleQuery['people'][0]>(
      mockedPeopleData,
      req.variables.where,
      req.variables.orderBy,
      req.variables.limit,
    );
    return res(
      ctx.data({
        people: returnedMockedData,
      }),
    );
  }),
  graphql.mutation(getOperationName(UPDATE_PERSON) ?? '', (req, res, ctx) => {
    return res(
      ctx.data({
        updateOnePerson: updateOneFromData(
          mockedPeopleData,
          req.variables.id,
          req.variables,
        ),
      }),
    );
  }),
  graphql.query(getOperationName(GET_PIPELINES) ?? '', (req, res, ctx) => {
    return res(
      ctx.data({
        findManyPipeline: mockedPipelinesData,
      }),
    );
  }),
  graphql.mutation(getOperationName(CREATE_EVENT) ?? '', (req, res, ctx) => {
    return res(
      ctx.data({
        createEvent: { success: 1, __typename: 'Event' },
      }),
    );
  }),
  graphql.query(getOperationName(GET_CLIENT_CONFIG) ?? '', (req, res, ctx) => {
    return res(
      ctx.data({
        clientConfig: {
          demoMode: true,
          debugMode: false,
          authProviders: { google: true, password: true, magicLink: false },
          telemetry: { enabled: false, anonymizationEnabled: true },
        },
      }),
    );
  }),
];
