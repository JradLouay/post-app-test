import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { getTags, getUsers } from "../postsApi";
import { Skeleton } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const Filters = () => {
  const [users, setUsers] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [loadingTags, setLoadingTags] = useState(false);
  // we could load users and tags using api's pagination for each select for a better performance and reduced fetching time
  React.useEffect(() => {
    (async function () {
      try {
        setLoadingUsers(true);
        const { data, status } = await getUsers();
        setUsers(data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoadingUsers(false);
      }
    })();
  }, []);
  React.useEffect(() => {
    (async function () {
      try {
        setLoadingTags(true);
        const { data, status } = await getTags();
        setTags(data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoadingTags(false);
      }
    })();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      {/* each select here could be refactored as a component aside with it's own state */}
      {loadingTags ? (
        <Skeleton
          variant="rectangular"
          width={300}
          height={35}
          style={{ marginLeft: 10 }}
        />
      ) : (
        <Autocomplete
          multiple
          style={{ width: 300, marginLeft: 10 }}
          size="small"
          id="tags-multiple-select"
          options={tags}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField {...params} label="Tags" placeholder="Tags" />
          )}
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
          size="small"
          options={users}
          getOptionLabel={(option) => option.firstName}
          style={{ width: 300, marginLeft: 10 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
      )}
    </div>
  );
};

export default Filters;
