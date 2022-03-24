import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

const pages = ["", "about", "work"];

export default function Navbar() {
    return (
        <AppBar
            position="static"
            color="transparent"
            elevation={0}
            className="navbar"
        >
            <Toolbar>
                {pages.map((page) => (
                    <Button
                        color="inherit"
                        component={Link}
                        to={`/${page}`}
                        style={{ fontSize: "1.2rem", fontFamily: "inherit" }}
                        key={page}
                    >
                        {page === "" ? "Home" : page}
                    </Button>
                ))}
            </Toolbar>
        </AppBar>
    );
}
