import SearchIcon from "@mui/icons-material/Search";
import { Card, Input, Pagination } from "@nextui-org/react";
import Button from "components/common/button/Button";
import { SearchSendingIcon } from "components/common/icon/Icon";
import AnimatedLayout from "components/layouts/animatedLayout/AnimatedLayout";
import { useCreateQuery, useRoute } from "hooks/useRoute";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getUserRequest } from "store/actions/user.action";
import { color } from "themes/colors";
import { titlePage } from "utils/titlePage.util";
import TableType from "./component/TableType";
import { UserManagementContainer } from "./User.style";

function User() {
  titlePage("Multirt | Manage user");
  //* Redux hooks --------------------------------------------------------------------------------------------
  const dispatch = useDispatch();
  const { pageInfo } = useSelector((state) => state.user);

  //* Declare global variables -------------------------------------------------------------------------------

  //* Local state --------------------------------------------------------------------------------------------
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    search: "",
  });

  console.log("render");
  //* Hooks --------------------------------------------------------------------------------------------------
  const navigate = useNavigate();
  const searchQueryUrl = useCreateQuery(searchQuery);
  const { pathname, query } = useRoute();

  //* Effects --------------------------------------------------------------------------------------------------
  //? Effect to get user list
  useEffect(() => {
    dispatch(getUserRequest(query));
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  //? Effect to navigate query when change pagination
  useEffect(() => {
    navigateQuery();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery.page]);

  //@ (navigateQuery): Change query -----------------------------------
  const navigateQuery = () => {
    navigate(`${pathname}${searchQueryUrl}`);
  };

  //@ (handleSearch): Common search -----------------------------------
  const handleSearch = () => {
    setSearchQuery({ ...searchQuery, page: 1 });
    navigateQuery();
  };

  //!! Return section ------------------------------------------------------------------------------------------------------
  return (
    <AnimatedLayout>
      <UserManagementContainer>
        <div className="search-section">
          <h3 className="user-title">User management</h3>
          <Input
            className="search-input"
            clearable
            bordered
            color="primary"
            value={searchQuery.search}
            onChange={(e) =>
              setSearchQuery({
                ...searchQuery,
                search: e.target.value,
              })
            }
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
          <Pagination
            color="primary"
            size="sm"
            page={searchQuery.page}
            total={pageInfo?.totalPage}
            onChange={(e) =>
              setSearchQuery({
                ...searchQuery,
                page: e,
              })
            }
            className="mb-20"
          />
          <div className="user-information">
            <Card variant="bordered">
              <Card.Body>
                <span className="key">User number:</span>
                <span className="value">{pageInfo?.totalData}</span>
              </Card.Body>
            </Card>
          </div>
        </div>
        <TableType />
      </UserManagementContainer>
    </AnimatedLayout>
  );
}

export default User;