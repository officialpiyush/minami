"use client";

import { useEffect } from "react";

interface RemoveClassProps extends React.ComponentProps<"div"> {
  removeClass: string[];
  selector?: string;
}

export default function RemoveClass(props: RemoveClassProps) {
  useEffect(() => {
    const elements = document.querySelectorAll(props.selector || "body");

    elements.forEach((element) => {
      props.removeClass.forEach((className) => {
        element.classList.remove(className);
      });
    });

    return () => {
      elements.forEach((element) => {
        props.removeClass.forEach((className) => {
          element.classList.add(className);
        });
      });
    };
  }, [props.removeClass, props.selector]);

  return <></>;
}
