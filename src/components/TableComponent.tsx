import { Link } from "react-router-dom";
import { Table, TableProps, Button } from "antd";

interface IProps extends Omit<TableProps<any>, 'title'> {
  title: string,
  loc: string,
}

const TableComponent = ({title, loc, ...rest}: IProps) => {
  return (
    <div className="table-div">
      <h3>{title}</h3>
      <Table {...rest} />
      <Link to={loc}><Button>Read More</Button></Link>
    </div>
  );
};

export default TableComponent;