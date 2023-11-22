import { Flex, Stack, Header } from "@mantine/core";
import { Context } from "main";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "shared/constants/routes";

export const Routing = () => {
  const { UStore } = useContext(Context);

  return (
    <Flex>
      <Routes>
        {UStore.isAuth && authRoutes.map(({path, Component}) => 
          <Route key={path} path={path} element={<Component/>}/>
        )}
        {publicRoutes.map(({path, Component}) => 
          <Route key={path} path={path} element={<Component/>}/>
        )}
      </Routes>
      </Flex>
    );
};
