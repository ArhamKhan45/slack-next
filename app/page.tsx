import AuthSignOutAction from "@/src/features/auth/actions/AuthSignOutActions";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1>lOGGED IN hello</h1>
      <AuthSignOutAction />
    </div>
  );
};

export default Home;
