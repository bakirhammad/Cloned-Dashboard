import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { HeaderWrapper } from "./components/header";
import { ScrollTop } from "./components/scrollTop";
import { FooterWrapper } from "./components/footer";
import { Sidebar } from "./components/sidebar";
import { DrawerMessenger, InviteUsers } from "../../partials";
import { PageDataProvider } from "./core";
import { reInitMenu } from "../helpers";
import DrawerBundles from "./DrawerBundels";

const MasterLayout = () => {
  const location = useLocation();

  useEffect(() => {
    reInitMenu();
  }, [location.key]);

  return (
    <PageDataProvider>
      <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
        <div
          className="app-page flex-column flex-column-fluid"
          id="kt_app_page"
        >
          <HeaderWrapper />
          <div
            className="app-wrapper flex-column flex-row-fluid"
            id="kt_app_wrapper"
          >
            <Sidebar />
            <div
              className="app-main flex-column flex-row-fluid"
              id="kt_app_main"
            >
              <div className="d-flex flex-column flex-column-fluid">
                <Outlet />
              </div>
              <FooterWrapper />
            </div>
          </div>
        </div>
      </div>

      {/* begin:: Drawers */}
      <DrawerMessenger />
      <DrawerBundles />

      {/* end:: Drawers */}

      {/* begin:: Modals */}
      <InviteUsers />
      {/* end:: Modals */}
      <ScrollTop />
    </PageDataProvider>
  );
};

export { MasterLayout };