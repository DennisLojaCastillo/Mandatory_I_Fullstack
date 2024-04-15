import { Router } from "express";
import { exportImportPage, firstServerPage, homePage, introductionPage, routersPage, servingHTMLPage, ssrPage, timePage, topicsPage } from "../util/readPages.js";

const router = Router();

router.get("/", (req, res) => {
    res.send(homePage);
});

router.get("/topics", (req, res) => {
    res.send(topicsPage);
})

router.get("/introduction", (req, res) => {
    res.send(introductionPage);
})

router.get("/first-server", (req, res) => {
    res.send(firstServerPage);
})

router.get("/serving-html", (req, res) => {
    res.send(servingHTMLPage);
})

router.get("/time", (req, res) => {
    res.send(timePage);
})

router.get("/export-import", (req, res) => {
    res.send(exportImportPage);
})

router.get("/ssr", (req, res) => {
    res.send(ssrPage);
})

router.get("/routers", (req, res) => {
    res.send(routersPage);
})

export default router;