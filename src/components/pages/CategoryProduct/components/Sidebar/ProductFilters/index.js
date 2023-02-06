import React from "react";
import { useState } from "react";

import styles from "./ProductFilters.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function ProductFilters({ payload, setPayload }) {
  const category = [
    {
      name: "tag",
      value: "tag",
      options: [
        {
          name: "New Arrivals",
          value: "New Arrivals",
        },
        {
          name: "Best Seller",
          value: "Best Seller",
        },
        {
          name: "Sale Off",
          value: "Sale Off",
        },
      ],
    },
    {
      name: "nhà phân phối",
      value: "trademark",
      options: [
        {
          name: "MLB Vietnam",
          value: "MLB Vietnam",
        },
      ],
    },
    {
      name: "màu sắc",
      value: "color",
      options: [
        {
          color: "fff",
          border: "ccc",
        },
        {
          color: "000000",
          border: "000000",
        },
        {
          color: "C0C0C0",
          border: "C0C0C0",
        },
        {
          color: "CC9966",
          border: "CC9966",
        },
        {
          color: "3399FF",
          border: "3399FF",
        },
        {
          color: "99FF66",
          border: "99FF66",
        },
        {
          color: "FF66CC",
          border: "FF66CC",
        },
        {
          color: "FF9999",
          border: "FF9999",
        },
        {
          color: "990000",
          border: "990000",
        },
        {
          color: "FFCC33",
          border: "FFCC33",
        },
        {
          color: "FFFF33",
          border: "FFFF33",
        },
      ],
    },
    {
      name: "logo",
      value: "logo",
      options: [
        {
          name: "New York Yankees (NY)",
          value: "NY",
        },
        {
          name: "Boston Red Sox (B)",
          value: "B",
        },
        {
          name: "Los Angeles Dodgers(LA)",
          value: "LA",
        },
        {
          name: "Philadelphia Philies(P)",
          value: "P",
        },
        {
          name: "San Francisco Giants(SF)",
          value: "SF",
        },
      ],
    },
  ];
  const [activeColor, setActiveColor] = useState();
  const [activeTag, setActiveTag] = useState();
  const [activeLogo, setActiveLogo] = useState();
  const [activeTrademark, setActiveTrademark] = useState();

  const handleActiveTab = (index, key, value, state, callback) => {
    if (state === index) {
      callback(-1);
      delete payload[key];
      setPayload({
        ...payload,
      });
    } else {
      callback(index);
      setPayload({
        ...payload,
        [key]: value,
      });
    }
  };
  return (
    <>
      {category &&
        category.length &&
        category.map((filter, index) => {
          const { name, options } = filter;
          return (
            <div key={index} className={cx("aside-item")}>
              <div className={cx("aside-title")}>
                {name}
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='10'
                    height='5'
                    viewBox='0 0 10 5'
                    fill='none'>
                    <path
                      d='M0.993164 0.968199L5.0001 4.97514L9.00704 0.968201L8.06423 0.0253911L5.0001 3.08952L1.93597 0.0253906L0.993164 0.968199Z'
                      fill='#333333'></path>
                  </svg>
                </span>
              </div>
              <div className={cx("aside-content")}>
                <ul className={cx(`filter-${filter.value}`)}>
                  {options.map((option, index) => {
                    if (filter.value === "color") {
                      return (
                        <li
                          key={index}
                          style={{
                            backgroundColor: `#${option.color}`,
                            border: `1px solid #${option.border}`,
                          }}
                          className={cx(
                            activeColor === index ? "activeColor" : ""
                          )}
                          onClick={() =>
                            handleActiveTab(
                              index,
                              "color",
                              option.color,
                              activeColor,
                              setActiveColor
                            )
                          }>
                          <i></i>
                        </li>
                      );
                    } else if (filter.value === "tag") {
                      return (
                        <button
                          key={index}
                          className={cx(activeTag === index ? "activeTag" : "")}
                          onClick={() =>
                            handleActiveTab(
                              index,
                              "tag",
                              option.value,
                              activeTag,
                              setActiveTag
                            )
                          }>
                          {option.name}
                        </button>
                      );
                    } else if (filter.value === "logo") {
                      return (
                        <li
                          key={index}
                          className={cx(
                            activeLogo === index ? "activeLogo" : ""
                          )}
                          onClick={() =>
                            handleActiveTab(
                              index,
                              "logo",
                              option.value,
                              activeLogo,
                              setActiveLogo
                            )
                          }>
                          <i></i>
                          {option.name}
                        </li>
                      );
                    } else {
                      return (
                        <li
                          key={index}
                          className={cx(
                            activeTrademark === index ? "activeLogo" : ""
                          )}
                          onClick={() =>
                            handleActiveTab(
                              index,
                              "trademark",
                              option.value,
                              activeTrademark,
                              setActiveTrademark
                            )
                          }>
                          <i></i>
                          {option.name}
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            </div>
          );
        })}
    </>
  );
}
