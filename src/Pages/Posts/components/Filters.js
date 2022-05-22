import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getTags, getUsers } from "../../../postsApi";
import { Skeleton } from "@mui/material";

const Filters = ({ selectedUser, selectUser, selectedTags, selectTags }) => {
  const [users, setUsers] = useState([]);
  const [tags, setTags] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [loadingTags, setLoadingTags] = useState(false);
  // we could load users and tags using api's pagination for each select for a better performance and reduced fetching time
  // both select also could be seperated into different components to make the code more readable and to handle state more elegantly
  useEffect(() => {
    (async function () {
      try {
        setLoadingUsers(true);
        const { data } = await getUsers();
        setUsers(data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoadingUsers(false);
      }
    })();
    return () => {};
  }, []);
  useEffect(() => {
    (async function () {
      try {
        setLoadingTags(true);
        const { data } = await getTags();
        setTags(data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoadingTags(false);
      }
    })();
    return () => {};
  }, []);
  const handleOnChangeUser = (_, value) => {
    selectUser(value);
    selectTags([]); // reset tags filter; one filter at a time
  };
  const handleOnChangeTags = (_, value) => {
    selectTags(value);
    selectUser(null); //reset user filter; one filter at time
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      {/* each select here could be refactored as a component aside with it's own state more elegant way*/}
      {loadingTags ? (
        <Skeleton
          variant="rectangular"
          width={300}
          height={35}
          style={{ marginLeft: 10 }}
        />
      ) : (
        <Autocomplete
          id="tags-multiple-select"
          multiple
          options={tags}
          value={selectedTags}
          onChange={handleOnChangeTags}
          size="small"
          filterSelectedOptions
          renderInput={(params) => (
            <TextField {...params} label="Tags" placeholder="Tags" />
          )}
          style={{ width: 300, marginLeft: 10 }}
        />
      )}
      {loadingUsers ? (
        <Skeleton
          variant="rectangular"
          width={300}
          height={35}
          style={{ marginLeft: 10 }}
        />
      ) : (
        <Autocomplete
          id="user-select"
          options={users}
          value={selectedUser}
          onChange={handleOnChangeUser}
          getOptionLabel={(option) => option.firstName}
          size="small"
          renderInput={(params) => <TextField {...params} label="Users" />}
          style={{ width: 300, marginLeft: 10 }}
        />
      )}
    </div>
  );
};

export default Filters;
