import React, { useContext } from "react";
import styled from "styled-components";

import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../orgnism/user/UserCard";
import { UserContext } from "../providers/UserProvider";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `test - ${val}`,
    image: "https://source.unsplash.com/BHJs5TZ-Nt0",
    email: "test@test.com",
    phone: "090-1234-5678",
    company: {
      name: "test Inc."
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  return (
    <SContainer>
      <h2>Users Page</h2>
      <SearchInput />
      <br />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 24px;
  align-items: center;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;
