"use client";

import { useEffect } from "react";

interface ChangeBGProps extends React.ComponentProps<"div"> {
  color: string;
  textColor?: string;
}

export default function ChangeBG(props: ChangeBGProps) {
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];

    body.style.backgroundColor = props.color;

    if (props.textColor) {
      body.style.color = props.textColor;
    }
  }, [props.color, props.textColor]);

  return <></>;
}
