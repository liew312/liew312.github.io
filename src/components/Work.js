import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Container from "@mui/material/Container";

export default function Work() {
    return (
        <Container style={{ marginTop: "5rem" }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea
                    href="https://fakenewsdetective.com"
                    target="_blank"
                >
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/fakenewsdetective.png"
                        alt="fake news detective"
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="div"
                            style={{
                                fontFamily: "inherit",
                                fontWeight: "bold",
                            }}
                        >
                            Fake News Detective
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            style={{
                                fontFamily: "inherit",
                                textAlign: "justify",
                            }}
                        >
                            Developed a Unity educational web-based game as part
                            of the project titled: “Defining, determining, and
                            dealing with deliberate online falsehoods in
                            Singapore,” funded by the Social Science Research
                            Council. Created the game with 2D top-down design
                            and “Escape Room” as the theme.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Container>
    );
}
