"use client";
import { useEffect, useState } from "react";

export default function Countdown() {
  const [countDown, setCountdown] = useState([]);

  useEffect(() => {
    const selisih = new Date(2023, 6, 27).getTime() - new Date().getTime();
    if (selisih > 0) {
      const interval = setInterval(() => {
        let hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
        let jam = Math.floor(
          (selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let menit = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
        let detik = Math.floor((selisih % (1000 * 60)) / 1000);
        setCountdown([
          hari < 10 ? `0${hari}` : hari,
          jam < 10 ? `0${jam}` : jam,
          menit < 10 ? `0${menit}` : menit,
          detik < 10 ? `0${detik}` : detik,
        ]);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [setCountdown, countDown]);

  return (
    <>
      {[
        {
          key: "DAY",
          value: "30",
          className: "self-end",
        },
        {
          key: "HOURS",
          value: "15",
          className: "",
        },
        {
          key: "MINUTE",
          value: "40",
          className: "",
        },
        {
          key: "SECONDS",
          value: "05",
          className: "self-start ml-[15px]",
        },
      ].map((value, index) => (
        <div
          key={value.key}
          className="flex flex-col justify-center items-center space-y-[16px] xl:space-y-[20px] font-chivo"
        >
          <p
            className={`text-[32px] xl:text-[45px] text-white ${value.className}`}
          >
            {countDown[index]}
          </p>
          <p className="text-[16px] xl:text-[24px] text-white">{value.key}</p>
        </div>
      ))}
    </>
  );
}
