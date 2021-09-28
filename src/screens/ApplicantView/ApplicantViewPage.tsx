import React, { useState, useEffect } from "react";
import Router from "next/router";
import urls from "utils/urls";

import { UserType } from "server/mongodb/models/User";
import { UserRoles } from "server/mongodb/models/UserRoles";
import ApplicantTable from "src/components/ApplicantTable";

interface PropTypes {
  currentUser: UserType;
}

function ApplicantViewPage({ currentUser }: PropTypes) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentUser || currentUser.role !== UserRoles.ACCESS_H20)
      Router.replace(urls.pages.index);
    else setLoading(false);
  }, []);

  return (
    !loading && (
      <div>
        <h1>Applicant View Page</h1>
        <ApplicantTable view />
      </div>
    )
  );
}

export default ApplicantViewPage;
