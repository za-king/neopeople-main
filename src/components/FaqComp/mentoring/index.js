import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Link from "next/link";

export default function FaqComp() {
  const data = [
    {
      title0: "Apa itu Neo People?",
      body0:
        "Neo People merupakan sebuah komunitas yang dibentuk untuk meningkatkan kesadaran tentang kesehatan mental serta mengajak SobatNeo untuk menjadi pribadi yang produktif",
    },
    {
      title1: "Apa itu #TumbuhBersama ?",
      body1:
        "#TumbuhBersama merupakan tagline dan juga prinsip dari kami untuk merangkul SobatNeo menikmati proses kehidupan bersama dengan orientasi terus bertumbuh menjadi pribadi yang lebih baik.",
    },
    {
      title2: "Apa itu Komunitas #TumbuhBersama ?",
      body2:
        " Komunitas #TumbuhBersama merupakan sebuah wadah tempat berkumpulnya alumni peserta dari event Neo People yang telah selesai diselenggarakan dimana wadah ini bisa menjadi tempat curhat, sharing dan diskusi perihal masalah yang sedang dialami.",
    },
    {
      title3: "Bagaimana cara untuk masuk ke dalam grup komunitas?",
      body3:
        "Untuk masuk ke dalam grup komunitas kamu hanya wajib mengikuti event dari Neo People sebanyak 1x dan nanti kamu akan mendapatkan banyak benefit yang bisa kamu rasakan.",
    },
  ];

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <div className=" bg-[#F4F8FE] h-[100vh] justify-center flex flex-col items-stretch">
        <div className="justify-center flex flex-col items-center">
          <h1 className="flex text-4xl font-sans font-medium">F.A.Q</h1>
        </div>

        <div className="justify-center flex flex-row items-center p-5 space-x-4">
          <button className="bg-[#FFFFFF] hover:bg-[#FA1E0E] shadow-2xl hover:rounded-full w-[100px] h-[36px] border-solid border-2 border-yellow-600 rounded-md ">
            Profile
          </button>
          <button className="bg-[#FFFFFF] hover:bg-[#FA1E0E] shadow-2xl  hover:rounded-full w-[100px] h-[36px] border-solid border-2 border-yellow-600 rounded-md ">
            Mentoring
          </button>
          <Link href="/faq/konseling">
            <button className="bg-[#FFFFFF] hover:bg-[#FA1E0E] shadow-2xl  hover:rounded-full w-[100px] h-[36px] border-solid border-2 border-yellow-600 rounded-md ">
              Konseling
            </button>
          </Link>
        </div>

        <div className="p-20  pb-3 ">
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "50%", flexShrink: 0 }}>
                {data[0].title0}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{data[0].body0}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="p-20 pt-0 pb-3">
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {data[1].title1}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{data[1].body1}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="p-20 pt-0 pb-3">
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {data[2].title2}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{data[2].body2}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="p-20 pt-0 pb-3">
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {data[3].title3}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{data[3].body3}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="p-20 pt-0 pb-100">
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Apa keuntungan masuk grup komunitas #TumbuhBersama?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Keuntungan kamu masuk grup komunitas #TumbuhBersama : 1.Kamu
                dapat daftar lebih dulu (Pre-Order) event terdekat kami sebelum
                poster event di launching secara resmi
                <br></br>
                2.Kamu bisa curhat masalah apapun yang sedang kamu hadapi tanpa
                takut mendapatkan label atau judgement dari orang lain
                <br></br>
                3.Kamu berpeluang mendapatkan layanan khusus yang hanya
                diperuntukan untuk anggota komunitas
                <br></br>
                4.Kamu berpeluang mendapatkan harga spesial untuk event/layanan
                berbayar kami
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
}
