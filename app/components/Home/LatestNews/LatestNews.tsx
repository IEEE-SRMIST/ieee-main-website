import * as React from "react";

interface NoticeData {
  title: string;
  date: string;
  content: string;
}

interface AnnouncementData {
  title: string;
  date: string;
}

const noticeData: NoticeData[] = [
  {
    title: "HackTrix Winners",
    date: "Date: 03/04/2024",
    content: `First Place: Tech Titans - Palak Seth - Varun Gadi - Pratham P
Second Place: SUPERSTAR - Krithick Balaji Ramesh - PG Sivaranjan - Nanagari Puneeth - Vennapoosa Reddy
Third Place: Cyberlife - Parth Nath Chauhan - Aadarsh Jaiswal - Subhrodeep Gosh - Shreyansh Arora`,
  },
  {
    title: "HackTrix",
    date: "Date: 26/02/2024",
    content:
      "Ignite your creativity, connect with tech visionaries, and make waves in the digital era. Are you ready to revolutionize the way we experience technology? Join Hacktrix and be part of an extraordinary mission to transform ideas into reality! Apply now and let's shape the future together! Link: https://hacktrix.ieeesrmist.com/a",
  },
  {
    title: "IEEE SRM IAS qualified at National level Hackathon - Samhita '2024",
    date: "Date: 16/03/2024",
    content:
      "Hello everyone, Industrial Automation Society is glad to inform that Team IAS has represented IEEE at a National level Hackathon - Samhita '2024 and have qualified to the final round, competing with 60+ team from across india. Congratulations ~Viraj ~Abhijit ~Aditya ~C.V.Abhiram ~T. Well done ~Sid and ~Bhoovi Chauhan.",
  },
  {
    title: "SDG Hackathon Winners",
    date: "Date: 17/11/2023",
    content: `Winners:
(Harinarayanan R RA2111026010424 CINTEL Dept Btech CSE w/s AIML 3rd Year)
(Aswin Sujith Varghese RA2111030010079 NWC Dept Btech CSE w/s Cyber Security 3rd year)
(Mohammed Rahman Sherif RA2232003010055 MSc Information Technology 2nd year)`,
  },
  {
    title: "Best Research Poster Winners December 2023",
    date: "",
    content:
      "Congratulations to the Awardees: Lathika Kommineni (Reg no - RA2211003011310) Aldo Roger J (Reg no - RA2311004010431) Shourya Thakur (Reg no - RA2311003011003)",
  },
];

const announcementData: AnnouncementData[] = [
  {
    title: "HackTrix Winners Announcement",
    date: "Date: 03/04/2024",
  },
  {
    title: "HackTrix Announcement",
    date: "Date: 26/02/2024",
  },
  {
    title:
      "IEEE SRM IAS qualified at National level Hackathon - Samhita '2024",
    date: "Date: 16/03/2024",
  },
  {
    title: "SDG Hackathon Winners Announcement",
    date: "Date: 17/11/2023",
  },
  {
    title: "Best Research Poster Winners Announcement",
    date: "December 2023",
  },
];

const NoticeItem: React.FC<NoticeData> = ({ title, date, content }) => (
  <article className="px-16 pt-5 pb-3 mt-7 bg-zinc-200 rounded-[100px] max-md:px-5 max-md:max-w-full">
    <h3 className="text-xl font-bold text-black">{title}</h3>
    <time className="text-black">{date}</time>
    <p className="text-black whitespace-pre-line">{content}</p>
  </article>
);

const AnnouncementItem: React.FC<AnnouncementData> = ({ title, date }) => (
  <article>
    {title}
    <br />
    {date}
    <br />
  </article>
);

export default function LatestNews() {
  return (
    <div className="flex flex-col justify-center">
      <div className="px-20 pt-20 pb-6 w-full bg-white rounded-[170px] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <section className="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-20 text-black max-md:mt-10 max-md:max-w-full">
              <h2 className="self-center text-6xl font-bold max-md:max-w-full max-md:text-4xl">
                Notice Board
              </h2>
              <div className="flex flex-col px-3 py-6 mt-11 text-base text-center bg-gray-300 rounded-[100px] max-md:mt-10 max-md:max-w-full">
                {noticeData.map((notice, index) => (
                  <NoticeItem key={index} {...notice} />
                ))}
              </div>
            </div>
          </section>
          <aside className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-center text-black max-md:mt-10 max-md:max-w-full">
              <section className="flex flex-col px-3.5 pt-12 pb-4 bg-gray-300 rounded-[50px] max-md:max-w-full">
                <h2 className="self-center text-5xl font-bold max-md:text-4xl">
                  Our Mission
                </h2>
                <p className="justify-center px-3 py-11 mt-12 text-xs bg-zinc-200 rounded-[50px] max-md:mt-10 max-md:max-w-full">
                  <span className="text-xl font-bold text-black">
                    Buckle up, innovators! This is the official news feed for
                    the IEEE SRM Student Branch, your one-stop shop for all
                    things cutting-edge. Dive into the latest updates,
                    announcements, and mind-blowing projects brewing in our
                    branch. Get the scoop on electrifying events, groundbreaking
                    initiatives, and the stellar achievements of your fellow
                    tech rockstars. These news articles are your portal to the
                    vibrant pulse of the IEEE community at SRMIST. Let's geek
                    out together!
                  </span>
                </p>
              </section>
              <section className="flex flex-col pt-12 pb-7 mt-32 font-bold bg-gray-300 rounded-[50px] max-md:mt-10 max-md:max-w-full">
                <h2 className="self-center text-5xl max-md:max-w-full max-md:text-4xl">
                  Announcements
                </h2>
                <hr className="shrink-0 mt-8 h-px bg-black border border-black border-solid max-md:max-w-full" />
                <div className="justify-center px-11 py-4 mx-7 mt-6 text-xl bg-zinc-200 rounded-[50px] max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
                  {announcementData.map((announcement, index) => (
                    <AnnouncementItem key={index} {...announcement} />
                  ))}
                </div>
              </section>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
