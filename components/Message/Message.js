import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export const Message = ({ role, content }) => {
  const { user } = useUser();
  return (
    <div
      className={`grid grid-cols-[30px_1fr] gap-5 p-5 ${
        role === "assistant" ? "bg-gray-600" : ""
      }`}
    >
      <div>
        {role === "user" && !!user && (
          <Image
            src={user.picture}
            width={30}
            height={30}
            alt="User avatar"
            className="rounded-sm shadow shadow-black/50"
          />
        )}
        {role === "assistant" && (
          <div className="bg-gray-800">
            <Image
              src="/images/chatbot-small.png"
              width={30}
              height={30}
              alt="User avatar"
              className="rounded-sm shadow shadow-black/50"
            />
          </div>
        )}
      </div>
      <div className="prose prose-invert">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};
