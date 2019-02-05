import React from 'react';
import { Link } from 'gatsby';

interface Props {
  currentPage: number;
  totalPages: number;
  url: string;
}

export class Pagination extends React.PureComponent<Props> {
  public render() {
    const { currentPage, totalPages, url } = this.props;
    const isFirst = currentPage === 1;
    const isLast = currentPage === totalPages;
    const prevPage = currentPage - 1 === 1 ? `/${url}/` : `/${url}/${(currentPage - 1).toString()}`;
    const nextPage = `/${url}/${(currentPage + 1).toString()}`;
    return totalPages > 1 ? (
      <div>
        {!isFirst && (
          <Link className="prev page-numbers" to={prevPage} rel="prev">
            ← Prev
          </Link>
        )}
        {Array.from({ length: totalPages }, (_, i) => (
          <Link
            className={currentPage === i + 1 ? 'page-numbers current' : 'page-numbers'}
            key={`pagination-number${i + 1}`}
            to={`/${url}/${i === 0 ? '' : i + 1}`}
          >
            {i + 1}
          </Link>
        ))}
        {!isLast && (
          <Link className="next page-numbers" to={nextPage} rel="next">
            Next →
          </Link>
        )}
      </div>
    ) : null;
  }
}
