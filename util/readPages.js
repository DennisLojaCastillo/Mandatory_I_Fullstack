import { readPage, renderPage } from "./templateEngine.js";

const homepage = readPage("./public/pages/homepage/homepage.html");
export const homePage = renderPage(homepage, {
    tabTitle: "Learning Portal // Homepage",
});

const topics = readPage("./public/pages/topics/topics.html");
export const topicsPage = renderPage(topics, {
    tabTitle: "Learning Portal // Topics"
});

const introduction = readPage("./public/pages/introduction/introduction.html");
export const introductionPage = renderPage(introduction, {
    tabTitle: "Learning Portal // Introduction"
});

const firstServer = readPage("./public/pages/first_server/first_server.html");
export const firstServerPage = renderPage(firstServer, {
    tabTitle: "Learning Portal // First Server"
});

const servingHTML = readPage("./public/pages/serving_html_files/serving_html_files.html");
export const servingHTMLPage = renderPage(servingHTML, {
    tabTitle: "Learning Portal // Serving HTML files"
});

const time = readPage("./public/pages/time/time.html");
export const timePage = renderPage(time, {
    tabTitle: "Learning Portal // Time"
});

const exportImport = readPage("./public/pages/export_import/export_import.html");
export const exportImportPage = renderPage(exportImport, {
    tabTitle: "Learning Portal // Export & Import"
});

const ssr = readPage("./public/pages/ssr/ssr.html");
export const ssrPage = renderPage(ssr, {
    tabTitle: "Learning Portal // SSR"
});


const routers = readPage("./public/pages/routers/routers.html");
export const routersPage = renderPage(routers, {
    tabTitle: "Learning Portal // Routers"
});
 