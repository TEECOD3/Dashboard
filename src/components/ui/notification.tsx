import NotificationBing from "../custom_icons/NotificationBing";

type TNotificationWidgetProps = {
  time: string;
  title: string;
};

function NotificationWidget(props: TNotificationWidgetProps) {
  const { time, title } = props;
  return (
    <div>
      <div className="flex justify-center gap-x-3 mb-6">
        <div className="rounded-full bg-cultured size-8 flex items-center justify-center ">
          <NotificationBing />
        </div>
        <div className="flex flex-col flex-1">
          <h4 className="text-xs mb-1.5 text-space-cadet">{title}</h4>
          <p className="text-[0.625rem] text-grey-black">{time}</p>
        </div>
      </div>

      <hr />
    </div>
  );
}

function Notifications() {
  return (
    <div>
      <div>
        <p className="capitalize font-semibold text-sm">today</p>

        <div className="mt-8 space-y-5">
          {Array(5)
            .fill("")
            .map((_, index) => (
              <NotificationWidget
                title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illo repellendus tempore "
                time="9th june 2023"
                key={index}
              />
            ))}
        </div>
      </div>

      <div className="mt-10">
        <p className="capitalize font-semibold text-sm">yesterday</p>

        <div className="mt-8 space-y-5">
          {Array(5)
            .fill("")
            .map((_, index) => (
              <NotificationWidget
                title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illo repellendus tempore "
                time="9th june 2023"
                key={index}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Notifications;
