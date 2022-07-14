import { Link } from "react-router-dom";

export const Pagination = (props) => {
  const { total, page, onChangePage } = props;
  const showPaginations = (total) => {
    const result = []; let index = 1;
    while (index <= total) {
      result.push(<Link key={index} id={index} className={`pagi${page===index?" active":""}`} to=""
        onClick={(event)=>{event.preventDefault(); onChangePage(event.target.id)}}
      >{index}</Link>); index++;
    }
    return result;
  }
  return (
    <div className="pagination pagination-1 mb-4 d-flex justify-content-center bd-highlight">
      <Link href="" className={`previous${page===1?" pagi-disabled":""}`} to=""
        onClick={(event)=>{event.preventDefault(); onChangePage(page-1)}}
      >«</Link>
      {showPaginations(total)}
      <Link href="" className={`next${page===total?" pagi-disabled":""}`} to=""
        onClick={(event)=>{event.preventDefault(); onChangePage(page+1)}}
      >»</Link>
    </div>
  );
};
