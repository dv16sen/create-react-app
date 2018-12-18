import React from "react";

export const Page = ({children, ...props}) => (
    <main {...props}>
        {children}
    </main>
);