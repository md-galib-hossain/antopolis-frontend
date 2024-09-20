import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PaginationProps = {
  pageCount: number;
  page: number;
  handleChange: (value: number) => void; 
};

const MyPagination = ({ pageCount, page, handleChange }: PaginationProps) => {
  if (pageCount <= 0) return null;

  const pageRange = 2;

  const getPageNumbers = () => {
    const startPage = Math.max(page - pageRange, 1);
    const endPage = Math.min(page + pageRange, pageCount);
    const pages: number[] = [];

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pages = getPageNumbers();

  const handlePreviousClick = (e: React.MouseEvent) => {
    if (page > 1) {
      handleChange(page - 1);
    } else {
      e.preventDefault();
    }
  };

  const handleNextClick = (e: React.MouseEvent) => {
    if (page < pageCount) {
      handleChange(page + 1);
    } else {
      e.preventDefault();
    }
  };

  return (
    <Pagination className="bg-transparent border border-gray-700 rounded-md">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={handlePreviousClick}
            className={`${page === 1 ? "opacity-50 pointer-events-none" : ""} rounded text-white`}
          />
        </PaginationItem>

        {pages[0] > 2 && (
          <>
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={() => handleChange(1)}
                className="rounded text-white"
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis className="rounded text-white" />
            </PaginationItem>
          </>
        )}

        {pages.map((pg) => (
          <PaginationItem key={pg}>
            <PaginationLink
              href="#"
              onClick={() => handleChange(pg)}
              isActive={pg === page}
              className={`rounded ${pg === page ? "bg-blue-500 text-white" : "text-gray-300"}`}
            >
              {pg}
            </PaginationLink>
          </PaginationItem>
        ))}

        {pages[pages.length - 1] < pageCount - 1 && (
          <>
            <PaginationItem>
              <PaginationEllipsis className="rounded text-white" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={() => handleChange(pageCount)}
                className="rounded text-white"
              >
                {pageCount}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={handleNextClick}
            className={`${page === pageCount ? "opacity-50 pointer-events-none" : ""} rounded text-white`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default MyPagination;
