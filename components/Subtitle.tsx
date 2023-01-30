import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Subtitle = ({ children }: Props) => {
  return (
    <h3 className="text-xl mt-6 mb-2 font-semibold font-sans text-brand-textTerciary">
      {children}
    </h3>
  );
};
