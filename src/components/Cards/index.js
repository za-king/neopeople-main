import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Link from "next/link";

export default function MultiActionAreaCard(image) {
  return (
    <>
      <div
        className=" 
    grid grid-cols-1
    lg:grid-cols-4 lg:gap-4
    justify-items-center
    mt-10
    "
      >
        <div className="p-10">
          <div className="rounded overflow-hidden shadow-lg max-w-sm  ">
            <Link href="/eventdetail" passHref>
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
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Nama event
                  </Button>
                  <p>Rp.100.000</p>
                </CardActions>
              </Card>
            </Link>
          </div>
        </div>

        <div className="p-10">
          <div className="rounded overflow-hidden shadow-lg max-w-sm  ">
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
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Nama event
                </Button>
                <p>Rp.100.000</p>
              </CardActions>
            </Card>
          </div>
        </div>

        <div className="p-10">
          <div className="rounded overflow-hidden shadow-lg max-w-sm  ">
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
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Nama event
                </Button>
                <p>Rp.100.000</p>
              </CardActions>
            </Card>
          </div>
        </div>

        <div className="p-10">
          <div className="rounded overflow-hidden shadow-lg max-w-sm  ">
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
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Nama event
                </Button>
                <p>Rp.100.000</p>
              </CardActions>
            </Card>
          </div>
        </div>
        <div className="p-10">
          <div className="rounded overflow-hidden shadow-lg max-w-sm  ">
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
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Nama event
                </Button>
                <hr></hr>
                <p>Rp.100.000</p>
              </CardActions>
            </Card>
          </div>
        </div>
        <div className="p-10">
          <div className="rounded overflow-hidden shadow-lg max-w-sm  ">
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
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Nama event
                </Button>
                <p>Rp.100.000</p>
              </CardActions>
            </Card>
          </div>
        </div>
        <div className="p-10">
          <div className="rounded overflow-hidden shadow-lg max-w-sm  ">
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
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Nama event
                </Button>
                <p>Rp.100.000</p>
              </CardActions>
            </Card>
          </div>
        </div>
        <div className="p-10">
          <div className="rounded overflow-hidden shadow-lg max-w-sm  ">
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
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Nama event
                </Button>
                <p>Rp.100.000</p>
              </CardActions>
            </Card>
          </div>
        </div>
        <div className="p-10">
          <div className="rounded overflow-hidden shadow-lg max-w-sm  ">
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
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Nama event
                </Button>
                <p>Rp.100.000</p>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
