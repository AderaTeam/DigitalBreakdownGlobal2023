import { Flex } from "@mantine/core";
import { Context } from "main";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "shared/constants/routes";

export const Routing = observer(() => {
  const { UStore } = useContext(Context);

  if (!UStore.isAuth && location.pathname === '/') {
    return <Navigate to='/login' replace/>
  }

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
});
