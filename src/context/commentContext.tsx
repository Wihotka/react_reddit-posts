import React from "react";

type TCommentContext = {
  value: string;
  onChange: (value: string) => void;
}

export const commentContext = React.createContext<TCommentContext>({
  value: '',
  onChange: () => {},
});
