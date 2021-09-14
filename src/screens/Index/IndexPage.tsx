import React from "react";
import Header from "../../components/Header";
import { useRouter } from "next/router";

function IndexPage(props: { currentUser: any }) {
  const router = useRouter();

  return (
    <div>
      <Header
        loggedIn={props.currentUser != null}
        currentRoute={router.asPath}
      />
    </div>
  );
}

export default IndexPage;
