const Promise = require("promise");
const axios = require("axios");
const fs = require("fs");
const writeFile = Promise.denodeify(fs.writeFile);
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const prettifyJSON = require("json-format");

let iOSResponse, playMarketResponse;

console.log("Getting data from iTunes...");
axios.get("https://itunes.apple.com/search?term=oleksandr+nikolaievskiy&country=ru&entity=software&attribute=softwareDeveloper")
    .then(response => {
      iOSResponse = response.data.results.map(item => {
        let {
          artworkUrl512: icon, description, screenshotUrls,
          trackName: name, trackViewUrl: url, bundleId
        } = item;
        description = description.split("\n").join("<br/>");
        return {icon, description, screenshotUrls, name, url, bundleId};
      });
      console.log("Response from iTunes processed.");
      console.log("Getting from Play Market page with search results by developer...");
      return axios.get("https://play.google.com/store/apps/developer?id=Lingvokot");
    }).then(response => {
      console.log("Processing fetched page...");
      const dom = new JSDOM(response.data);
      const applicationCards = dom.window.document.getElementsByClassName("card");
      const applicationRefs = [];
      for (const card1 of applicationCards)
        applicationRefs.push("https://play.google.com" + card1.getElementsByClassName("card-click-target")[0].href);
      console.log("Fetching new pages by URLs found in cards...");
      return Promise.all(applicationRefs.map(axios.get));
    }).then(responses => {
      console.log("Processing fetched pages...");
      playMarketResponse = responses.map(response => {
        const dom = new JSDOM(response.data);
        const divWithData = dom.window.document.querySelector(".details-wrapper.apps");
        const name = divWithData.querySelector(".id-app-title").innerHTML;
        const bundleId = divWithData.getAttribute("data-docid");
        const url = `https://play.google.com/store/apps/details?id=${bundleId}`;
        const icon = "https:" + divWithData.querySelector(".cover-image").src;
        const description = divWithData.querySelector(".details-section.description > .details-section-contents .text-body > div").innerHTML;
        const screenshotsContainer = divWithData.querySelector(".details-section.screenshots .thumbnails");
        const screenshotElements = screenshotsContainer.getElementsByTagName("img");
        const screenshotUrls = [];
        for (const element1 of screenshotElements)
          screenshotUrls.push("https:" + element1.src.replace("=h310", "=h900"));
        return {icon, description, screenshotUrls, name, url, bundleId};
      });
      console.log("Pages from Play Market processed.");
      return;
    }).then(() => {
      console.log("Summing up data from both markets...");
      const sumDict = {};
      for (const entry1 of playMarketResponse) {
        const {icon, description, screenshotUrls, name, url: androidURL, bundleId} = entry1;
        sumDict[bundleId] = {icon, description, screenshotUrls, androidURL, bundleId};
      }
      for (const entry1 of iOSResponse) {
        if (sumDict[entry1.bundleId] == null) {
          const {icon, description, screenshotUrls, name, url: iOSURL, bundleId} = entry1;
          sumDict[bundleId] = {icon, description, screenshotUrls, iOSURL, bundleId};
        }
        else
          sumDict[entry1.bundleId].iOSURL = entry1.url;
      }
      const result = Object.values(sumDict);
      console.log("Data summed up, now writing to src/components/Screens/app-data.json");
      return writeFile(`${process.env["PWD"]}/src/components/Screens/app-data.json`, prettifyJSON(result));
    }).then(() => {
      console.log("Data written successfully! Don't forget to run `npm run build` to complete the update");
    }).catch(console.log);
