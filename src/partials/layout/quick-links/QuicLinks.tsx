import { FC } from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrlForLocalImage } from "../../../presentation/helpers";
import { CustomKTIcon } from "../../../presentation/components";

const QuickLinks: FC = () => (
  <div
    className="menu menu-sub menu-sub-dropdown menu-column w-250px w-lg-325px"
    data-kt-menu="true"
  >
    <div
      className="d-flex flex-column flex-center bgi-no-repeat rounded-top px-9 py-10"
      style={{
        backgroundImage: `url('${toAbsoluteUrlForLocalImage(
          "media/misc/pattern-1.jpg"
        )}')`,
      }}
    >
      <h3 className="text-white fw-bold mb-3">Quick Links</h3>

      <span className="badge bg-primary py-2 px-3">25 pending tasks</span>
    </div>

    <div className="row g-0">
      <div className="col-6">
        <a
          href="#"
          className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end border-bottom"
        >
          <CustomKTIcon iconName="euro" className="fs-3x text-primary mb-2" />
          <span className="fs-5 fw-bold text-gray-800 mb-0">Accounting</span>
          <span className="fs-7 text-gray-500">eCommerce</span>
        </a>
      </div>

      <div className="col-6">
        <a
          href="#"
          className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-bottom"
        >
          <CustomKTIcon iconName="sms" className="fs-3x text-primary mb-2" />
          <span className="fs-5 fw-bold text-gray-800 mb-0">
            Administration
          </span>
          <span className="fs-7 text-gray-500">Console</span>
        </a>
      </div>

      <div className="col-6">
        <a
          href="#"
          className="d-flex flex-column flex-center h-100 p-6 bg-hover-light border-end"
        >
          <CustomKTIcon
            iconName="abstract-41"
            className="fs-3x text-primary mb-2"
          />
          <span className="fs-5 fw-bold text-gray-800 mb-0">Projects</span>
          <span className="fs-7 text-gray-500">Pending Tasks</span>
        </a>
      </div>

      <div className="col-6">
        <a
          href="#"
          className="d-flex flex-column flex-center h-100 p-6 bg-hover-light"
        >
          <CustomKTIcon
            iconName="briefcase"
            className="fs-3x text-primary mb-2"
          />
          <span className="fs-5 fw-bold text-gray-800 mb-0">Customers</span>
          <span className="fs-7 text-gray-500">Latest cases</span>
        </a>
      </div>
    </div>

    <div className="py-2 text-center border-top">
      <Link
        to="/crafted/pages/profile"
        className="btn btn-color-gray-600 btn-active-color-primary"
      >
        View All <CustomKTIcon iconName="arrow-right" className="fs-5" />
      </Link>
    </div>
  </div>
);

export { QuickLinks };
