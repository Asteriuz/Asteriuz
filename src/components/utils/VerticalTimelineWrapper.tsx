"use client";
import Link from "next/link";
import { IoLanguage, IoSchool } from "react-icons/io5";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type TimelineItem = {
  title: string;
  date: string;
  icon: JSX.Element;
  list: string[];
};

type VerticalTimelineWrapperProps = {
  items: TimelineItem[];
};

export default function VerticalTimelineWrapper({
  items,
}: VerticalTimelineWrapperProps) {
  return (
    <VerticalTimeline
      layout="1-column-left"
      lineColor=""
      className="!m-0 h-full !w-full flex-grow !py-1 xl:!w-[95%]"
    >
      {items.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          visible
          className={index !== 0 ? "!mb-0 !mt-8" : "!mb-0"}
          contentStyle={{
            paddingBottom: 0,
            boxShadow: "0px 5px 20px 0px #4545601A",
            borderRadius: "0.5rem",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #e22f24" }}
          iconStyle={{ background: "#e22f24", color: "#fff" }}
          icon={item.icon}
        >
          <h3 className="mb-1 text-xl font-semibold">{item.title}</h3>
          <p className="!mt-0 text-sm text-primary">{item.date}</p>
          <ul className="mt-2 flex list-disc flex-col gap-1 pl-5 text-sm overflow-hidden">
            {item.list.map((li, i) => (
              <li key={i}>
                {li.startsWith("https://") ? (
                  <Link
                    className="text-primary hover:underline"
                    href={li}
                    target="_blank"
                  >
                    {li.split("https://")[1].replace("/", "")}
                  </Link>
                ) : (
                  li
                )}
              </li>
            ))}
          </ul>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
