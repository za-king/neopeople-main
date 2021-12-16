import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Link from "next/link";

export async function getServerSideProps() {
  const getphotos = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  const photos = await getphotos.json();
  return {
    props: { photos },
  };
}

export default function MultiActionAreaCard({ photos }) {
  return (
    <>
      {/* <div>
        {photos.map((photo) => {
          return (
            <div key={photo.id}>
              <h1>{photo.albumId}</h1>
              <p>{photo.title}</p>
              <img src={photo.url} alt="photo" width={100} height={100} />
            </div>
          );
        })}
      </div> */}

      <div className="bg-[#F4F8FE] w-full h-full">
        <div className="h-[20%] pt-36 w-full flex justify-end items-center flex-col">
          <div className="text-4xl font-sans font-medium">EVENT</div>
        </div>

        <div className=" ml-24 w-full flex justify-star  flex-col">
          <div className="text-3xl font-sans font-thin">UPCOMING EVENT</div>
        </div>
        <div className=" grid grid-cols-2 lg:grid-cols-3 lg:gap-4 justify-items-center mt-10 ">
          <div className="p-10">
            <div className="rounded overflow-hidden shadow-lg max-w-sm  ">
              <Link href="/eventsPages/eventdetail">
                <Card sx={{ maxWidth: 300 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://picsum.photos/300/300"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        tgl Event 1
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        harga
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </div>
          </div>

          <div className="p-10">
            <div className="rounded overflow-hidden shadow-lg max-w-sm  ">
              <Link href="/eventsPages/eventdetail">
                <Card sx={{ maxWidth: 300 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://picsum.photos/300/300"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        tgl Event 1
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        harga
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </div>
          </div>
          <div className="p-10">
            <div className="rounded overflow-hidden shadow-lg max-w-sm  ">
              <Link href="/eventsPages/eventdetail">
                <Card sx={{ maxWidth: 300 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://picsum.photos/300/300"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        tgl Event 1
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        harga
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </div>
          </div>
        </div>

        <div className=" ml-24 w-full flex justify-star  flex-col">
          <div className="text-3xl font-sans font-thin">COMPLETED EVENT</div>
        </div>

        <div className=" grid grid-cols-2 lg:grid-cols-3 lg:gap-4 justify-items-center mt-10 ">
          <div className="p-10">
            <div className="rounded overflow-hidden shadow-lg max-w-sm  ">
              <Link href="/eventsPages/eventdetail">
                <Card sx={{ maxWidth: 300 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://picsum.photos/300/300"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        tgl Event 1
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        harga
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </div>
          </div>

          <div className="p-10">
            <div className="rounded overflow-hidden shadow-lg max-w-sm  ">
              <Link href="/eventsPages/eventdetail">
                <Card sx={{ maxWidth: 300 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://picsum.photos/300/300"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        tgl Event 1
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        harga
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
