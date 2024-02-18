"use client";
import React from "react";

const PageLoading = ({ pageLoading }) => {
  return (
    pageLoading?.status && (
      <div className="page_processing_modal">
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {pageLoading.message && <p>{pageLoading.message}</p>}
      </div>
    )
  );
};

export default PageLoading;
