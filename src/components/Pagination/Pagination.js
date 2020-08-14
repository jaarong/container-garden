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
      <div className="inline-block w-2/4 text-left">
        <Link className="text-xl text-secondary" rel="prev" to={hasPrevPage ? prevPagePath : '/'} >{PAGINATION.PREV_PAGE}</Link>
      </div>
      <div className="inline-block w-2/4 text-right">
        <Link className="text-info text-xl" rel="next" to={hasNextPage ? nextPagePath : '/'} >{PAGINATION.NEXT_PAGE}</Link>
      </div>
    </div>
  );
};

export default Pagination;
