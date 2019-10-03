const express = require('express');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

const formatDate = function() {
    const date = new Date();
    const year = date.getFullYear().toString();
    let month = date.getMonth().toString();
    let day = date.getDate().toString();
    if(day.length == 1) {
        day = '0' + day;
    } 
    if(month.length == 1) {
        month = '0' + month;
    }
    return year + month + day;
}

app.use("/save-report", async (req, res, next) => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    const fileName = "report_" + formatDate() + ".pdf";
    const reportPath = path.join(__dirname, "reports", fileName);
    await page.pdf({ path: reportPath, format: "A4" });
    await browser.close();
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.redirect('/');
  }
});

app.use('', (req, res, next) => {
    res.render('report',{
        fullName: `Alex Davies`
    });
});

app.listen(3000);