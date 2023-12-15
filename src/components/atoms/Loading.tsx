import React from "react";

interface LoadingProps {
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ message }) => {
  return (
    <div className="flex h-80 items-center justify-center">
      <div
        className="h-16 w-16 animate-spin rounded-full
                    border-8 border-solid border-green border-t-transparent"
      ></div>
      {message && <div className="text-gray-700 ml-4">{message}</div>}
    </div>
  );
};

export default Loading;
