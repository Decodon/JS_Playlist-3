"use strict";

const express = require("express");
const router = express.Router();

const dashboard = require("./controllers/dashboard.js");
const about = require("./controllers/about.js");

const playlist = require('./controllers/playlist.js');

router.get("/", dashboard.index);
router.get("/dashboard", dashboard.index);
router.get("/about", about.index);

router.get('/playlist/:id', playlist.index);
router.post('/dashboard/addplaylist', dashboard.addPlaylist);
router.get('/dashboard/deleteplaylist/:id', dashboard.deletePlaylist);

router.get("/playlist/:id/deletesong/:songid", playlist.deleteSong);

router.post('/playlist/:id/addsong', playlist.addSong);

module.exports = router;
