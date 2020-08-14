// @flow strict
import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'gatsby';
import { PAGINATION } from '../../constants';

type Props = {
  prevPagePath: string,
  nextPagePath: string,
  hasNextPage: boolean,
  hasPrevPage: boolean
};

const Pagination = ({
  prevPagePath,
  nextPagePath,
  hasNextPage,
  hasPrevPage
}: Props) => {

  return (
    <div className="">
      <div className="">
        <Link rel="prev" to={hasPrevPage ? prevPagePath : '/'} >{PAGINATION.PREV_PAGE}</Link>
      </div>
      <div className="">
        <Link rel="next" to={hasNextPage ? nextPagePath : '/'} >{PAGINATION.NEXT_PAGE}</Link>
      </div>
    </div>
  );
};

export default Pagination;
