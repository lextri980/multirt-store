import SearchIcon from "@mui/icons-material/Search";
import { Card, Input, Pagination } from "@nextui-org/react";
import Button from "components/common/button/Button";
import { SearchSendingIcon } from "components/common/icon/Icon";
import Select from "components/common/select/Select";
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
  const { pageInfo, users } = useSelector((state) => state.user);

  //* Declare global variables -------------------------------------------------------------------------------
  const sizeOption = [
    { value: 10, label: "10" },
    { value: 25, label: "25" },
    { value: 50, label: "50" },
  ];

  //* Local state --------------------------------------------------------------------------------------------
  const [searchQuery, setSearchQuery] = useState({
    page: 1,
    size: 10,
    search: "",
  });
  const [recordSize, setRecordSize] = useState(10);

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

  //@ (navigateQuery): Change query -----------------------------------
  const navigateQuery = () => {
    navigate(`${pathname}${searchQueryUrl}`);
  };

  //? Effect to navigate query when change pagination
  useEffect(() => {
    navigateQuery();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery.page, searchQuery.size]);

  //@ (handleSearch): Common search -----------------------------------
  const handleSearch = () => {
    setSearchQuery({ ...searchQuery, page: 1 });
    navigateQuery();
  };

  console.log(searchQuery);

  //!! Return section ------------------------------------------------------------------------------------------------------
  return (
    <AnimatedLayout>
      <UserManagementContainer>
        <div className="search-section">
          <h3 className="user-title">User management</h3>
          <Input
            className="search-input mb-20"
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
          <Select
            label="Record size"
            options={sizeOption}
            clearable={false}
            onChange={(_, selected) => {
              setSearchQuery({
                ...searchQuery,
                size: selected.value ? selected.value : 10,
              });
            }}
          />
          <div className="btn-search">
            <Button width="100%">Advanced search</Button>
          </div>
          {pageInfo?.totalData > 0 ? (
            <Pagination
              className="mb-20"
              color="primary"
              size="sm"
              total={pageInfo?.totalPage}
              onChange={(e) => {
                setSearchQuery({
                  ...searchQuery,
                  page: e,
                });
              }}
            />
          ) : (
            ""
          )}

          <div className="user-information">
            <Card variant="bordered">
              <Card.Body>
                <div className="flex">
                  <span className="key">Total user:</span>
                  <span className="value">{pageInfo?.totalData}</span>
                </div>
                <div className="flex">
                  <span className="key">User in page:</span>
                  <span className="value">{users?.length}</span>
                </div>
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
