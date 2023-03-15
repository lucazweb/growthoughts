import React, { PropsWithChildren } from "react";

export const Card = ({ children }: PropsWithChildren) => {
  return (
    <div
      data-testid="card-component"
      className="box-content h-32 w-32 p-4 border-4 shadow-md"
    >
      {children}
    </div>
  );
};
