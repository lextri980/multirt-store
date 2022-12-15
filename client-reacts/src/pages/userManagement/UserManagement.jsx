import SearchIcon from "@mui/icons-material/Search";
import { Input, Pagination } from "@nextui-org/react";
import Button from "components/common/button/Button";
import { SearchSendingIcon } from "components/common/icon/Icon";
import AnimatedLayout from "components/layouts/animatedLayout/AnimatedLayout";
import { useCreateQuery, useRoute } from "hooks/useRoute";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useOutletContext } from "react-router";
import { gettingUser } from "store/actions/user.action";
import { color } from "themes/colors";
import CardType from "./component/CardType";
import TableType from "./component/TableType";
import { UserManagementContainer } from "./UserManagement.style";

function UserManagement() {
  //* Redux hooks
  const dispatch = useDispatch();
  const { pageInfo } = useSelector((state) => state.user);

  //* Declare global variables

  //* Local state
  const [search, setSearch] = useState("");
  const [page, setPage] = useState('1');

  //* Hooks
  const [switchLayout] = useOutletContext();
  const navigate = useNavigate();
  const renderQuery = useCreateQuery({ search });
  const renderPage = useCreateQuery({ page });
  const { pathname, query } = useRoute();

  //* Effect
  useEffect(() => {
    dispatch(gettingUser(query));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [switchLayout, query]);
  //* Other

  //@ (handleSearch): Common search
  const handleSearch = () => {
    navigate(`${pathname}${renderQuery}`);
  };

  //@ (handleChangePage): Change page
  const handleChangePage = (data) => {
    console.log(data, typeof data)
    console.log(page, typeof page)
    setPage(data.toString());
    navigate(`${pathname}${renderPage}`);
  }

  //! Condition rendering ------------------------------------------------
  let body;
  if (switchLayout === true) {
    body = <CardType />;
  } else {
    body = <TableType />;
  }

  //! Condition rendering ------------------------------------------------
  return (
    <AnimatedLayout>
      <UserManagementContainer>
        <div className="search-section">
          <Input
            className="search-input"
            clearable
            bordered
            color="primary"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            contentRightStyling={false}
            placeholder="Search..."
            contentLeft={<SearchIcon className="search-icon" />}
            contentRight={
              <div style={{ padding: "0 5px" }} onClick={handleSearch}>
                <SearchSendingIcon size="20" color={color.blue} />
              </div>
            }
          />
          <div className="btn-search">
            <Button width="100%">Advanced search</Button>
          </div>
          <Pagination color='primary' size='sm' total={pageInfo?.totalPage} onChange={handleChangePage} />
        </div>
        {body}
      </UserManagementContainer>
    </AnimatedLayout>
  );
}

export default UserManagement;
