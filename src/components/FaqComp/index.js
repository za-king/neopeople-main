import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FaqComp() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className=" bg-[#F4F8FE] h-[100vh] justify-center flex flex-col items-stretch">
      <div className='p-20  pb-3 '>
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
              Apa itu Neo People?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Neo People merupakan sebuah komunitas yang dibentuk untuk
              meningkatkan kesadaran tentang kesehatan mental serta mengajak
              SobatNeo untuk menjadi pribadi yang produktif.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <div className='p-20 pt-0 pb-3'>
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
            Apa itu #TumbuhBersama ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            #TumbuhBersama merupakan tagline dan juga prinsip dari kami untuk
            merangkul SobatNeo menikmati proses kehidupan bersama dengan
            orientasi terus bertumbuh menjadi pribadi yang lebih baik.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>

      <div className='p-20 pt-0 pb-3'>
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
            Apa itu Komunitas #TumbuhBersama ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Komunitas #TumbuhBersama merupakan sebuah wadah tempat berkumpulnya
            alumni peserta dari event Neo People yang telah selesai
            diselenggarakan dimana wadah ini bisa menjadi tempat curhat, sharing
            dan diskusi perihal masalah yang sedang dialami.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      
      <div className='p-20 pt-0 pb-3'>
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
            Bagaimana cara untuk masuk ke dalam grup komunitas?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Untuk masuk ke dalam grup komunitas kamu hanya wajib mengikuti event
            dari Neo People sebanyak 1x dan nanti kamu akan mendapatkan banyak
            benefit yang bisa kamu rasakan.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      
      <div className='p-20 pt-0 pb-100'>
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
            Keuntungan kamu masuk grup komunitas #TumbuhBersama : 1.Kamu dapat
            daftar lebih dulu (Pre-Order) event terdekat kami sebelum poster
            event di launching secara resmi
            <br></br>
            2.Kamu bisa curhat masalah apapun yang sedang kamu hadapi tanpa
            takut mendapatkan label atau judgement dari orang lain
            <br></br>
            3.Kamu berpeluang mendapatkan layanan khusus yang hanya diperuntukan
            untuk anggota komunitas
            <br></br>
            4.Kamu berpeluang mendapatkan harga spesial untuk event/layanan
            berbayar kami
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      
    </div>
  );
}
