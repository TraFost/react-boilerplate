import _React from "react";
import { useNavigate } from "react-router-dom";

import { Button, Icon } from "@/presentation/components";
import { RoutePath } from "@/routes/app-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="bg-white dark:bg-gray-900 ">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <span className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
            <Icon name="ooui:alert" />
          </span>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            The page you are looking for doesn't exist. <br />
            Here are some helpful links:
          </p>
          <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <Button
              className="flex items-center gap-2 bg-gray-300 text-gray-800"
              onClick={() => navigate(-1)}
            >
              <Icon name="bi:arrow-left" />
              Go back
            </Button>
            <Button onClick={() => navigate(RoutePath.HOME)}>Take me home</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
