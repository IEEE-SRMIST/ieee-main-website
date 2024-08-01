import React from 'react';

export default function MyComponent() {
  return (
    <div className="px-8 py-16 max-md:px-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col max-md:mt-10 max-md:max-w-full">
            <div className="text-6xl tracking-tight text-left leading-[63.84px] text-zinc-200 max-md:max-w-full max-md:text-4xl">
              About Us
            </div>
            <div className="mt-8 text-base tracking-wide leading-6 text-justify text-zinc-200 max-md:max-w-full">
              We stand as a beacon for innovation and collaboration in the field
              of technology. Our club embodies this spirit by bringing together
              passionate individuals who share a common fascination for the
              latest advancements in electrical engineering, computer science,
              and related disciplines. Through engaging workshops, informative
              seminars, and hands-on projects, we strive to foster a vibrant
              community where members can expand their knowledge, develop
              practical skills, and forge meaningful connections with peers and
              industry professionals alike.
            </div>
            <div className="flex gap-5 justify-between pr-3 mt-8 max-md:flex-wrap max-md:max-w-full">
              <img
                loading="lazy"
                src="/aboutus/img2.jpg"
                className="w-full rounded-xl aspect-[1.25] max-md:max-w-full"
              />
              <img
                loading="lazy"
                src="/aboutus/img_arrow.jpg"
                className="self-start w-14 h-[28rem] max-md:max-w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow text-base tracking-wide leading-6 text-zinc-200 max-md:mt-10 max-md:max-w-full">
            <img
              loading="lazy"
              src="/aboutus/img3.jpg"
              className="w-full rounded-xl aspect-[1.43] max-md:max-w-full"
            />
            <div className="mt-8 max-md:max-w-full">
              <span className="font-bold text-zinc-200">Mission:</span> <br />
              &quot;To foster a dynamic community of innovation and learning
              among electrical engineering and computer science
              enthusiasts.&quot;
              <br />
              <br />
              <span className="font-bold text-zinc-200">Vision:</span> <br />
              &quot;To be the leading platform where passionate individuals in
              electrical engineering and computer science come together to push
              boundaries, solve challenges, and drive technological advancements
              that shape the future.&quot;
              <br />
              <br />
              <span className="font-bold text-zinc-200">Values:</span> <br />
              Innovation: We encourage bold ideas and embrace creativity to
              drive innovative solutions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}