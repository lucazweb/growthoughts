import React, { PropsWithChildren } from "react";

export const Card = ({ children }: PropsWithChildren) => {
  return (
    <div
      data-testid="card-component"
      className="box-content rounded-lg h-96 w-96 p-4 border-1 shadow-lg  hover:shadow-md"
    >
      {children}
    </div>
  );
};
