interface MinaBoxProps extends React.ComponentProps<"div"> {
  message: string;
}

export default function MinaBox(props: MinaBoxProps) {
  return (
    <div className="py-4 w-[70%] px-6 text-black font-fraunces rounded-lg odd:self-start odd:bg-[#E8DB98] even:self-end even:bg-[#969A8A]">
      {props.message}
    </div>
  );
}
