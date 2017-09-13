const Promise = require("promise");
const axios = require("axios");
const fs = require("fs");
const writeFile = Promise.denodeify(fs.writeFile);
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const prettifyJSON = require("json-format");

let iOSResponse, playMarketResponse;
let error = null;

const getLinksToApps = (pageLink, containersSelector, linkSelectorFromContainer, prefix) => {
  return axios.get(pageLink)
              .then((response) => {
                console.log(`Processing page ${pageLink}`);
                const dom = new JSDOM(response.data);
                const linksContainers = dom.window.document.querySelectorAll(containersSelector);
                const applicationRefs = [];
                for (const container1 of linksContainers)
                  applicationRefs.push(prefix + container1.querySelector(linkSelectorFromContainer).href);
                console.log("Links fetched");
                return applicationRefs;
              }).catch((error1) => {
                error = error1;
              });
};

const getAppDataFromPage = (pageLink, dataContainerSelector, dataSelectors) => {
  return axios.get(pageLink)
              .then((response) => {
                console.log(`Processing page ${pageLink}`);
                const dom = new JSDOM(response.data);
                const {document} = dom.window;
                const dataContainer = document.querySelector(dataContainerSelector);
                const screenshotsContainer = dataContainer.querySelector(dataSelectors.screenshotsContainer);
                const screenshotUrls = [], screenshots = screenshotsContainer.querySelectorAll("img");
                for (const screenshot1 of screenshots) {
                  screenshotUrls.push((screenshot1.src.indexOf("http") >= 0 ? "" : "https:") + screenshot1.src);
                }
                const toReturn = {
                  icon: "https:" + dataContainer.querySelector(dataSelectors.icon).src,
                  description: dataContainer.querySelector(dataSelectors.description).innerHTML,
                  screenshotUrls,
                  name: dataContainer.querySelector(dataSelectors.name).innerHTML,
                  url: pageLink
                };
                if (dataSelectors.bundleId)
                  toReturn.bundleId = dataContainer.getAttribute("data-docid");
                console.log(`App data from page ${pageLink} fetched`);
                return toReturn;
              }).catch((error1) => {
                error = error1;
              });
};

console.log("Fetching data from iTunes...");
getLinksToApps("https://itunes.apple.com/us/developer/oleksandr-nikolaievskyi/id1097334529",
    "#content .content .application", "a", "").then((links) => {
      return Promise.all(links.map((link1) => {
        return getAppDataFromPage(link1, "#content > .padder", {
          icon: "#left-stack img.artwork",
          description: ".center-stack > .product-review > p",
          screenshotsContainer: ".center-stack > .application.screenshots .content",
          name: "#title > .left > h1",
        });
      }));
    }).then((results) => {
      iOSResponse = results;
      if (error)
        throw error;
      else
        console.log("Data from iTunes fetched successfully");
    }).then(() => {
      console.log("Fetching data from Play Market...");
      return getLinksToApps("https://play.google.com/store/apps/developer?id=Lingvokot",
            ".card", ".card-click-target", "https://play.google.com");
    }).then((links) => {
      return Promise.all(links.map((link1) => {
        return getAppDataFromPage(link1, ".details-wrapper.apps", {
          icon: ".cover-image",
          description: ".details-section.description > .details-section-contents .text-body > div",
          screenshotsContainer: ".details-section.screenshots .thumbnails",
          name: ".id-app-title",
          bundleId: true
        });
      }));
    }).then(results => {
      for (let app1 of results) {
        app1.screenshotUrls = app1.screenshotUrls.map((url1) => {
          return url1.replace(new RegExp("h[0-9]{3}"), "h900");
        });
      }
      playMarketResponse = results;
      if (error)
        throw error;
      else
        console.log("Data from Play Market fetched successfully");
    }).then(() => {
      console.log("Summing up data from both markets...");
      const sumDict = {};
      for (const entry1 of playMarketResponse) {
        const {icon, description, screenshotUrls, name, url: androidURL, bundleId} = entry1;
        sumDict[name] = {icon, description, screenshotUrls, name, androidURL, bundleId};
      }
      for (const entry1 of iOSResponse) {
        if (sumDict[entry1.name] == null) {
          const {icon, description, screenshotUrls, name, url: iOSURL, bundleId} = entry1;
          sumDict[name] = {icon, description, screenshotUrls, name, iOSURL, bundleId};
        }
        else
          sumDict[entry1.name].iOSURL = entry1.url;
      }
      const result = Object.values(sumDict);
      console.log("Data summed up, now writing to src/components/Screens/app-data.json");
      return writeFile(`${process.env["PWD"]}/src/components/Screens/app-data.json`, prettifyJSON(result));
    }).then(() => {
      console.log("Data written successfully! Don't forget to run `npm run build` to complete the update");
    }).catch((error1) => {
      console.log(error1);
    });
