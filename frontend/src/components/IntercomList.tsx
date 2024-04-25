import { Typography } from "antd";

import { useGetIntercomsQuery } from "../store/api/intercomApi";
import { useAppSelector } from "../store/hooks";
import Intercom from "./Intercom/index";

const IntercomList = () => {
  const token = useAppSelector((state) => state.user.token);
  const {
    data: intercomData,
    isLoading: intercomIsLoading,
    isError: intercomIsError,
    // isFetching,
    // error
  } = useGetIntercomsQuery({ token });

  return (
    <>
      <Typography.Title level={3}>Домофоны:</Typography.Title>

      {!intercomIsLoading && !intercomIsError && intercomData ? (
        <div className="flex flex-row flex-wrap gap-3">
          {intercomData.data.intercom.map((item) => (
            <Intercom
              key={item.name}
              name={item.name}
              open={item["open-url"]}
              camera={item.camera[0].original}
              camera_stable={item.camera[0].mjpeg_new}
              preview={item.preview}
              className="w-full sm:w-1/2 md:w-1/3 bg-section"
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-row flex-wrap gap-3">
          {[1, 2, 3].map((item) => (
            <Intercom.Skeleton
                key={item}
                className="w-full sm:w-1/2 md:w-1/3 bg-section"
            />
          ))}
        </div>
      )}
    </>
  );
};

export default IntercomList;
