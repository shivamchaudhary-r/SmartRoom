import React from 'react';
import clsx from "clsx";
import { animated, useSpring } from '@react-spring/web';

function StudentIcon({ path = 'options', className = 'w-4 h-4' }) {
  return (
    <img
      src={`https://assets.codepen.io/3685267/${path}.svg`}
      alt=""
      className={clsx(className)}
    />
  );
}

function StudentNameCard({ name, scored, rise, progress }) {
  const { score, barPlayhead } = useSpring({
    score: scored,
    barPlayhead: 1,
    from: { score: 0, barPlayhead: 0 },
  });

  return (
    <div className="w-full p-2 lg:w-1/6">
      <div className="rounded-lg bg-card flex flex-col justify-start p-3 px-5 h-32">
        <div className="flex">
          <div className="flex items-center w-[60%]">
            <div className="font-bold text-white">{name}</div>
          </div>
          <div className="flex flex-col items-center w-[40%]">
            <StudentIcon
              path={rise ? 'res-react-dash-bull' : 'res-react-dash-bear'}
              className="w-8 h-8"
            />
            <animated.div
              className={clsx(
                rise ? 'text-green-500' : 'text-red-500',
                'font-bold',
                'text-lg',
              )}
            >
              {score.interpolate((i) => `${i.toFixed(2)}`)}
            </animated.div>
          </div>
        </div>
        <div className="relative w-full h-3 bg-gray-800 mt-5 mb-2 rounded-md">
          <div className="absolute left-0 top-0 h-full  bg-gradient-to-r from-emerald-500 from-10% via-sky-500 via-30% to-indigo-500 to-90% rounded-md" style={{ width: `${(progress / 5) * 100}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default StudentNameCard;


